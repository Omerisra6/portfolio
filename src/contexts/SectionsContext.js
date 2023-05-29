import React, { useContext, useState } from "react";
import HelloSection from "../pages/HomePage/components/HelloSection";
import AboutMeSection from "../pages/HomePage/components/AboutMeSection";

export const SectionsContext = React.createContext(null);

export const useSections = () => {
    return useContext(SectionsContext);
};

export const SectionsProvider = ({ children }) => {

    const sections = { 
        'hello': <HelloSection section-id='hello'/>,
        'aboout-me': <AboutMeSection section-id='about-me'/>
    }

    const firstSectionId = Object.keys( sections )[ 0 ]
    const [ currentSection, setCurrentSection ] = useState( firstSectionId )
    
    const value = {
        currentSection,
        setCurrentSection,
        sections
    }

    return <SectionsContext.Provider value={ value } children={ children } />;
};