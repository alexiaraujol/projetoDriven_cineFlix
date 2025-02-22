import styled from "styled-components"
import { Link, useLocation } from "react-router-dom";

export default function PedidoFinalizado() {
    const location = useLocation();
    const { selectedSeats, nome, cpf, movieData, assento } = location.state;

    console.log(selectedSeats)
    
    return (
        <Conteudo>
            <Titulo>Pedido finalizado!</Titulo>
            <Caixa>
                <h1>Filme e sessão</h1>
                <p>{movieData.title}</p>
                <p>{assento.day.date} às {assento.name}</p>

                <h1>Ingressos</h1>
                {selectedSeats.map((seat, index) => (
                    <p key={index}>Assento {seat}</p>
                ))}
                
                <h1>Comprador(a)</h1>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf}</p>
            </Caixa>
            <Botao to="/">Voltar para tela inicial</Botao>
        </Conteudo>
    );
}



const Conteudo = styled.div`
    background-color: #212226 ;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top:68px ;
`

const Titulo = styled.h1`
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #9DB899;
    font-family: "Sarala", serif;
    font-size: 24px;
    font-weight: 400;
`

const Caixa = styled.div`
    width: 338px;
    height: 421px;
    border-radius:8px;
    background-color: #2B2D36;

    h1{
        width: 292px;
        padding-bottom: 8px;
        margin: 18px;
        font-family: "Sarala", serif;
        font-size: 22px;
        font-weight: 700;
        color:#EE897F ;
        border-bottom:1px solid #4E5A65 ;
    }

    p{
        font-family: "Sarala", serif;
        font-size: 20px;
        font-weight: 400;
        color:#FFFFFF ;
        margin: 18px;
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
    margin-bottom: 50px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    background-color: #EE897F ;
`