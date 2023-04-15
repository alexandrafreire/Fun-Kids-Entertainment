import React from "react";
import "@aws-amplify/ui-react/styles.css";
import ContactUsForm from "../../ui-components/ContactUsForm";
import { DataStore } from "aws-amplify";
import { ContactUs as ContactUsModel } from "../../models";

function ContactUs() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstname.value;
    const email = e.target.email.value;
    const feedbackType = e.target.feedbackType.value;
    const overallSiteRating = e.target.overallSiteRating.value;
    const message = e.target.message.value;

    await DataStore.save(
      new ContactUsModel({
        firstname: firstName,
        email: email,
        feedbackType: feedbackType,
        overallSiteRating: overallSiteRating,
        message: message,
      })
    );
  };

  return (
    <div className="contact-us">
      <div className="form-container">
        <ContactUsForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default ContactUs;
