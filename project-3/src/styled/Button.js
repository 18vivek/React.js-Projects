import styled from "styled-components";
export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: #3f3f3f;
    transition: 0.3s background ease-in;
  }
`;
export const OutlinedButton = styled(Button)`
  background-color: white;
  border:1px solid black;
  color:black;
  &:hover {
    color: white;
    border:1px solid transparent;
    background-color:black;
  }
`;