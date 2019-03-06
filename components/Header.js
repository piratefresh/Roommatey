import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  h1 {
    color: #4e424a;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

const Header = props => (
  <HeaderContainer>
    <h1>{props.headertitle}</h1>
    <p>{props.headeraddress}</p>
  </HeaderContainer>
);

export default Header;
