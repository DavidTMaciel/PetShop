import React from "react";
import Topo from "../componentes/topo";
import Banner from "../componentes/secao-banner";
import Main from "../componentes/secao-main";
import Rodape from "../componentes/Rodape";


export default function Home() {
    return (
        <div>
            <Topo />
            <Banner />
            <Main />
            <Rodape />
        </div>

    )
}

