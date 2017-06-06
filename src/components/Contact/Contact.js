import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
        <h2 className="page-title">Contact Information</h2>
        <div className="text-left">
          We have expert Kat enthusiasts on staff waiting to help with any additional questions about Kats. Contact us electronically or email.
          <div className='email-block'>
            Contact us electronically at <a href='mailto:rcaddell@healthgrades.com'>Contact Us</a>
            </div>
            <div className='address-block'>
              Contact us by snail mail:
              <div className='address'>
              <div>Katz</div>
              <div>999 18th Avenue Suite 500</div>
              <div>Denver, CO 80202</div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;