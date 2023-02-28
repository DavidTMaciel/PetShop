import Card from '../card';
import './style.css'
import { useState } from 'react';

export default function Main() {
    const [escolhaPet, setescolhaPet] = useState(true)

    const alterarEscolha = () => {
        setescolhaPet(!escolhaPet)
    }

    return (

        <main>
            <h2>SELO PET DE QUALIDADE</h2>
            <button onClick={alterarEscolha} className="button-selecao">
                <img src={escolhaPet ? "assets/cachorro.png" : "assets/gato.png"}>
                </img></button>
            <div className='secao-selos'>
                <Card
                    titulo="Selo Tosa"
                    imagem={escolhaPet ? "assets/tosa.jpg" : "assets/gato-tosa.jpg"}
                    descricao="Aqui temos a maior qualidade em tosa, de modo correto e do jeito que seu pet vai amar"
                />
                <Card
                    titulo="Selo banho"
                    imagem={escolhaPet ? "assets/banho.jpg" : "assets/gato-banho-tosa.png"}
                    descricao="Nosso banho, vou te contar não tem igual, usamos produtos de qualidade, e que não agridem seu pet, ta esperando o que?"
                />
                <Card
                    titulo="Selo Veterinario"
                    imagem={escolhaPet ? "assets/veterinario.jpg" : "assets/gato-exame.png"}
                    descricao="temos profissionais qualificados que teram todo cuidado com seu bixinho, no momento mais chato para ele"
                />
            </div>
            <section >
                <h3>ADOÇÃO</h3>
                <div classname="descricao-adocao" >
                    <div className='adocao'>
                        <img src='assets/banner-adocao.jpg' className='banner-adocao'></img>
                        <p><span>Porque adotar com a PetShop?</span> todos os animais são bem cuidados e vacinados, damos muito carinho e amor, mais você pode da bem mais a ele, simplemente dando um lar para eles.</p>
                    </div>
                </div>
            </section>


        </main>
    )
}


