import React from "react";
import styled from "styled-components";

const StyledNavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & > * {
    position: relative;
    display: flex;
  }
`;

export default function NavLinksContainer() {
  return (
    <StyledNavLinksContainer>
      <a className="link" href="/">
        <div>Home</div>
      </a>

      <a className="link" href="/projects">
        <div>My Projects</div>
      </a>

      <a className="link" href="https://drive.google.com/file/d/1KTHzE_aEjRa1y1EC5zLQg_w2Idz3Qjj4/view?usp=sharing" target="_blank" rel="noreferrer">
        <div>My Resume</div>
      </a>
    </StyledNavLinksContainer>
  );
}
