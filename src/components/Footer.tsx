"use client";

import Link from "next/link";

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-teal-600 mt-6 text-white px-4 pt-3 pb-3">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-4">

        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col gap-4 text-center md:text-left">
         
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <MdEmail className="text-xl" /> info@darulilmacademy.com
          </p>
          <p className="text-sm">Phone: +92 319 5338897 | +44 7808 715763</p>

          <div className="flex gap-4 justify-center md:justify-start text-lg mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Section - Course Links */}
        <div className="md:w-1/3">
          <h3 className="font-semibold text-lg mb-2 text-center md:text-left">Courses</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-center md:text-left">
            <Link href="/courses/noorani">Noorani Qaida</Link>
            <Link href="/courses/reading">Quran Reading</Link>
            <Link href="/courses/memorization">Memorization</Link>
            <Link href="/courses/translate">Translation</Link>
            <Link href="/courses/tajweed">Tajweed</Link>
            <Link href="/courses/tafseer">Tafseer</Link>
            <Link href="/courses/hadith">Hadith</Link>
            <Link href="/courses/arabic">Arabic Language</Link>
            <Link href="/courses/islamic_studies">Islamic Studies</Link>
          </div>
        </div>

        {/* Right Section - CTA Buttons */}
        <div className="md:w-1/3 flex lg:flex-col gap-4 justify-center items-center">
          <Link
            href="/register"
            className="bg-white text-black hover:bg-teal-500 px-6 py-2 rounded-md font-semibold transition"
          >
            Register Now
          </Link>
          <Link
            href="/free-trial"
            className="bg-white text-black hover:bg-teal-500 px-6 py-2 rounded-md font-semibold transition"
          >
            Free Trial
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm mt-3 border-t border-white/30 pt-2">
        2025 Darul Ilm Online Quran Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
