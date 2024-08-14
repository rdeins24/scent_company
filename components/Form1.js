import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "./Button";

const getInitialValues = () => ({
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  message: "",
});

export const SuggestFeature = () => {
  const submitHandler = async (values, actions) => {
    actions.resetForm(getInitialValues());

    // Zoho Form Submission Endpoint
    try {
      const response = await fetch(
        "https://forms.zohopublic.com/rd17/form/websiteform/formperma/nuccSj6Lpm3_WIHHNZz-Z3eGBFaDYn3WnafI-73uC4U", // replace with your actual Zoho form endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(values).toString(), // Converts form data into x-www-form-urlencoded format
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="md:max-w-xl mx-auto pb-[80px] max-w-xs">
      <h1 className="text-2xl font-bold mb-4">Scrie-ne!</h1>
      <Formik onSubmit={submitHandler} initialValues={getInitialValues()}>
        <Form className="space-y-4">
          <Field
            placeholder="First name*"
            name="firstName"
            type="text"
            className="border p-2 rounded w-full text-black"
          />
          <Field
            placeholder="Last name*"
            name="lastName"
            type="text"
            className="border p-2 rounded w-full text-black"
          />
          <Field
            placeholder="Work email"
            name="email"
            type="email"
            className="border p-2 rounded w-full text-black"
          />
          <Field
            placeholder="Company"
            name="companyName"
            type="text"
            className="border p-2 rounded w-full text-black"
          />
          <Field
            placeholder="Message"
            name="message"
            as="textarea"
            rows="6"
            cols="10"
            className="border p-2 rounded w-full text-black"
          />
          <div className="flex justify-center pt-[100px]">
            <Button content="Trimite" type="submit"/>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SuggestFeature;
