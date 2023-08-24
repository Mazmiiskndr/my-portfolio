import { useAboutData } from "@context/AboutDataContext";
import React, { useState } from "react";
import { postData } from "@config/api";
import { ValidateInputs } from "./Validation";
import ContactInfo from "./ContactInfo";

export default function ContactSection({ aboutLoading }) {
  // Using a custom hook to fetch about data
  const aboutData = useAboutData();

  // Display a loading message if the data is still being fetched
  if (aboutLoading) return <div>Loading...</div>;

  // Destructure the address, email, and phone from the first object in the aboutData array
  const { address, email, phone } = aboutData[0] || {};

  // State to manage success or error messages
  const [messageStatus, setMessageStatus] = useState(null);

  // State to hold error messages for validation
  const [validationErrors, setValidationErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Use the imported validation function
    const updatedValidationErrors = ValidateInputs(
      name,
      value,
      validationErrors
    );

    // Update the state with new validation errors
    setValidationErrors(updatedValidationErrors);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const form = document.getElementById("cform"); // Get the form element by ID
    const formData = new FormData(form); // Create a FormData object from the form
    const data = Object.fromEntries(formData.entries()); // Convert the form data to an object
    setIsSubmitting(true); // Start the submission process
    // Post the data to the "contact" endpoint
    postData("contact", data)
      .then((response) => {
        // Handle the response as needed
        // Display a success message if the submission is successful
        setMessageStatus("Thanks, your message is sent successfully.");
        setTimeout(() => {
          setMessageStatus(null);
        }, 5000);
        setValidationErrors({});
        form.reset(); // Reset the form after successful submission
        setIsSubmitting(false); // End the submission process
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data.code === 422 &&
          error.response.data.messages
        ) {
          // Jika error validasi, atur pesan error untuk setiap bidang
          setValidationErrors(error.response.data.messages);
          setIsSubmitting(false);
        } else {
          // Menampilkan pesan error jika terjadi kesalahan lain
          setMessageStatus("An error occurred. Please try again.");
        }
      });
  };

  return (
    <section className="lui-section lui-gradient-top" id="contact-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Contact Me </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                Let’s <b>Talk About Ideas</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="lui-contacts v-line v-line-left">
        <div className="container">
          <div className="row">
            {/* Contact Information */}

            <ContactInfo address={address} email={email} phone={phone} />

            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <div
                className="contacts-form scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  className="bg-img"
                  src="assets/images/pat-1.png"
                  alt="Bg Image Pat 2"
                  loading="lazy"
                />
                <div className="contacts-form">
                  <form onSubmit={handleFormSubmit} id="cform">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="group">
                          <label>
                            Your Full Name <b>*</b>
                            <input
                              type="text"
                              name="name"
                              onChange={handleInputChange}
                            />
                            {validationErrors.name && (
                              <div
                                className="text-danger mt-1"
                                style={{ fontSize: "10px" }}
                              >
                                {validationErrors.name[0]}
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="group">
                          <label>
                            Your Email Address <b>*</b>
                            <input
                              type="email"
                              name="email"
                              onChange={handleInputChange}
                            />
                            {validationErrors.email && (
                              <div
                                className="text-danger mt-1"
                                style={{ fontSize: "10px" }}
                              >
                                {validationErrors.email[0]}
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="group">
                          <label>
                            Your Subject <b>*</b>
                            <input
                              type="text"
                              name="subject"
                              onChange={handleInputChange}
                            />
                            {validationErrors.subject && (
                              <div
                                className="text-danger mt-1"
                                style={{ fontSize: "10px" }}
                              >
                                {validationErrors.subject[0]}
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                        style={{ marginBottom: "-20px" }}
                      >
                        <div className="group">
                          <label>
                            Your Message <b>*</b>
                            <textarea
                              name="message"
                              defaultValue={""}
                              onChange={handleInputChange}
                            />
                            {validationErrors.message && (
                              <div
                                className="text-danger mt-1"
                                style={{ fontSize: "10px" }}
                              >
                                {validationErrors.message[0]}
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
                        <h6
                          className="terms-label"
                          style={{ display: messageStatus ? "block" : "none" }}
                        >
                          {messageStatus}
                        </h6>
                      </div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right"
                        style={{ marginTop: "20px" }}
                      >
                        <button
                          className="btn"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Contact Me </span>
          </div>
        </div>
      </div>
    </section>
  );
}
