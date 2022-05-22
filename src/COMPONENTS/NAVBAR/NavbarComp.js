import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <div className='py-[1rem]'>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Link to={'/'} className='flex items-center'>
          <img
            src="expert-logo.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="text-deepDark uppercase self-center whitespace-nowrap text-2xl font-[700] font-semibold dark:text-white">
            Expert Tools
          </span>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link
          to={'/'} className='font-bold text-xl'
            href="/navbars"
            active={true}
          >
            Home
          </Link>
          <Link to={'/'} className='font-bold text-xl' href="/navbars">
            About
          </Link>
          <Link to={'/'} className='font-bold text-xl' href="/navbars">
            Services
          </Link>
          <Link to={'/'} className='font-bold text-xl' href="/navbars">
            Pricing
          </Link>
          <Link to={'/'} className='font-bold text-xl' href="/navbars">
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;