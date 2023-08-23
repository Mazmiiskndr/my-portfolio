import { useAboutData } from "@context/AboutDataContext";
import React, { useState } from "react";
import { postData } from "@config/api";

export default function ContactSection({ aboutLoading }) {
  const aboutData = useAboutData();

  if (aboutLoading) return <div>Loading...</div>;

  const { address, email, phone } = aboutData[0] || {};

  // State untuk mengelola pesan sukses atau error
  const [messageStatus, setMessageStatus] = useState(null);

  // Fungsi untuk menangani pengiriman form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("cform");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Post data ke endpoint "contact"
    postData("contact", data)
      .then((response) => {
        console.log(response);
        // Handle response sesuai kebutuhan
        // Menampilkan pesan sukses jika pengiriman berhasil
        setMessageStatus("Thanks, your message is sent successfully.");
      })
      .catch(() => {
        // Menampilkan pesan error jika terjadi kesalahan
        setMessageStatus("An error occurred. Please try again.");
      });
  };
  // TODO: POST CONTACT FORM DATA TO API
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
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <div className="numbers-items">
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-map" />
                  </div>
                  <div className="title">
                    <span> Address </span>
                  </div>
                  <div className="lui-text">
                    <span> {address} </span>
                  </div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-user" />
                  </div>
                  <div className="title">
                    <span> Freelance </span>
                  </div>
                  <div className="lui-text">
                    <span> Available Right Now </span>
                  </div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-envelope" />
                  </div>
                  <div className="title">
                    <span> Email </span>
                  </div>
                  <div className="lui-text">
                    <span> {email} </span>
                  </div>
                </div>
                <div
                  className="numbers-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-address-book" />
                  </div>
                  <div className="title">
                    <span> Phone </span>
                  </div>
                  <div className="lui-text">
                    <span> {phone} </span>
                  </div>
                </div>
              </div>
            </div>
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
                            <input type="text" name="name" />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="group">
                          <label>
                            Your Email Address <b>*</b>
                            <input type="email" name="email" />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="group">
                          <label>
                            Your Subject <b>*</b>
                            <input type="text" name="subject" />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="group">
                          <label>
                            Your Message <b>*</b>
                            <textarea name="message" defaultValue={""} />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                        {/* <div className="terms-label">
                          * Accept the terms and conditions.
                        </div> */}
                        <div
                          className="terms-label"
                          style={{ display: messageStatus ? "block" : "none" }}
                        >
                          {messageStatus}
                        </div>
                        <button className="btn" type="submit">
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
