import React from 'react';

const QuickLinks = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row gap-6 lg:gap-20 items-start lg:items-center p-8 lg:p-12 lg:px-20">
      <h1 className="text-xl">Quick Links</h1>
      <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0">
        <li><a href="/" className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
        <li><a href="/about-us" className="hover:text-blue-500 transition-colors duration-300">About Us</a></li>
        <li><a href="/pricing" className="hover:text-blue-500 transition-colors duration-300">Pricing</a></li>
        <li><a href="/portfolios" className="hover:text-blue-500 transition-colors duration-300">Portfolios</a></li>
        <li><a href="/insights" className="hover:text-blue-500 transition-colors duration-300">Insights</a></li>
      </ul>
    </div>
  );
}

export default QuickLinks;
