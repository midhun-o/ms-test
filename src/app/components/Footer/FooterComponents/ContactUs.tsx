import React from 'react';
import { SocialIcon } from './SocialIcon';

const ContactUs = () => {
  return (
    <div className="text-white p-8 lg:p-16">
      <h2 className="text-lg lg:text-xl font-bold mb-4">Contact Us</h2>

      <p className="mb-4">
        Lorem Ipsum, Iso lorem,<br />
        Iso Lorem Posum
      </p>

      <p className="font-semibold mb-2">+91 00000 00000</p>
      <p className="mb-4">info@demo.com</p>

      <p className="font-semibold mb-2">Follow us on</p>
      <div className="flex mt-4 space-x-4">
        <SocialIcon imgSrc="/assets/icons/facebook.png" href="https://facebook.com" />
        <SocialIcon imgSrc="/assets/icons/twitter.png" href="https://twitter.com" />
        <SocialIcon imgSrc="/assets/icons/linkedin.png" href="https://linkedin.com" />
        <SocialIcon imgSrc="/assets/icons/youtube.png" href="https://youtube.com" />
        <SocialIcon imgSrc="/assets/icons/instagram.png" href="https://instagram.com" />
      </div>
    </div>
  );
};

export default ContactUs;
