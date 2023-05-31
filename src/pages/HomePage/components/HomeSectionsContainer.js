import React, { useEffect } from 'react'
import { useSections } from '../../../contexts/SectionsContext'
import styled from 'styled-components'

const StyledSectionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > *{
        padding: 5% 8%;
    }


    .section-container:nth-child(2n){
        background-color: var( --theme-secondary-color );
    } 
    
    @media ( max-width: 600px ){
        & > *{
            padding: 5em 2em;
        }      
    }
`
export default function HomeSectionsContainer() {

    const { currentSection, sections } = useSections()
  
    useEffect( () => {
        const section = document.querySelector( `[data-id=${ currentSection }]`)
        section.scrollIntoView( { behavior: 'smooth' } )
        
    }, [ currentSection ])
    

    return (
        <StyledSectionsContainer>
            { Object.entries( sections ).map( ( [ id, section ]  ) => {
                return  <div className='section-container' aria-hidden={ currentSection !== id } key={ id } data-id={ id  }> { section } </div>
            })}
        </StyledSectionsContainer>
    )
}
