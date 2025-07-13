"use client";
import Image from "next/image";
import WhyUs from "../components/whyUs"
import StudentReview from "../components/StudentReview"
import Pricing from "../components/Pricing"
import JoinForm from "../components/JoinForm";
import Faqs from "../components/Faqs";


export default function Home() {
 
  return (
    <div className="w-full ">
      {/* Hero Section */}
      <div
        className="relative w-full   min-h-[600px] lg:min-h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }} >
        <div
          className="absolute inset-0  bg-opacity-40 rounded-md flex flex-col lg:flex-row sm:flex-row lg:justify-between  items-center px-4 sm:px-6 py-2 gap-2 sm:gap-5"
          style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}>
          <div className="text-white w-full lg:max-w-xl text-center px-2 sm:mx-0">
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="font-semibold text-white py-2 text-base sm:text-2xl pt-2">
              Welcome to Darul Ilm Online Quran Academy
            </h2>
            <h1 style={{ fontFamily: 'Roboto, sans-serif' }} className="pt-1 sm:pt-4 text-white font-bold text-lg sm:text-3xl lg:text-4xl">
              Join Free Trial Classes
            </h1>

           <div className="w-full place-items-center py-1">
               <Image 
               src={"/register.png"} alt="Register Now" width={600} height={300}    />
          </div>

          </div>
          

          <div className="w-full lg:max-w-xl sm:max-w-md">
            <form style={{ fontFamily: 'Poppins, sans-serif' }} className="space-y-4 sm:space-y-3">
              <input
                style={{ backgroundColor: "#1AB0BA" }}
                type="text"
                placeholder="Your Name"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                type="email"
                placeholder="Email Address"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                type="text"
                placeholder="Contact No"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                type="text"
                placeholder="Your Country"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <textarea
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                rows={4}
                placeholder="Your Message"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 py-2 sm:py-2 rounded-md transition text-sm sm:text-base"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Courses Header */}
      <div className="mt-12 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 sm:mt-16 mx-auto w-full max-w-screen-lg text-center px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Explore Our Courses
        </h1>
        <p className="pt-3  sm:pt-4 text-black pb-4 sm:pb-6 text-sm sm:text-base md:text-base">
          Explore our online courses, including Noorani Qaida, Quran Reading,
          Tajweed, Tafseer, Memorization, Arabic Language, and Islamic Studies.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 text-black mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {[
          {
            img: "/norani_qaida.jpg",
            title: "Quran Reading",
            desc: "Learn Noorani Qaida with expert guidance to master accurate Quranic pronunciation. Build a strong foundation in Arabic reading and improve your recitation skills. Gain the confidence to read the Quran correctly with proper articulation and understanding.",
          },
          {
            img: "/reading.jpg",
            title: "Quran Reading",
            desc: "Master Quran reading with proper pronunciation and fluency through expert guidance. Improve your recitation skills with personalized lessons from experienced tutors. Gain confidence in reading the Quran with precise articulation and accuracy.",
          },
          {
            img: "/tafseer.jpg",
            title: "Noorani Qaida",
            desc: "Understand the meanings of the Quran with in-depth Tafseer and explore the wisdom behind its verses.  Connection to the Quran by learning its historical context and spiritual lessons. Enhance your comprehension of the Quran and apply its teachings to your daily life.",
          },
          {
            img: "/memory.jpg",
            title: "Quran Memorization",
            desc: "Memorize the Quran with expert guidance and proven techniques to enhance your retention. Strengthen your memory through consistent daily practice and personalized support. Achieve your goal of Quranic memorization with focus, dedication, and expert strategies.",
          },
          {
            img: "/translate.jpg",
            title: "Quran Translation",
            desc: "Learn Quranic translation with clear and detailed explanations to understand the message of the Quran in your own language. Gain deeper insight into the meanings and teachings of the Quran. Bridge the gap between Arabic and your language for a more meaningful connection with the Quran.",
          },
          {
            img: "/tajweed.jpg",
            title: "Quran Tajweed",
            desc: "Perfect your Quran recitation by mastering the Tajweed rules for proper pronunciation and articulation. Learn the essential techniques to ensure accurate and beautiful recitation of the Quran. Enhance your skills through expert guidance and consistent practice for flawless delivery.",
          },
          {
            img: "/language.jpg",
            title: "Arabic Language",
            desc: "Learn Arabic reading, writing, and speaking skills to master the language of the Quran. Enhance your understanding and communication with expert tutors who guide you through every step. Build a strong foundation in Arabic to deepen your connection with the Quranic teachings.",
          },
          {
            img: "/studies.jpg",
            title: "Islamic Studies Courses",
            desc: "Study a variety of Islamic Studies courses to deepen your understanding of the Quran, Hadith, Fiqh, and Aqidah. Gain a comprehensive understanding of Islamic history, ethics, and philosophy through expert guidance. Master the essential teachings of Islam and apply them to your daily life with clarity and confidence.",
          },
        ].map((course, idx) => (
          <div
            key={idx}
            className="shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-400 rounded-md"
          >
            <Image
              className="h-56 w-full p-4 object-cover"
              src={course.img}
              alt="Course Image"
              width={400}
              height={200}
            />
            <div className="p-4">
              <h2 className="font-bold  text-xl mb-2">{course.title}</h2>
              <p className="text-sm text-justify text-gray-700">
                {course.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Academy Section */}
      <WhyUs />

      {/* student review section */}
      <div className="max-w-6xl  mt-8 mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Student&apos;s Reviews
        </h1>
            <StudentReview />
      </div>  


      {/*packages section */}
      <div className="mt-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-black mb-8">
          Packages for Weekdays Lessons
        </h1>

       <Pricing />

      </div>

      {/* Terms and Trial Form */}
      <div className="flex text-black  flex-wrap justify-center gap-8 px-4 mt-16">
        <div className="bg-white shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>

          <Faqs />
        </div>

        <div className="bg-white shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[400px] rounded-md">
          <h1 className="text-2xl font-bold mb-4">Join Free Trial Classes</h1>
          <p className="mb-4 text-gray-700">
            Male & Female Teachers Are Available
          </p>
          <JoinForm />
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">
          Copyright © 2025 Darul Quran Academy |
        </h1>
      </div>
    </div>
  );
}
