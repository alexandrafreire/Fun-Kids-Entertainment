import React, { useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import ContactUsForm from "../../ui-components/ContactUsForm";
import { DataStore } from "aws-amplify";
import { ContactUs as ContactUsModel } from "../../models";
import { Alert } from "@aws-amplify/ui-react";

function ContactUs() {
  const [showForm, setShowForm] = useState(true);
  const [alert, setAlert] = useState(null);

  const handleFormSubmit = async (fields) => {
    const trimmedFields = {
      firstname: fields.firstname.trim(),
      email: fields.email.trim(),
      feedbackType: fields.feedbackType,
      overallSiteRating: fields.overallSiteRating,
      message: fields.message.trim(),
    };

    try {
      await DataStore.save(new ContactUsModel(trimmedFields));
      setAlert({ type: "success", message: "Thanks for your feedback!" });
      setShowForm(false);
    } catch (error) {
      console.error("Error saving the form data:", error);
      setAlert({
        type: "error",
        message: "There was an error saving your feedback.",
      });
    }
  };

  return (
    <div className="contact-us">
      {alert && <Alert variation={alert.type}>{alert.message}</Alert>}

      <div className="form-container">
        <div className="inner-form-container">
          <h1>Contact Us</h1>
          {showForm && <ContactUsForm onSubmit={handleFormSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
