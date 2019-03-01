import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 6vh;
  display: flex;
  justify-content: center;
  h1 {
    color: #4e424a;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }
`;

const Header = props => (
  <HeaderContainer>
    <h1>{props.headertitle}</h1>
  </HeaderContainer>
);

export default Header;
