import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

const TaskContainer = styled.div`
  background: red;
`;

const TasksPage = () => (
  <>
    <Header headertitle="Tasks" />
    <TaskContainer>lorem100</TaskContainer>
  </>
);

export default TasksPage;
