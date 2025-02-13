import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import carregando from "../image/ZKZg.gif"



export default function EmCartaz() {
    const [filmes, setFilmes] = useState(null);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        promise.then((response) => setFilmes(response.data));

        promise.catch((error) => console.log(error.response.data));
    }, []);


     if(filmes === null) {
        return <Carregando src={carregando}/>
     }


    return (

        <Conteudo>

            <Titulo>
                <p>Em Cartaz</p>
            </Titulo>

            <Cartaz>

                {filmes.map(film => (
                    <Filme key={film.id}>
                        <img src={film.posterURL} />
                    </Filme>
                ))}

                


            </Cartaz>

        </Conteudo>
    )
}

const Conteudo = styled.div`
    background-color: #212226 ;
    max-width: 500px ;
    height: 100%;

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
const Cartaz = styled.ul`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin-left: 4px;
    


    
    
`

const Filme = styled.li`

    img{
        width: 145px;
        height: 210px;
        border-radius: 8px;
        margin:10px;

    }
    
`

const Carregando = styled.img`

    width:50px;
    margin-top:200px;
    margin-left:150px;

    z-index:1;
    
`
