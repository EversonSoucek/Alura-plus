import Botao from 'components/Botao'
import Texto from 'components/Texto'
import React from 'react'
import Tela1 from './Tela1.png'
import Tela2 from './Tela2.png'
import styles from './SegundaSecao.module.css'
import Container from 'components/Container'


export default function SegundaSecao() {
    return (
        <Container classe={styles.container__secundario}>
            <div>
                <Texto tamanho='16px'>Só o Combo+ oferece Alura+ e Alura Língua juntos para você ter acesso a <br /> cursos de diversas áreas da tecnologia e aprender inglês ou espanhol, onde e<br /> como quiser.</Texto>
                <div className={styles.botao__secundario}><Botao largura='162.68px' >Assine o Combo+</Botao></div>
            </div>
            <img src={Tela1} alt='tela do alura plus' className={styles.tela1} />
            <img src={Tela2} alt="tela do alura linguas" className={styles.tela2} />
        </Container>
    )
}
