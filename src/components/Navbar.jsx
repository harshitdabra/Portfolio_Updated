import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#0a192f] text-gray-300 z-50 shadow-lg border-b-2 border-gray-800'>
      {/* Menu */}
      <ul className='hidden md:flex space-x-6'>
        <li className='hover:border-b-2 hover:border-pink-600 transition-colors'>
          <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
            Home
          </Link>
        </li>
        <li className='hover:border-b-2 hover:border-pink-600 transition-colors'>
          <Link to='about' smooth={true} duration={500} className='cursor-pointer'>
            About
          </Link>
        </li>
        <li className='hover:border-b-2 hover:border-pink-600 transition-colors'>
          <Link to='skills' smooth={true} duration={500} className='cursor-pointer'>
            Skills
          </Link>
        </li>
        <li className='hover:border-b-2 hover:border-pink-600 transition-colors'>
          <Link to='work' smooth={true} duration={500} className='cursor-pointer'>
            Work
          </Link>
        </li>
        <li className='hover:border-b-2 hover:border-pink-600 transition-colors'>
          <Link to='contact' smooth={true} duration={500} className='cursor-pointer'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-50'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='social-icons-container'>
        <a
          className='social-icon linkedin'
          href='https://www.linkedin.com/in/harshitdabra/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>

        <a
          className='social-icon github'
          href='https://github.com/harshitdabra'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>

        <a
          className='social-icon email'
          href='mailto:dabraharshit@gmail.com'
        >
          <HiOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
