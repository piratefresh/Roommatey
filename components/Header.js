import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #fff;
  width: 100%;
  overflow: hidden;
  height: 10vh;
  border-bottom: 2px solid ${props => props.theme.backgroundgrey};
  display: flex;
  justify-content: center;
  h1 {
    color: ${props => props.theme.yellow};
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
