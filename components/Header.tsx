import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import type { NavLink as NavLinkType } from '../types';

const NavLink: React.FC<{ link: NavLinkType; onClick?: () => void }> = ({ link, onClick }) => (
  <Link 
    to={link.path}
    onClick={onClick}
    className="text-medium hover:text-light transition-colors duration-300 py-2"
  >
    {link.name}
  </Link>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-lg' : 'bg-primary'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-display font-bold">
            A2B<span className="text-accent"></span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map(link => <NavLink key={link.name} link={link} />)}
          </nav>
          
          <div className="hidden lg:flex items-center">
             <Link to="/contact" className="bg-accent text-primary font-bold py-2 px-6 rounded-md hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
              Book a Discovery Call
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-secondary">
          <div className="px-4 pt-2 pb-4 flex flex-col space-y-2">
            {NAV_LINKS.map(link => <NavLink key={link.name} link={link} onClick={() => setIsOpen(false)} />)}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-accent text-primary font-bold py-3 px-6 rounded-md text-center mt-2 hover:bg-accent-hover transition-all duration-300">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;