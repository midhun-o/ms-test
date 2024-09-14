import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactUsButton from './ContactUsButton';

const Header = () => {


  return (
    <header className="text-white py-5 px-20">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <Image 
              src="/assets/icons/hero-icon.png" 
              alt="Home" 
              width={125} 
              height={125} 
              className="hover:opacity-80 cursor-pointer" 
            />
        </Link>

        <ul className="flex-1 flex justify-center space-x-4">
          <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
          <li><Link href="/how-we-help" className="hover:text-gray-400">How We Help</Link></li>
          <li><Link href="/pricing" className="hover:text-gray-400">Pricing</Link></li>
          <li><Link href="/portfolios" className="hover:text-gray-400">Portfolios</Link></li>
          <li><Link href="/testimonials" className="hover:text-gray-400">Testimonials</Link></li>
          <li><Link href="/insights" className="hover:text-gray-400">Insights</Link></li>
        </ul>

        <ContactUsButton >
        </ContactUsButton>
      </nav>
    </header>
  );
};

export default Header;
