import { Field, Form, Formik, useFormik } from "formik";
import React from "react";

const initialValues = {
  name: "",
  email: "",
};
const onSubmit = (values) => {
  
};

const Dummy = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field className="border-black" name="name" />
        <button type="submit"> submit</button>
      </Form>
    </Formik>
  );
};

export default Dummy;
