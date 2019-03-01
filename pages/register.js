import React, { Component } from "react";
import { Formik } from "formik";
import styled from "styled-components";

import Header from "../components/Header";
import UserForm from "../components/UserForm";

const Registration = () => (
  <>
    <Header headertitle="Registration" />
    <div>
      <UserForm />
    </div>
  </>
);

export default Registration;
