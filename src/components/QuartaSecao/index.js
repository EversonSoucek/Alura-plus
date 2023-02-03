import Titulo from 'components/Titulo'
import React from 'react'
import styles from './QuartaSecao.module.css'
import celular from './celular.png'
import computador from './computador.png'
import tv from './tv.png'

const dispositivos = [
    {
        nome: 'Celular',
        src: celular,
        id: 1
    },
    {
        nome: 'Computador',
        src: computador,
        id: 2
    },
    {
        nome: 'TV',
        src: tv,
        id: 3
    }
]

export default function QuartaSecao() {
    return (
        <section className={styles.dispositivos}>
            <Titulo tamanho='48px'>Disponivel nos seus dispositivos favoritos</Titulo>
            <ul className={styles.dispositivos__lista}>
                {dispositivos.map(dispositivo => (
                    <li key={dispositivo.id}><img src={dispositivo.src} /><Titulo tamanho="32px">{dispositivo.nome}</Titulo></li>
                ))}
            </ul>
        </section>
    )
}
