import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import TextBox from "../components/TextBox";
import DateText from "../components/DateText";
// Profile pics
import img1 from "../components/people1.jpg";
import img2 from "../components/people2.jpg";
import img3 from "../components/people3.jpg";
import img4 from "../components/people4.jpg";
//Icons
import ProgressIcon from "../components/icons/ProgressIcon";
import CompletedIcon from "../components/icons/CompletedIcon";
import "../components/styles/listStyles.css";

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
    height: 40px;
    width: 40px;
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
  {
    profileimg: img1,
    user: "Josh",
    description: ' Completed "Doing Dishes" Task',
    type: "Task",
    completed: true,
    posted: "14:55"
  },
  {
    profileimg: img2,
    user: "Eve",
    description: ' Added "Take out Trash" to task',
    type: "Task",
    completed: false,
    posted: "14:55"
  },
  {
    profileimg: img3,
    user: "Peter",
    description: ' Added "Party at 8pm" to calender',
    type: "Calender",
    completed: false,
    posted: "14:55"
  },
  {
    profileimg: img4,
    user: "Tom",
    description: ' Added "Studie Session" to calender',
    type: "Calender",
    completed: false,
    posted: "14:55"
  },
  {
    profileimg: img3,
    user: "Peter",
    description: ' Completed "Meal preping" to calender',
    type: "Calender",
    completed: true,
    posted: "14:55"
  },
  {
    profileimg: img4,
    user: "Tom",
    description: ' Completed "Laundry" Task',
    type: "Task",
    completed: true,
    posted: "14:55"
  }
];

const Home = () => {
  const incomplete = "#FCC117";
  const complete = "#53F029";
  return (
    <>
      <Header
        headertitle={"The Arrogants"}
        headeraddress={"1515 West Oxford St"}
      />
      <Container>
        <Content>
          {TasksArr.map((task, index) => {
            return (
              <TextBox key={index}>
                <img src={task.profileimg} alt={task.description} />
                <div className="task">
                  <p>
                    <span
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "700",
                        color: "#0c0d2c"
                      }}
                    >
                      {task.user}
                    </span>
                  </p>
                  <p style={{ marginRight: "5px" }}>{task.description}</p>
                </div>
                {task.completed === true ? (
                  <CompletedIcon fill={complete} className="listIcon" />
                ) : (
                  <ProgressIcon fill={incomplete} className="listIcon" />
                )}
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
