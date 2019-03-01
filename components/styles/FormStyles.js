import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: source-sans-pro, sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: ${props => props.theme.yellow};
  color: #fff;
  border-radius: 3px;
  border-color: ${props => props.theme.yellow};
`;
