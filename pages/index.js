import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import TextBox from "../components/TextBox";
import DateText from "../components/DateText";
import img1 from "../components/people1.jpg";
import img2 from "../components/people2.jpg";
import img3 from "../components/people3.jpg";
import img4 from "../components/people4.jpg";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  h1 {
    display: flex;
    justify-content: center;
    color: #fff;
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  img {
    height: 35px;
    width: 35px;
    object-fit: cover;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5%;
`;

const TasksArr = [
  {profileimg: img1, description: "Doing Dishes", posted: "14:55"},
  {profileimg: img2, description: "Take out Trash", posted: "14:55"},
  {profileimg: img3, description: "Party at 8pm", posted: "14:55"},
  {profileimg: img4, description: "Studie Session", posted: "14:55"}
];

const Home = () => {
  return (
    <>
      <Header headertitle={"The Arrogants"} />
      <Container>
        <Content>
          {TasksArr.map((task, index) => {
            return (
              <TextBox key={index}>
                <img src={task.profileimg} alt={task.description} />
                <p>{task.description}</p>
                <DateText>{task.posted}</DateText>
              </TextBox>
            );
          })}
        </Content>
      </Container>
    </>
  );
};

export default Home;
