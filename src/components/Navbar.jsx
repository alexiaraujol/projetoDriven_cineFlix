import claperBoard from "../image/claperboard.png"
import styled from "styled-components"

export default function Navbar() {
    return (
        <Topo>

            <div>
                <img src={claperBoard} />
                Cineflex
            </div>

        </Topo>
    )
}


const Topo = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    
    width: 375;
    height: 67;
    padding: 9px;
    background-color:#EE897F ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:34px ;
    font-weight: 600;
    font-family: "Raleway", serif;
    color: #FADBC5;
    img{
    width: 40px;
    padding-right: 6px;    
    }    
`


