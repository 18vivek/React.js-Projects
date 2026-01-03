import styled from "styled-components"

const RollDice = ({currentDice,roleDice}) => {

  

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RollDice

/*const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice{
    cursor: pointer;
  }
  
`;*/

const DiceContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dice {
    cursor: pointer;
    width: 120px; 
  }

  .dice img {
    width: 100%;
    height: auto;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: center;
  }

  // Mobile 
  @media (max-width: 480px) {
    .dice {
      width: 80px;
    }

    p {
      font-size: 1rem;
    }
  }

  // Tablet 
  @media (min-width: 481px) and (max-width: 768px) {
    .dice {
      width: 100px;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;

