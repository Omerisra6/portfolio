import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.img`
    width: 10vw;
`
export default function Logo() {
    return (
        <StyledLogo src='/favicon.ico' alt='oMEr'></StyledLogo>
    )
}
