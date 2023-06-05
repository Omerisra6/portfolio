import React from 'react'
import styled from 'styled-components'

const StyledSayHelloContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    .say-hello-text{
        letter-spacing: 0.25em;
        background: var( --theme-grad-background );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .say-hello-links-container{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

`
export default function SayHelloContainer() {
    return (
        <StyledSayHelloContainer>

            <div className='say-hello-text'>SAY HELLO</div>

            <div className='say-hello-links-container'>
                
                <a className='link' href='mailto:omerisraeli6@gmail.com'>omerisraeli6@gmail.com</a>
                <a className='link' href='https://wa.me/972549063651?text=SAY HELLO'>0549063651</a>

            </div>
        </StyledSayHelloContainer>
    )
}