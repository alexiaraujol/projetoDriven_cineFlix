import styled from "styled-components"
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Assentos() {

    const { idSessao } = useParams()
    const navigate = useNavigate();

    const [assento, setAssento] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [movieData, setMovieData] = useState({});

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(res => {
                setAssento(res.data);
                setMovieData(res.data.movie);
            })
            .catch(err => console.log(err.response.data))
    }, [])


    if (assento === null) {
        return <div>Carregando...</div>
    }

    const handleSeatClick = (seat) => {
        if (seat.isAvailable) {
            if (selectedSeats.includes(seat.id)) {
                setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
            } else {
                setSelectedSeats([...selectedSeats, seat.id]);
            }
        } else {
            alert("Esse assento não está disponível");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = {
            ids: selectedSeats,
            name: nome,
            cpf: cpf
        };
        axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', reservation)
            .then(response => {
                const selectedSeatNames = assento.seats
                    .filter(seat => selectedSeats.includes(seat.id))
                    .map(seat => seat.name);
                console.log("Reserva feita com sucesso!", response.data);
                navigate("/pedido-finalizado", { state: { selectedSeats: selectedSeatNames, nome, cpf, movieData, assento } });
            })
            .catch(error => {
                console.error("Erro ao fazer a reserva", error.response.data);
            });
    };

    return (

        <Conteudo className="escolherAssento">

            <Titulo>
                <p>Selecione o(s) assento(s)</p>
            </Titulo>

            <Lugares>
                {assento?.seats.map((seat) => (
                    <Lugar 
                        key={seat.id} 
                        onClick={() => handleSeatClick(seat)} 
                        isAvailable={seat.isAvailable}
                        isSelected={selectedSeats.includes(seat.id)}
                    >
                        {seat.name}
                    </Lugar>
                ))}
            </Lugares>

            <Dados onSubmit={handleSubmit}>
                <Nome>Nome do comprador(a):</Nome>
                <CaixaTexto  
                    type="text" 
                    placeholder="Digite seu nome..." 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}                       
                />
                <Nome>CPF do comprador(a):</Nome>
                <CaixaTexto                    
                    type="text" 
                    placeholder="Digite seu CPF..." 
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}                       
                />
                <Botao type="submit">Reservar assento(s)</Botao>
            </Dados>

        </Conteudo>

    )
}


const Conteudo = styled.div`
    background-color: #212226 ;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top:68px;
`

const Titulo = styled.div`
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{color: aliceblue;
    font-family: "Sarala", serif;
    font-size: 24px;
    font-weight: 400;
    }

`

const Lugares = styled.div`
    color:#fff;
    padding: 5px 36px 28px 45px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #4E5A65;
    margin: 6px;
`
const Lugar = styled.button`
        font-family: "Sarala", serif;
        font-weight: 400;
        font-size: 12px;
        width: 28px;
        height: 28px;   
        border-radius:17px ;
        margin-left: 9px;
        margin-top: 14px;
        border:none;
        background-color:${props => props.isSelected ? '#FADBC5' : props.isAvailable ? '#9DB899' : '#2B2D36'};
        border: 1px solid ${props => props.isSelected ? '#EE897F' : props.isAvailable ? '#9DB899' : '#2B2D36'};
        color: #2B2D36;
        
        /* botao selecionado
        background-color: #FADBC5;
        border: 1px solid #EE897F;
         */

         /* lugar já escolhido 
         background-color: #2B2D36;
         border: 1px solid #2B2D36 */

`



const Dados = styled.form`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin: 22px 25px;

    input{
        width:338px ;
        height: 40px;
        border-radius: 8px;
        margin-bottom: 9px;
        border: none;
    }

`

const Nome = styled.label`

    font-family: "Sarala", serif;
    font-size: 18px;
    font-weight: 400;
    color:#fff;
    margin-bottom: 10px;
    margin-left: 47px;
    

`

const Botao = styled.button`
        width:338px ;
        height: 40px;
        font-family: "Sarala", serif;
        font-size: 18px;
        font-weight: 700;
        margin-top: 20px;
        margin-left: 61px;
        color: #2B2D36;
        text-decoration: none;
        margin-bottom: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
       
        border-radius: 8px;
        border: none;
        background-color: #EE897F ;
    
`

const CaixaTexto = styled.input`

        width:338px ;
        height: 40px;
        border-radius: 8px;
        margin-bottom: 13px;
        margin-left: 58px;
        margin-top: 12px;
        border: none;

        &::placeholder{

            font-size: 16px;
            font-weight: 400;
            color:#AFAFAF ;
            font-style: italic;
            padding-left: 10px;

        }

    
`