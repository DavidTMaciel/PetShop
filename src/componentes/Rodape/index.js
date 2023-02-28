import React from 'react'
import './style.css'

export default function Rodape() {
    return (
        <footer>
            <div className='rodape'>
                <div className='card-contato'>
                    <h4>Telefone</h4>
                    <div className='informacoes'>
                        <img src='assets/telefone.png' alt='icone de telefone'></img>
                        <p>(99)9.9999-9999</p>
                    </div>
                </div>
                <div className='card-contato'>
                    <h4>Redes Sociais</h4>
                    <div className='informacoes'>
                        <img src='assets/ig.png' alt='icone instagram'></img>
                        <p>@PetShop</p>
                    </div>
                    <div className='informacoes'>
                        <img src='assets/twitter.png' alt='icone twitter'></img>
                        <p>@Pet_Shop</p>
                    </div>
                </div>
                <div className='card-contato'>
                    <h4>Horario de funcionamento</h4>
                    <p>Segunda a sexta 9h as 18h</p>
                    <p>Sabado e domingo 8h as 12h</p>
                </div>
            </div>
        </footer>
    )
}
