import Titulo from 'components/Titulo'
import React from 'react'
import Combo from './Combo.png'
import styles from './Cabecalho.module.css'
import Botao from 'components/Botao'
import Texto from 'components/Texto'

export default function Cabecalho() {
    return (
        <header className={styles.container}>
            <div className={styles.container__caixa}>
                <Titulo tamanho='28px'>Com o Combo+, você pode aproveitar a<br /> Alura+ e o Alura Língua por um preço<br />único.</Titulo>
                <img className={styles.container__imagem} src={Combo} alt='Combo junção da alura e alura língua' />
                <Botao cor="#167bf7s">Assine por 12X de R$120,00</Botao>
                <Botao cor="transparent" Borda='2px solid #FFFFFF'>Assinar somente o Alura+</Botao>
                <Texto tamanho='12px'>*O preço pode variar caso a assinatura seja feita em outros planos.</Texto>
            </div>
        </header>

    )
}
