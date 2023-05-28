import React from 'react'
import styled from 'styled-components'

const StyledToggleMenuButton = styled.button`
    border: none;
    background: none;
    display: ${ ( { isDisplayed } ) => isDisplayed ? 'block' : 'flex'};
    flex-direction: column;
    gap: 0.5em;
    height: fit-content;
    cursor: pointer;
    width: 3em;
    align-self: flex-end;
    position: relative;
    top: 3vh;


    &::after{
        content: ' ';
        display: block;
        height: 2px;
        background: var( --theme-grad-background );
        width: 70%;
        align-self: flex-end;
        transform: ${ ( { isDisplayed } ) => isDisplayed ? 'rotate( -45deg )' : 'rotate( 0deg )'};
        position: relative;
        top: ${ ( { isDisplayed } ) => isDisplayed ? '-2px' : '0'};       
        transition: all 0.3s;
    }

    &::before{
        content: ' ';
        display: block;
        height: 2px;
        width: ${ ( { isDisplayed }) => isDisplayed ? '70%' : '100%' };
        background: var( --theme-grad-background );
        transform: ${ ( { isDisplayed } ) => isDisplayed ? 'rotate( 45deg )' : 'rotate( 0deg )'};
        transition: all 0.3s;
    }
`
export default function ToggleMenuButton({ isDisplayed, setIsDisplayed}) {
    return (
        <StyledToggleMenuButton className='toggle-menu' key='toggle-menu' isDisplayed={isDisplayed} onClick={ () => { setIsDisplayed( ! isDisplayed ) } }></StyledToggleMenuButton>
    )
}
