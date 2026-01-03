import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div>
        <Text>DICE GAME</Text>
        <Button onClick={toggle} className="frame-4">Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
`;


const Text = styled.p`
  font-size: 96px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #000000;
`;
