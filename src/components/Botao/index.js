import React from 'react'
import styles from './Botao.module.css'

export default function Botao({ children, largura, cor, Borda }) {
    return (
        <a className={styles.botao} href="www.alura.com.br" style={{ width: `${largura}`, backgroundColor: (cor), border: (Borda) }}>{children}</a>
    )
}
