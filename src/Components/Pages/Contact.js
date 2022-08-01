import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="text" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        <button type="submit">Submit</button>
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Contact;
