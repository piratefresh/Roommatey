import React, { Component } from "react";
import { Formik } from "formik";

import Header from "./Header";
import { Form, Label, Input, Button } from "./styles/FormStyles";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email } = this.state;
    const values = { firstName, lastName, email };
    return (
      <>
        <Header headertitle="Registration" />
        <div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              let errors = {};
              if (values.email.length > 0) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <Label className="form-field" htmlFor="email">
                  <span>E-mail:</span>
                  <Input
                    type="email"
                    name="email"
                    placeholder="User@email.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </Label>
                {errors.email && touched.email && errors.email}
                <Label className="form-field" htmlFor="email">
                  <span>Password:</span>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </Label>
                {errors.password && touched.password && errors.password}
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
}

export default UserForm;
