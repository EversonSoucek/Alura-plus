import React from 'react'
import styles from './LinksRodape.module.css'

export default function LinksRodape({ children }) {
    return (
        <li>
            <a href='#' className={styles.lista__link}>{children}</a>
        </li>
    )
}
