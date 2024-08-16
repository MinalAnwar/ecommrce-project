import React, { useState, useEffect } from 'react';
import { UserIcon, ShoppingCartIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 py-2 mb-8 flex flex-col ${
        isScrolled ? 'bg-white' : 'bg-transparent text-white'
      } transition-colors duration-300 ${!isScrolled && props.isNotLanding ? 'bg-white text-black' : ''}`}
    >
      <div className="flex items-center justify-between md:px-8 px-1">
        <Link to="/" className="text-5xl font-extrabold font-monoton">
          Luxeon
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block w-64 px-4 py-2 rounded-2xl bg-white border-none focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button>
            <UserIcon className="h-6 w-6" />
          </button>
          <button>
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          <button
            className="md:hidden block focus:outline-none"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:flex md:items-center md:w-auto w-full ${
          isMenuOpen ? 'block' : 'hidden'
        } rounded-lg font-bold md:static top-full left-0 ${
          isMenuOpen ? 'bg-gradient-to-br from-purple-400 to-pink-300' : ''
        } border-t md:border-t-0 border-white md:border-none`}
        id="menu"
      >
        <nav className={`flex flex-col md:flex-row md:ml-4 items-center justify-center text-base w-full ${
          isScrolled ? 'hidden' : ''
        }`}>
          <ul className="flex flex-col md:flex-row mt-4 w-full">
            {['Women Basic', 'Jewelry', 'Watches', 'Bags', 'Fragrances', 'Formals', 'MakeUp', 'Shoes', 'Bridal Wear'].map(item => (
              <li key={item}>
                <a className="md:py-4 md:px-4 py-3 px-10 block uppercase hover:bg-purple-100 transition-colors" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
