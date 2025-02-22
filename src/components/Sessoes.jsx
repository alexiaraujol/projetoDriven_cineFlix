import styled from "styled-components"

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sessoes() {

    const { idFilme } = useParams()

    const [sessao, setSessao] = useState(null)

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(res => setSessao(res.data))
            .catch(err => console.log(err.response.data))
    }, [])


    if (sessao === null) {
        return <div>Carregando...</div>
    }

    return (
        <Conteudo>

            <Titulo>Selecione o horário</Titulo>



            <>
                {sessao.days.map((dia, index) => (
                    <Caixa>
                        <h1> {dia.weekday}, {dia.date}</h1>
                        <Horarios to={`/assento/${sessao.id}`} key={sessao.id}>

                            {dia.showtimes.map((horario) => (
                               
                                <Hora to={`/assento/${horario.id}`} key={horario.id}>{horario.name}</Hora>
                            
                            ))}
                        </Horarios>
                    </Caixa>

                ))}

            </>


        </Conteudo>
    )
}

const Conteudo = styled.div`
    max-width: 500px ;
    height: 100%;
    background-color:#212226 ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top:68px;

`
const Titulo = styled.p`
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "Sarala", serif;
    font-size: 24px;
    font-weight: 400;
    
`
const Caixa = styled.div`

    width: 338px;
    height: auto;
    margin-bottom: 23px;
    background-color:#2B2D36 ;
    font-family: "Sarala", serif;
    color: #fff;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;



    h1{
        width: 256px;
        height: 49px;
        padding-bottom:5px;
        padding-top: 8px;
        font-size: 20px;
        font-weight: 400;
        border-bottom: solid 1px #4E5A65 ;

        display: flex;
        justify-content: center;
        align-items: center;
       
    }
    
`

const Horarios = styled(Link)`

    display: flex;
    padding-top: 9px ;
    padding-left: 9px ;
    flex-wrap: wrap;
    text-decoration:none;
   

`

const Hora = styled(Link)`

    width: 84px;
    height: 41px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;        
    border: solid 2px  #EE897F ;
    border-radius: 4px;
    color:#EE897F;
    text-decoration:none;


 
`