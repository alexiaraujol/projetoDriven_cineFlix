import Assentos from "./Assentos";
import EmCartaz from "./EmCartaz";
import Navbar from "./Navbar";
import PedidoFinalizado from "./PedidoFinalizado";
import Sessoes from "./Sessoes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CineFlixMain() {
    return (
        <BrowserRouter>

           <Navbar/>

           <Routes>
                <Route path="/" element={<EmCartaz/>} />
                <Route path="/escolher-sessao" element={<Sessoes/>} />
                <Route path="/escolha-assento" element={<Assentos/>} />
                <Route path="/pedido-finalizado" element={<PedidoFinalizado/>} />
           </Routes>

        </BrowserRouter>

    )
}