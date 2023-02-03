import React from 'react'
import styled from 'styled-components'

const Secao = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
`

export default function Container({children,classe}) {
    return (
        <Secao className={classe}>{children}</Secao>
    )
}
