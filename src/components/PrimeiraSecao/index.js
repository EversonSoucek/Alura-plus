import React from 'react'
import imagemPrimeiraSecaoComputador from './Primeira-secao-computador.png'
import imagemSegundaSecaoCelular from './Primeira-secao-celular.png'
import styles from './PrimeiraSecao.module.css'
import Titulo from 'components/Titulo'
import Texto from 'components/Texto'
import Container from 'components/Container'

export default function PrimeiraSecao() {
    return (
            <Container classe={styles.container__secundario}>
                <img src={imagemPrimeiraSecaoComputador} alt='monitor com o alura plus aberto' className={styles.secundario__imagem__computador} />
                <img src={imagemSegundaSecaoCelular} alt='celular com o alura plus aberto' className={styles.secundario__imagem__celular} />
                <div>
                    <Titulo tamanho='48px'>Assista do seu jeito</Titulo>
                    <Texto tamanho='16px'>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos.<br />Nossa seleção de cursos não para de crescer.</Texto>
                </div>
            </Container >
    )
}


