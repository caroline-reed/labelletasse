import React, { useState } from "react";
import { Form, Field, Label, Input, MessageInput, Button } from "./ContactElements.js";

const ContactForm = () => {
  const [status, setStatus] = useState("Send");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    var content = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(content);

    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json",
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(content),
    });
    setStatus("Send");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <Form id="messageBox" onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">Name:</Label><br />
          <Input type="text" id="name" name="name" /><br />
        </Field>

        <Field>
          <Label htmlFor="email">Email:</Label><br />
          <Input type="text" id="email" name="email" /><br />
        </Field>

        <Field>
          <Label htmlFor="message">Message:</Label><br />
          <MessageInput id="message" name="message" /><br />
        </Field>

        <Button type="submit">{status}</Button>
      </Form>
    </>
  );
};

export default ContactForm;
