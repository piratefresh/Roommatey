import styled from "styled-components";
import Link from "next/link";

import HomeIcon from "./HomeIcon";
import TaskIcon from "./TaskIcon";
import ShoppingIcon from "./ShoppingIcon";
import CalenderIcon from "./CalenderIcon";
import "./styles/navStyles.css";

const NavContainer = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background: #fff;
  border-top: 2px solid ${props => props.theme.backgroundgrey};
  /*  box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.5); */
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    li {
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
  }
  a {
    color: #818181;
  }
`;

const Nav = () => (
  <NavContainer>
    <ul>
      <Link href="/">
        <LinkContainer>
          <HomeIcon className="iconNav" fill="#F0B429" />
          <a>Home</a>
        </LinkContainer>
      </Link>
      <Link href="/tasks">
        <LinkContainer>
          <TaskIcon className="iconNav" />
          <a>Tasks</a>
        </LinkContainer>
      </Link>
      <Link href="/tasks">
        <LinkContainer>
          <ShoppingIcon className="iconNav" />
          <a>Shopping</a>
        </LinkContainer>
      </Link>
      <Link href="/tasks">
        <LinkContainer>
          <CalenderIcon className="iconNav" />
          <a>Calender</a>
        </LinkContainer>
      </Link>
    </ul>
  </NavContainer>
);

export default Nav;
