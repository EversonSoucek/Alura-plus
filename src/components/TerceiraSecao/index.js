import React from 'react'
import notebook from './Notebook.png'
import Titulo from 'components/Titulo'
import Texto from 'components/Texto'
import Container from 'components/Container'
import styles from './TerceiraSecao.module.css'


export default function TerceiraSecao() {
    return (
        <Container classe={styles.container__terceiro}>
            <img src={notebook} className={styles.imagem} />
            <div>
                <Titulo tamanho='48px'>Baixe seus cursos</Titulo>
                <Texto tamanho='16px'>Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre <br/> com você, até mesmo sem internet.</Texto>
            </div>

        </Container>
    )
}
