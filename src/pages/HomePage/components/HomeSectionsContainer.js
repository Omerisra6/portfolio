import React, { useEffect } from 'react'
import { useSections } from '../../../contexts/SectionsContext'
import styled from 'styled-components'

const StyledSectionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > *{
        height: 80vh;
        padding: 5% 4%;
    }

    & > *:first-child{
        height: 45vh;
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
                return  <div aria-hidden={ currentSection !== id } data-id={ id }> { section } </div>
            })}
        </StyledSectionsContainer>
    )
}
