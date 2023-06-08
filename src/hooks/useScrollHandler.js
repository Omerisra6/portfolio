import { useCallback, useEffect } from "react";

export const useScrollHandler = (
  currentSection,
  setCurrentSection,
  sections
) => {
  const handleScroll = useCallback(
    (event) => {
      const delta = event.deltaY;
      const sectionIds = Object.keys(sections);
      const currentIndex = sectionIds.indexOf(currentSection);
      const isScrollingDown = delta > 0 && currentIndex < sectionIds.length - 1;

      const nextSection = isScrollingDown
        ? sectionIds[currentIndex + 1]
        : sectionIds[currentIndex - 1];
      setCurrentSection(nextSection || currentSection);
    },
    [currentSection, sections, setCurrentSection]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, handleScroll]);
};
