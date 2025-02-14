import Assentos from "./Assentos";
import EmCartaz from "./EmCartaz";
import Navbar from "./Navbar";
import PedidoFinalizado from "./PedidoFinalizado";
import Sessoes from "./Sessoes";

export default function CineFlixMain() {
    return (
        <div className="conteudo">

           <Navbar/>

           

            <EmCartaz/>

            {/*<Sessoes/>*/}

             {/* <Assentos/>*/}

            {/*<PedidoFinalizado/>*/}
        </div>

    )
}