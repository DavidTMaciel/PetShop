import React from 'react';
import './style.css'

export default function Card(props) {
    return (
        <div className='box-selo'>
            <div className='titulo-selo'>
                <h3>{props.titulo}</h3>
                <img src='assets/selo.png' className='selo' alt='selo'></img>
            </div>
            <img src={props.imagem} className="imagens-card" alt='imagem-do-card'></img>
            <p>{props.descricao}</p>
        </div>
    )
}