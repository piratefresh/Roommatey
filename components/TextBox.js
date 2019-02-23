import styled from "styled-components";

const TextBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: [profileImage]1fr [task]3fr [metadata]1fr;
  align-items: center;
  background: #fff;
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
  padding: 5% 2%;
  width: 90vw;
  font-size: 1.4rem;
  margin-bottom: 5%;
  img {
    grid-column: profileImage;
    border-radius: 10%;
  }
  p {
    margin-right: 5px;
  }
  span {
    font-size: 1rem;
    color: ${props => props.theme.yellow};
  }
`;

export default TextBox;
