import styled from 'styled-components'

const NumberSelector = ({ error,setError,selectedNumber, setSelectedNumber }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler= (value)=>{
    setSelectedNumber(value)
    setError("");
  }
  return (
    <Container>
      <p className="error">{error}</p>
      <div className="box">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelector
const Container = styled.div`
  width: 552px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 30px;
  border-radius: 0px;
  .box {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    color: #000000;
  }
  .error{
    color:red;
  }
`;

/*const Container = styled.div`
  width: 100%;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 3vw, 24px);

  margin: 0 auto;

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(10px, 3vw, 24px);
  }

  p {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: 700;
    color: #000;
    text-align: center;
  }

  .error {
    color: red;
    font-size: clamp(0.85rem, 2.5vw, 1rem);
  }
`;


const Box = styled.div`
  width: 72px;
  height: 72px;
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 0px;
  border: 1px solid #000000;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=>props.isSelected?"black":"white"};
  color: ${(props)=>props.isSelected?"white":"black"};
`;*/

const Box = styled.div`
  width: clamp(44px, 12vw, 72px);
  height: clamp(44px, 12vw, 72px);

  display: grid;
  place-items: center;

  border: 1px solid #000;
  font-size: clamp(1rem, 4vw, 1.5rem);
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  transition: all 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`;
