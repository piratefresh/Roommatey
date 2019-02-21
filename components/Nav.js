import styled from "styled-components";
import Link from "next/link";

import homeIcon from "./images/homeicon.svg";
import tasksIcon from "./images/tasksicon.svg";
import calenderIcon from "./images/calendericon.svg";
import shoppingIcon from "./images/shoppingicon.svg";

const NavContainer = styled.div`
  margin: 0 auto;
  height: 10vh;
  width: 100vw;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
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
          <img src={homeIcon} />
          <a>Home</a>
        </LinkContainer>
      </Link>
      <Link href="/tasks">
        <LinkContainer>
          <img src={tasksIcon} style={{fill: "#818181"}} />
          <a>Tasks</a>
        </LinkContainer>
      </Link>
      <Link href="/">
        <LinkContainer>
          <img src={calenderIcon} />
          <a>Calender</a>
        </LinkContainer>
      </Link>
      <Link href="/">
        <LinkContainer>
          <img src={shoppingIcon} />
          <a>Shopping</a>
        </LinkContainer>
      </Link>
    </ul>
  </NavContainer>
);

export default Nav;
