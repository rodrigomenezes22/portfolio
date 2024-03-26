import React from "react";
import Container from "react-bootstrap/Container";
import Button from "./Button";
import Form from "./Form";

function Contact({ contactSection }) {
  return (
    <div id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-8 phone" ref={contactSection}>
            <div className="contact-wrapper">
              <h2 className="bebas xl-font">Contact New York Web</h2>
              <p>You can call us at:</p>
              <p>USA +1 561 503 2419</p>
              <p>Brazil +55 15 99755 8203</p>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
