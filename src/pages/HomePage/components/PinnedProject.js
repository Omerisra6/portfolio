import React from 'react'
import styled from 'styled-components'

const StyledPinnedProject = styled.a`
    position: relative;
    color: var( --theme-secondary-color );
    width: fit-content;
    font-weight: 400;

    &::before{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: var( --theme-grad-background );
        position: absolute;
        bottom: -3px;
        left: 0;
        transition: all .3s ease-in-out;    
    }

    &::after{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: var( --theme-reverse-grad-background );
        position: absolute;
        bottom: -3px;
        left: 0;
        transition: all .3s ease-in-out;    
    }

    &:hover::after{
        opacity: 0;
    }

`
export default function PinnedProject( { url, title } ) {
    return (
        <StyledPinnedProject className="pinned-project" href={`/projects/${url}`}>{title}</StyledPinnedProject>
    )
}
