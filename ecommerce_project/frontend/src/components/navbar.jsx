import React, { useState, useEffect } from 'react';
import { UserIcon, ShoppingCartIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearToken } from '../redux/jwtSlice';

function Navbar(props) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 120);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    if (searchQuery.trim()) {
      navigate(`/productListing/${searchQuery}`);
    }
  };

  const generateUrl = (item) => {
    return `/productListing/${item.replace(/\s+/g, '').toLowerCase()}`;
  };

  const handleNavClick = (section, item) => {
    if(props.isNotLanding === "True"){
      const url = generateUrl(item);
      navigate(url);
    }
    else{
      navigate('/', { state: { section } });
    }
  };

  const handleLogout = async () => {
      dispatch(clearToken());
      navigate('/');
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 py-2 mb-8 flex flex-col ${
        props.isNotLanding ? 'bg-white text-black' : isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      } transition-colors duration-300`} 
    >
      <div className="flex items-center justify-between md:px-8 px-1">
        <Link to="/" className="text-5xl font-extrabold font-monoton">
          Luxeon
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <form onSubmit={handleSearchSubmit} className="d-flex mx-auto" id="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="hidden md:block w-64 px-4 py-2 rounded-2xl text-black bg-white border-none focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button type="submit" className="hidden">Search</button>
          </form>
          <button onClick={() => navigate("/login")}>
            <UserIcon className="h-6 w-6" />
          </button>
          <button onClick={() => navigate("/cart")}>
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
        <nav className={`flex flex-col md:flex-row md:ml-4 items-center justify-center text-base w-full`}>
          <ul className={`flex flex-col md:flex-row mt-4 w-full ${isScrolled ? 'hidden' : ''}`}>
            {['Women Basic', 'Jewelry', 'Watches', 'Bags', 'Fragrances', 'Formals', 'MakeUp', 'Shoes', 'Bridal Wear'].map((item, index) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(`section${index + 1}`, item)}
                  className="md:py-4 md:px-4 py-3 px-10 block uppercase transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          {isMenuOpen && (
            <button
              onClick={handleLogout}
              className="md:hidden py-3 px-10 mt-4 block uppercase transition-colors font-bold text-red-500"
            >
              LOGOUT
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
