import React from 'react'
import styles from './Rodape.module.css'
import logo from './Logo.png'
import LinksRodape from 'components/LinksRodape'
import Texto from 'components/Texto'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src={logo} alt='logo da alura' className={styles.rodape__logo} />
            <ul className={styles.rodape__lista}>
                <LinksRodape>Idioma</LinksRodape>
                <LinksRodape>Dispositivos compatíveis</LinksRodape>
                <LinksRodape>Contrato de assinatura</LinksRodape>
                <LinksRodape>Politica de privacidade</LinksRodape>
                <LinksRodape>Proteção de dados no Brasil</LinksRodape>
                <LinksRodape>Anuncios personalizados</LinksRodape>
                <LinksRodape>Ajuda</LinksRodape>
            </ul>
            <div className={styles.rodape__texto}>
                <Texto>® 2021 Alura, Alura+ e Alura Língua. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</Texto>
            </div>
            <Texto>
                Alura+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Alura+ é comercializado por Aovs Sistemas de Informática S.A., Rua Vergueiro, 3185 -
                < br /> Liberdade, São Paulo - SP, 04101-300, Brasil e CNPJ 05.555.382/0001-33
            </Texto>
        </footer>
    )
}
