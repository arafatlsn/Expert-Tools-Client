import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../FIREBASE/useFireBase';
import { signOut } from 'firebase/auth';
import auth from '../FIREBASE/Firebase.init';
import Logo from '../../Assets/expert-logo.jpg'

const NavbarComp = () => {

  const { user } = useFireBase();

  return (
    <div className='py-[1rem] sticky top-0 z-50 bg-white'>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Link to={'/'} className='flex items-center'>
          <img
            src={Logo}
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
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
          {
            user && <Link to={'/dashboard'} className='font-bold text-xl' href="/navbars">
            DashBoard
          </Link>
          }
          <Link to={'/blogs'} className='font-bold text-xl' href="/navbars">
            Blogs
          </Link>
          <Link to={'/myportfolio'} className='font-bold text-xl' href="/navbars">
            My Portfolio
          </Link>

          {
            !user ? 
            <Link to={'/signin'} className='font-bold text-xl'>
            SignIn
          </Link> : 
          <button onClick={() => signOut(auth)} className='font-bold text-xl'>
            SignOut
          </button>
          }
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;