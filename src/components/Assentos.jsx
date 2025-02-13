import styled from "styled-components"

export default function Assentos() {

    return (

        <Conteudo className="escolherAssento">

            <Titulo>
                <p>Selecione o(s) assento(s)</p>
            </Titulo>

            <Lugares>
                <span>1</span> <span>1</span> <span>1</span> <span>1</span> <span>1</span> <span>1</span>
            </Lugares>

            <div>
                <input type="text" />

                <input type="text" />

                <button></button>
            </div>

        </Conteudo>
        
    )
}


const Conteudo = styled.div`
    background-color: #212226 ;
    width: 100%;
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

const Lugares= styled.div`
    color:#fff;

    span{

        width: 28px;
        height: 28px;   
        background-color: red;
    }
`