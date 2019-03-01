import styled from "styled-components";

const DateText = styled.p`
  position: absolute;
  right: 5%;
  bottom: 0;
  display: flex;
  color: ${props => props.theme.yellow} !important;
  font-size: 1rem;
`;

export default DateText;
