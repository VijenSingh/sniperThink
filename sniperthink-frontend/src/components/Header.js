import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SniperThink</h1>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-blue-400">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#insights" className="hover:text-blue-400">Insights</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;