import React from 'react'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import styled from 'styled-components';
import { useGradient } from './hooks/useGradient';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  background-color: var( --theme-background );
  display: flex;
  flex-direction: column;
`
export default function App() {

  useGradient()

  return (
    <StyledApp>

      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
          
        <Route exact path='/projects' element={<ProjectsPage/>}/>
      </Routes>

    </StyledApp>
  )
}