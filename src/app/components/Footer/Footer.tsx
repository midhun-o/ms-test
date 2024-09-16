import React from 'react';
import QuickLinks from './FooterComponents/QuickLinks';
import InfoOne from './FooterComponents/InfoOne';
import InfoTwo from './FooterComponents/InfoTwo';
import ContactUs from './FooterComponents/ContactUs';
import CopyRight from './FooterComponents/CopyRight';

const Footer = () => {
  return (
    <footer className='bg-custom-dark-blue'>
      <QuickLinks />
      <div className='flex flex-col lg:flex-col'>
        <div className='flex flex-col lg:flex-row border-t border-b border-gray-300/20'>
          <div className='flex-1 border-b lg:border-r lg:border-b-0 border-gray-300/20 py-8 lg:py-14'>
            <InfoOne />
          </div>
          <div className='flex-1 border-b lg:border-r lg:border-b-0 border-gray-300/20 py-8 lg:py-14'>
            <InfoTwo />
          </div>
          <div className='flex-1 py-8 lg:py-14'>
            <ContactUs />
          </div>
        </div>
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;
