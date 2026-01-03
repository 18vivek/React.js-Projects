import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
/*const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 800px;
  margin:0 auto;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;*/
const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: clamp(16px, 4vw, 32px);
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  margin-top: clamp(24px, 6vw, 48px);
  border-radius: 12px;

  h2 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    text-align: center;
  }

  .text {
    margin-top: clamp(16px, 4vw, 24px);
  }

  .text p {
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

