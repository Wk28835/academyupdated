"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openList, setListOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      {/* Top Bar */}
      <div className="hidden sm:flex justify-between items-center px-6 py-2 bg-gray-100 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <MdEmail className="text-blue-500 text-lg" />
          <span>info@darulilmacademy.com</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/pk.png" alt="Pakistan Flag" width={24} height={16} />
            <span>+92 319 5338897</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/usa.png" alt="UK Flag" width={24} height={16} />
            <span>+44 7808 715763</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo1.png"
              alt="Darul Quran Academy"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 font-sans text-gray-700">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setListOpen(true)}
              onMouseLeave={() => setListOpen(false)}
            >
              <button className="flex items-center hover:text-blue-500">
                Courses
                <FaChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    openList ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openList && (
                <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
                  {[
                    { href: "/courses/noorani", label: "Noorani Qaida Course" },
                    { href: "/courses/reading", label: "Quran Reading Course" },
                    { href: "/courses/memorization", label: "Quran Memorization" },
                    { href: "/courses/translate", label: "Quran Translation Course" },
                    { href: "/courses/tajweed", label: "Quran Tajweed Course" },
                    { href: "/courses/tafseer", label: "Quran Tafseer Course" },
                    { href: "/courses/arabic", label: "Arabic Language Course" },
                    { href: "/courses/islamic_studies", label: "Islamic Studies Course" },
                  ].map((item, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link href="/pricing" className="hover:text-blue-500">
              Pricing
            </Link>
            <Link href="/reviews" className="hover:text-blue-500">
              Reviews
            </Link>
            <Link href="/faqs" className="hover:text-blue-500">
              FAQs
            </Link>
            <Link href="/contact_us" className="hover:text-blue-500">
              Contact Us
            </Link>
            <Link href="/islamic_blog" className="hover:text-blue-500">
              Islamic Blog
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 text-black">
            <ul className="flex flex-col space-y-3 text-sm">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setListOpen(!openList)}
                  className="flex items-center text-gray-700 hover:text-blue-500"
                >
                  Courses
                  <FaChevronDown
                    className={`ml-2 transition-transform ${
                      openList ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openList && (
                  <ul className="pl-4 mt-2 space-y-1 bg-white rounded shadow">
                    {[
                      { href: "/courses/noorani", label: "Noorani Qaida Course" },
                      { href: "/courses/reading", label: "Quran Reading Course" },
                      { href: "/courses/memorization", label: "Quran Memorization" },
                      { href: "/courses/translate", label: "Quran Translation Course" },
                      { href: "/courses/tajweed", label: "Quran Tajweed Course" },
                      { href: "/courses/tafseer", label: "Quran Tafseer Course" },
                      { href: "/courses/arabic", label: "Arabic Language Course" },
                      { href: "/courses/islamic_studies", label: "Islamic Studies Course" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            setListOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/reviews" onClick={() => setIsOpen(false)}>
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/faqs" onClick={() => setIsOpen(false)}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact_us" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/islamic_blog" onClick={() => setIsOpen(false)}>
                  Islamic Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
