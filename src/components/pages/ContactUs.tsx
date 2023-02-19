import React from "react";
import "@aws-amplify/ui-react/styles.css";
import ContactUsForm from "../../ui-components/ContactUsForm";
import {API} from 'aws-amplify';
import {createContactUs} from "./../../graphql/mutations"

import  Alert from "react";


function ContactUs() {


	const handleFormSubmit = async (e) => {
		e.preventDefault();
		console.log(e.target.firstName.value)
    console.log(e.target.lastName.value)
		console.log(e.target.email.value)
    console.log(e.target.feedbackType.value)
    console.log(e.target.overallSiteRating.value)
		console.log(e.target.message.value)
	
  await API.graphql({
    query: createContactUs,
    variables: {
      input:{
        firstName,
        lastName,
        email,
        feedbackType,
        overallSiteRating,
        message
      },
    },

  })

}
  

 
  return (
    <div className="contact-us">
      
      <div className="form-container">
  
          <ContactUsForm  onSubmit={handleFormSubmit}/>
       
      </div>
    </div>
  );
}

export default ContactUs;


