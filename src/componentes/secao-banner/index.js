import React from 'react';
import './style.css'

export default function Banner() {
    return (
        <div className='secao-banner'>
            <div className='banner-color '>
                <h1>Pensamos no seu pet</h1>
                <span>E pensamos em você</span>
                <p>Oferecendo os melhores preços do mercado</p>
            </div>
            <div className='banner-imagem '>
                <img src='assets/banner.png' alt='banner'></img>
            </div>
        </div>
    )

}
