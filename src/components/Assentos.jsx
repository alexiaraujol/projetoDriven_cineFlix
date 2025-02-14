import styled from "styled-components"

export default function Assentos() {

    return (

        <Conteudo className="escolherAssento">

            <Titulo>
                <p>Selecione o(s) assento(s)</p>
            </Titulo>

            <Lugares>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
                <button>11</button>
                <button>12</button>
                <button>13</button>
                <button>14</button>
                <button>15</button>
                <button>16</button>
                <button>17</button>
                <button>18</button>
                <button>19</button>
                <button>20</button>
                <button>21</button>
                <button>22</button>
                <button>23</button>
                <button>24</button>
                <button>25</button>
                <button>26</button>
                <button>27</button>
                <button>28</button>
                <button>29</button>
                <button>30</button>
                <button>31</button>
                <button>32</button>
                <button>33</button>
                <button>34</button>
                <button>35</button>
                <button>36</button>
                <button>37</button>
                <button>38</button>
                <button>39</button>
                <button>40</button>
                <button>41</button>
                <button>42</button>
                <button>43</button>
                <button>44</button>
                <button>45</button>
                <button>46</button>
                <button>47</button>
                <button>48</button>
                <button>49</button>
                <button>50</button>
            </Lugares>

            <Dados>

                <p>Nome do comprador(a)</p>
                <CaixaTexto type="text" placeholder="Digite seu nome..." />

                <p>CPF do comprador(a)</p>
                <CaixaTexto type="text" placeholder="Digite seu CPF..." />

                <button>Resevar assento(s)</button>
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
    flex-direction: row;


    border-bottom: 1px solid #4E5A65;
    margin-bottom: 25px;

    button{
        font-family: "Sarala", serif;
        font-weight: 400;
        font-size: 11px;
        width: 26px;
        height: 26px;   
        border-radius:12px ;
        margin-left: 20px;
        margin-top: 22px ;
        border:none;
        background-color:#9DB899;
        border: 1px solid #9DB899;
        color: #2B2D36;
    }
`

const Dados = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin-left: 25px;

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

    button{
        width:338px ;
        height: 40px;
        font-family: "Sarala", serif;
        font-size: 18px;
        font-weight: 700;
        margin-top: 20px;
        color: #2B2D36;

        margin-bottom: 50px;
       
        border-radius: 8px;
        border: none;
        background-color: #EE897F ;

    }

    

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