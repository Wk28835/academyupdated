
import ClassInfo from "@/components/ClassInfo";

import JoinForm from "@/components/JoinForm";
import WhyUs from "@/components/whyUs";
import Faqs from "@/components/Faqs";



export default function ArabicCourse() {
  

  return (
    <div className="w-full mx-0 ">
      <div
        className="relative rounded-md w-full h-[180px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-4">
          <div className="text-white max-w-xl">
            <h2 className="font-semibold lg:text-3xl text-xl text-wrap  lg:text-left px-4 lg:px-24">
              Islamic Studies Course at Darul Quran Academy
            </h2>
            <p className="text-sm text-wrap text-justify text-white  lg:text-left px-4 lg:px-24">
              Join the Islamic Studies Course at Darul Quran Academy. 
              Flexible online courses for students in the USA, UK, and Canada. Enroll now
            </p>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: 'Roboto, sans-serif' }} 
      className="flex flex-wrap justify-center gap-8 px-2 mt-4 lg:mt-16">
        <div className="bg-white border-1 border-gray-200 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold mb-4">
            Comprehensive Islamic Studies Online
          </h1>
          <p className="text-justify text-sm  text-gray-700">
          Enhance your knowledge of Islam with our Islamic Studies Course at Darul Quran Academy. Our courses are designed for individuals who seek a deeper understanding of Islamic principles, 
          history, and values through an engaging and interactive online platform..
          </p>

          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold mb-4">
            Enroll Today for an Enriching Islamic Learning Experience
          </h1>
          <p className="text-justify text-sm text-gray-700">
            Join our Islamic studies online program and take the first step towards a deeper connection with your faith. 
            Enroll now and become part of a community dedicated to spreading the light of Islam.
          </p>
          <h1 className="lg:text-2xl  text-xl  text-cyan-500 font-bold my-6">
            Why Choose Our Islamic Studies Course Online?
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Flexible Online Learning: Study Islamic Education from the comfort of your
              home with our online Arabic classes
            </li>
            <li>
              Learn from native Arabic speakers and certified instructors who
              specialize in teaching Arabic to non-native speakers.
            </li>
            <li>
              Customized Lessons: Personalized learning plans to match your
              proficiency level, whether <br />
              beginner, intermediate, or advanced
            </li>
            <li>
              Interactive Tools: Engage with modern tools, including live video
              sessions, language apps,
              <br /> and study materials, to ensure effective learning.
            </li>
          </ul>

          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Key Features of Our Arabic Lessons
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Quran Learning Online: Master the teachings of the Quran with in-depth tafseer and tajweed lessons.
            </li>
            <li>
              Practical Learning: Real-life examples and cultural insights make
              learning engaging and relevant.
            </li>
            <li>
              Structured Learning: Designed for all levels, from beginners to advanced learners.
            </li>
          </ul>

          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Best Way to Learn Arabic
          </h1>

          <p className="text-justify text-sm  text-gray-700">
            Our Islamic Studies lessons near you are designed to make learning
            accessible and enjoyable. By focusing on conversational Islamic history, Arabic,
            grammar, and vocabulary, our program ensures you can speak, read,
            and write Arabic fluently.
          </p>

          <button className="lg:w-1/3 w-full bg-cyan-400 hover:animate-bounce hover:bg-cyan-700 text-white py-3 my-4 rounded-md font-semibold">
            Get Enrolled Now
          </button>
        </div>

        <ClassInfo />

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-6 mt-10 px-2">
          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-wrap mt-4 space-y-2 text-gray-800">
                <li>Introduction to Islamic Studies</li>
                <li>Study phases of islam</li>
                <li>Understand the basic rules of Tajweed</li>
                <li>Read the Quran with accurate pronunciation</li>
                <li>Gain foundational Islamic knowledge</li>
              </ul>
            </div>
          </div>

          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                Islamic Studies Course Outline:
              </p>
              <ul className="list-disc text-wrap mt-4 space-y-2 text-gray-800">
                <li>Learn Base of Islamic Education</li>
                <li>Understand Compound Letters (Huroof e Murakkabat) and Harakaat</li>
                <li>Study Standing Movements (Vertical Harakaat)</li>
                <li>Explore Maddah Letters, Leen Letters, and Sukoon (Jazm)</li>
                <li>Learn the Rules of Noon Sakin, Meem Sakin, and Waqf (Rules of Stop)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-gray-300  shadow-md p-6 w-full md:w-10/12 sm:w-1/4 rounded-md">
          
          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Quran Islamic Stories and Tafseer
          </h1>

          <p className="text-justify text-sm my-2  text-gray-700">
            Our curriculum goes beyond just reading the Islamic history. We provide
            detailed Urdu translations and Tafseer (exegesis) to help you
            understand the meanings and context of Quranic verses. This deeper
            understanding allows you to connect with the message of the Quran in
            a more meaningful way.
          </p>

          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Improve Quran Recitation and Fluency
          </h1>

          <p className="text-justify my-2 text-sm  text-gray-700">
            In addition to basic reading, we focus on improving your fluency in
            reciting the Quran. With practical recitation lessons led by
            experienced instructors, you will gain confidence in reading the
            Quran and perfect your pronunciation.
          </p>

          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Free Online Quran Reading Trial
          </h1>

          <p className="text-justify my-2 text-sm  text-gray-700">
            If you are unsure whether online learning is right for you, we offer
            a free trial class where you can experience our teaching methods
            firsthand. This gives you the chance to see how our courses work and
            decide if it’s the best fit for your learning needs.
          </p>
        </div>

     
      </div>

      <div className="px-0 w-full">
      <WhyUs />
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 mt-2 lg:mt-16">
        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="lg:text-2xl text-xl  text-black font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-sm text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>
         <Faqs />
        </div>

        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[400px] rounded-md">
          <h1 className="lg:text-2xl text-xl  text-black font-bold mb-4">Join Free Trial Classes</h1>
          <p className="mb-4 text-gray-700">
            Male & Female Teachers Are Available
          </p>
         <JoinForm />
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
