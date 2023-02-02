import React from 'react'
import styles from './Titulo.module.css'

export default function Titulo({tamanho,children}) {
  return (
    <h1 className={styles.titulo} style={{fontSize:`${tamanho}`}}>
        {children}
    </h1>
  )
}
