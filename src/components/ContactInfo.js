import React from 'react'

export default function ContactInfo({ address, email, phone }) {
  return (
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
  );
}
