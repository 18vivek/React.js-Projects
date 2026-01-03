import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button } from "../styled/Button";
import{OutlinedButton} from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const[showRules,setShowRules] = useState(false);

  const randomDiceNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
   
    setError("");
    const randomNumber = randomDiceNumber(1, 6);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
   const resetScore = () => {
     setScore(0);
   };
  return (
    <MainContainer>
      <Container>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </Container>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlinedButton onClick={resetScore}>Reset Score</OutlinedButton>
        <Button
        onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"}Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;
/*const Container = styled.div`
  padding-top: 30px;
  width: 1280px;
  height: 151px;
  display: flex;
  margin-left: 97px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 593px;
  border-radius: 0px;
`;*/
const Container = styled.div`
  padding-top: 0rem;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;


/*const MainContainer = styled.main`
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
  }
`;*/
const MainContainer = styled.main`
  padding: 1rem;
  .btns {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`;

