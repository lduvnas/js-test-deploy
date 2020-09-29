import React from "react";
/* import avatar from "../public/images/cv-avatar.png"; */
import "./App.css";
import styled from "styled-components";

const AvatarImage = styled.img`
  max-width: 200px;
  height: auto;
  top: -200px;
  top: 8rem;
  position: absolute;
`;

const LogoImage = styled.img`
  max-width: auto;
  max-height: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TeamCard = styled.section`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  max-height: 270px;
  padding: 4em;
  background-color: #ffffff;
  box-shadow: 0 1px 38px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #112233;
  font-family: "Montserrat", sans-serif;
  margin-top: 3rem;
`;

const TextContent = styled.p`
  color: #112233;
  font-family: "Montserrat", sans-serif;
  font-size: 0.7em;
`;

const Button = styled.button`
  background-color: #f0b37c;
  border: none;
  font-color: white;
  padding: 13px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;

const Link = styled.a`
  font-family: "Montserrat", sans-serif;
  margin: 0 5px;
  font-size: 0.7em;
  color: #112233;
`;

function App() {
  return (
    <div className="App">
      <TeamCard>
        <AvatarImage src="/images/cv-avatar.png" alt="avatar" />
        <Title>Lova Duvnäs</Title>
        <TextContent>Front-End Developer Intern at Redmind</TextContent>
        <TextContent>Working with Way To Go</TextContent>

        <FlexContainer>
          <LogoImage src="/images/react-icon.png" alt="avatar" />
          <LogoImage src="/images/html-logo.png" alt="avatar" />
          <LogoImage src="/images/php_logo.png" alt="avatar" />
          <LogoImage src="/images/sass-logo.png" alt="avatar" />
        </FlexContainer>
        <TextContent>Find me at</TextContent>

        <FlexContainer>
          <Link href="http://lovaduvnas.se">Portfolio</Link>
          <Link href="https://github.com/lduvnas">GitHub</Link>
          <Link href="https://github.com/lduvnas">Linkedin</Link>
        </FlexContainer>
      </TeamCard>
    </div>
  );
}

export default App;
