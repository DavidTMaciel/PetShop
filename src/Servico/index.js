import React from "react";
import Rodape from "../componentes/Rodape";
import Topo from "../componentes/topo";
import './style.css'

export default function Servico() {
    return (
        <section>
            <Topo />
            <section className="servico">
                <div>
                    <h2>Banho e Tosa</h2>
                    <div className="servicos">
                        <img src="assets/banner-banho.jpg" alt="banner-banho" className="banner-servico"></img>
                        <div className="agendamento">
                            <p>Fazemos toda a Higienização do seu pet, totalmente completa, Higienização das orelhas, dos olhos, dos dentes e aparamos as unhas, já na tosa, fazemos os cortes, de maneira correta e com todo o cuidado possivel!</p>
                            <span>Valor: R$ 90,00</span>
                            <p>Agende agora mesmo pelo WhatsApp</p>
                            <button><img src="assets/whatz.png" alt="logo-whatzap"></img></button>
                        </div>
                    </div>
                </div>
                <h2>Exames</h2>
                <div className="servicos">
                    <div className="agendamento">
                        <p>Temos especialistas em diversas aréas de atuação para seu pet, uma equipe comprometida com a saude dos animais.</p>
                        <span>Valor: A depender do tipo de exame ou consulta</span>
                        <p>Agende agora mesmo pelo WhatsApp</p>
                        <button><img src="assets/whatz.png" alt="logo-whatzap"></img></button>
                    </div>
                    <img src="assets/banner-exames.jpg" alt="banner-banho" className="banner-servico"></img>
                </div>
                <h2>Adoção</h2>
                <div className="servicos">
                    <img src="assets/adocao.jpg" alt="banner-banho" className="banner-servico"></img>
                    <div className="agendamento">
                        <p>Para adotar um pet, compareça em uma das nossas lojas, para escolher um e chamar de seu, é bem simples e rapido, garanto que fará o dia de um pet mais feliz.</p>
                        <span>Totalmente sem custo, só paga caso queria algum serviço antes de retirar seu pet.</span>
                        <p>Agende agora mesmo pelo WhatsApp</p>
                        <button><img src="assets/whatz.png" alt="logo-whatzap"></img></button>
                    </div>
                </div>
            </section>
            <Rodape />
        </section>
    )
}
