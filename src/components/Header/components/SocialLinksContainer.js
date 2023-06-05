import React from 'react'
import styled from 'styled-components'

const StyledSocialLinksContainer = styled.div`

    display: flex;
    gap: 2em;

    .fa-github::before, .fa-github::after {
     
        content: "\f09b";
    }

    a{
        position: relative;
    }

    i::after, i::before{
        font-family: "Font Awesome 6 Brands";
        font-weight: 400;
        font-size: 1.3em;
        position: absolute;
        left: 50%;
        right: 50%;
        width: 24px;
        height: 24px;
        transform: translate( -50%, -50% );
        font-style: normal;
        font-variant: normal;
        line-height: 1;
        text-rendering: auto;
        opacity: 1;
        background: var( --theme-grad-background );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: opacity 0.3s ease-in-out;
        z-index: 1;
    }

    i::after{
        background: var( --theme-reverse-grad-background );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        opacity: 0;
    }

    i:hover::after{
        opacity: 1;
    }
`
export default function SocialLinksContainer() {
    return (
        <StyledSocialLinksContainer>

            <a className='social-link' href='https://github.com/Omerisra6'> 

                <i className="fa-brands fa-github"></i> 

            </a>

            <a className='social-link' href='https://www.linkedin.com/in/omer-israeli6/'>

                <i className="fa-brands fa-linkedin"></i> 

            </a>

        </StyledSocialLinksContainer>
    )
}
