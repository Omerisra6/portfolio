import React from 'react'
import { SectionsProvider } from '../../contexts/SectionsContext'
import HomePageNavigation from './components/HomePageNavigation'
import HomeSectionsContainer from './components/HomeSectionsContainer'
import styled from 'styled-components'

const StyledHomePage = styled.div`
    position: relative;
    top: 17vh;
`
export default function HomePage() {
    return (
        <SectionsProvider>

            <StyledHomePage className='home-page'>
        
                <HomePageNavigation/>
                <HomeSectionsContainer/>

            </StyledHomePage>
        </SectionsProvider>
        
    )
}
