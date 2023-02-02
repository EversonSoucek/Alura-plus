import React from 'react'
import styles from './Texto.module.css'

export default function Texto({ children, tamanho }) {
    return (
        <p className={styles.texto} style={{ fontSize: tamanho }}>{children}</p>
    )
}
