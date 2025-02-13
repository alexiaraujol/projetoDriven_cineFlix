import styled from "styled-components"

export default function Sessoes() {
    return (
        <Conteudo>

            <Titulo>Selecione o horário</Titulo>

            <Caixa>

                <h1> Quinta-feira, XX/XX/XXXX </h1>

                <Horarios>
                    <li> XX:XX </li>
                    <li> XX:XX </li>
                    <li> XX:XX </li>
                    <li> XX:XX </li>
                    <li> XX:XX </li>
                </Horarios>


            </Caixa>

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
    margin-bottom: 15px;
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

const Horarios = styled.ul`

    display: flex;
    padding-top: 9px ;
    padding-left: 9px ;
    flex-wrap: wrap;
    color:#EE897F;

   
    


    li{
        width: 84px;
        height: 41px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;


        border: solid 2px  #EE897F ;
        border-radius: 4px;
    }
    


`
