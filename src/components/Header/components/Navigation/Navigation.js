import React, { useState } from 'react'
import ToggleMenuButton from './components/ToggleMenuButton'
import styled from 'styled-components'
import NavLinksContainer from './components/NavLinksContainer'
import SayHelloContainer from './components/SayHelloContainer'
import SocialLinksContainer from './components/SocialLinksContainer'

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: column;
    width: 15em;
    padding: 3em;
    position: absolute;
    top: 3vh;
    right: 4vw;
    transition: all 0.3s ease;
    transform-origin:top right;
    background-color: ${ ({isDisplayed}) => isDisplayed ? 'var( --theme-secondary-color)' : 'rgba(0, 0, 0, 0)' };
    padding: 4vh 3vw;
    padding-bottom: 10vh;


    .nav-content-container{
        display: flex;
        visibility: ${ ({isDisplayed}) => isDisplayed ? 'visible' : 'hidden'};
        flex-direction: column;
        gap: 2em;
        position: relative;
        top: 6vh;
        transform-origin: top right;
    }

    a{
        color: var( --white );
    }

    a::after{
        content: '';
        display: inline-block;
        background-color: var( --white );
        opacity: 0;
        width: 1em;
        height: 1em;
        transition: all .4s;
        position: relative;
        left: -0.8em;
        top: 0.1em;
    }

    a:hover::after{
        opacity: 0.4;
        left: -0.5em;
    }

    @keyframes showNav {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @media ( max-width: 700px) {
        width: 84%;
        height: 96%;
        overflow: hidden;
        top: 0;
        left: 0;
        padding: 2vh 8vw ;

        
        font-size: 1.5em;
        

        .nav-content-container{
            padding-top: 10%;
        }
    }
`


export default function Navigation() {

    const [ isDisplayed, setIsDisplayed ] = useState( false )
    
    return (
        <StyledNavigation isDisplayed={isDisplayed}>

            <ToggleMenuButton isDisplayed={ isDisplayed } setIsDisplayed={ setIsDisplayed }/>

            <div className='nav-content-container'>
                <NavLinksContainer/>
                <SayHelloContainer/>
                <SocialLinksContainer/>
            </div>

            
        
        </StyledNavigation>
    )
}
