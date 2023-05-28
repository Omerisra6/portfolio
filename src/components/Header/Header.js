import React from 'react'
import styled from 'styled-components'
import Logo from './components/Logo'
import Navigation from './components/Navigation/Navigation'

const StyledHeader = styled.div`
    display: flex;
    padding: 7vh 2vw;
    align-items: center;
    justify-content: space-between;
    background-color: var( --theme-background );
`
export default function Header() {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
        </StyledHeader>
    )   
}
