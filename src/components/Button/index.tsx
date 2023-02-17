import styled from "styled-components";

interface ButtonProps {
  variant?: string
}

export const Button = styled.button<ButtonProps>`
  border: none;
  padding: 5px 15px;
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 24px;
  color: white;
  background-color: ${({variant}) => variant ? variant : 'black'};
`;