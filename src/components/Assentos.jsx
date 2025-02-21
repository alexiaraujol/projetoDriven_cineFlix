import styled from "styled-components"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Assentos() {

    const { idSessao } = useParams()

    const [assento, setAssento] = useState(null)

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(res => setAssento(res.data))
            .catch(err => console.log(err.response.data))
    }, [])


    if (assento === null) {
        return <div>Carregando...</div>
    }


    return (

        <Conteudo className="escolherAssento">

            <Titulo>
                <p>Selecione o(s) assento(s)</p>
            </Titulo>

            <Lugares>
                {assento?.seats.map((seat) => (
                    <Lugar key={seat.id}>{seat.name}</Lugar>
                ))}
            </Lugares>

            <Dados>

                <p>Nome do comprador(a)</p>
                <CaixaTexto type="text" placeholder="Digite seu nome..." />

                <p>CPF do comprador(a)</p>
                <CaixaTexto type="text" placeholder="Digite seu CPF..." />

                <Botao to="/finalizado" >Resevar assento(s)</Botao>
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
    padding-bottom: 25px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #4E5A65;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;

`
const Lugar = styled.button`
        font-family: "Sarala", serif;
        font-weight: 400;
        font-size: 12px;
        width: 28px;
        height: 28px;   
        border-radius:12px ;
        margin-left: 9px;
        margin-top: 14px;
        border:none;
        background-color:#9DB899;
        border: 1px solid #9DB899;
        color: #2B2D36;
    
`



const Dados = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin-left: 12.5px;
    margin-right: 12.5px;

    input{
        width:338px ;
        height: 40px;
        border-radius: 8px;
        margin-bottom: 9px;
        border: none;
    }

    p{
        font-family: "Sarala", serif;
        font-size: 16px;
        font-weight: 400;
        color:#fff;
        margin-bottom: 7px;

    }
`

const Botao = styled(Link)`
        width:338px ;
        height: 40px;
        font-family: "Sarala", serif;
        font-size: 18px;
        font-weight: 700;
        margin-top: 20px;
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
        margin-bottom: 9px;
        border: none;

        &::placeholder{

            font-size: 16px;
            font-weight: 400;
            color:#AFAFAF ;
            font-style: italic;
            padding-left: 10px;

        }

    
`