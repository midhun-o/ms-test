"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactUsButton from './ContactUsButton';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white py-6">
      <nav className="container mx-auto flex gap-6 justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/icons/hero-icon.png"
            alt="Home"
            width={100}
            height={100}
            className={`${isOpen ? 'hidden' : 'md:block'} hover:opacity-80 cursor-pointer`}
            style={{ minWidth: '100px' }}
            sizes="(max-width: 640px) 80px, (max-width: 768px) 90px, 100px"
          />
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? "" : (
              <FiMenu className="text-2xl md:text-3xl cursor-pointer" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex flex-1 justify-center space-x-6 text-sm md:text-xs text-center lg:text-base">
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/how-we-help" className="hover:text-gray-400">
              How We Help
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-400">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/portfolios" className="hover:text-gray-400">
              Portfolios
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-gray-400">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/insights" className="hover:text-gray-400">
              Insights
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <ContactUsButton />
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black opacity-95  text-white p-7 flex flex-col h-fit">
          <div className="flex justify-between items-center mb-4">
            <Link href="/">
              <Image
                src="/assets/icons/hero-icon.png"
                alt="Home"
                width={75}
                height={75}
                className="hover:opacity-80 cursor-pointer"
                sizes="(max-width: 640px) 60px, (max-width: 768px) 70px, 75px"
              />
            </Link>
            <button onClick={toggleMenu}>
              <FiX className="text-2xl md:text-3xl cursor-pointer" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 mb-4 text-center">
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/how-we-help" className="hover:text-gray-400">
                How We Help
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/portfolios" className="hover:text-gray-400">
                Portfolios
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-gray-400">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-gray-400">
                Insights
              </Link>
            </li>
          </ul>
          <div className=" flex justify-center">
            <ContactUsButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
