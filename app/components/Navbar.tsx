"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 
    text-white">
      <div className="flex-between mx-auto w-full lg:max-w-screen-2xl px-6 xs:px-8 sm:px-12">
        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden cursor-pointer"
          onClick={toggleMenu}
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="#About">
              About
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="#RecentProjects">
              Recent Projects
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="#Approach">
              Approach
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-black py-4">
          <ul className="flex flex-col items-center gap-y-4">
            <li className="body-text text-gradient_blue-purple !font-bold">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="body-text !font-normal">
              <Link href="#About">
                About
              </Link>
            </li>
            <li className="body-text !font-normal">
              <Link href="#RecentProjects">
                Recent Projects
              </Link>
            </li>
            <li className="body-text !font-normal">
              <Link href="#Approach">
                My Approach
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
