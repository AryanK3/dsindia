"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#015D9D' }} className="h-28 flex items-center relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src="/prod/dslogo.gif" alt="Image 1" className="w-97 h-22 rounded-md" style={{ marginTop: '5px' }} />
        </div>
        <div className="hidden sm:block flex items-center space-x-6">
          <Link legacyBehavior href="/">
            <a className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-medium" style={{ textDecoration: 'none' }}>
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/products">
            <a className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-medium" style={{ textDecoration: 'none' }}>
              Products
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-medium" style={{ textDecoration: 'none' }}>
              Contact
            </a>
          </Link>
          <a href="/border2.pdf" download className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-base font-medium" style={{ textDecoration: 'none' }}>
            Catalogue
          </a>
        </div>
        <div className="block sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden absolute inset-x-0 top-28 bg-sky-900 text-white py-4 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col space-y-5">
            <Link legacyBehavior href="/">
              <a className="hover:text-blue-500" style={{ color: 'white' }}>
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/products">
              <a className="hover:text-blue-500" style={{ color: 'white' }}>
                Products
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="hover:text-blue-500" style={{ color: 'white' }}>
                Contact
              </a>
            </Link>
            <a href="/border2.pdf" download className="hover:text-blue-500" style={{ color: 'white' }}>
              Catalogue
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
