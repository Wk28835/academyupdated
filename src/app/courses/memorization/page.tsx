
import ClassInfo from "@/components/ClassInfo";

import JoinForm from "@/components/JoinForm";
import WhyUs from "@/components/whyUs";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";



export default function Memorization() {
  

  return (
    <div className="w-full mx-0 ">
      <div
        className="relative rounded-md w-full h-[180px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-4">
          <div className="text-white max-w-xl">
            <h2 className="font-semibold text-xl lg:text-3xl text-wrap lg:text-left px-4 lg:px-24">
              Quran Memorization Online Course
            </h2>
            <p className="text-base lg:text-xl  lg:text-left px-4 lg:px-24">
              Join our online Quran memorization program to deepen your understanding of the Quran and Islam.
            </p>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: 'Roboto, sans-serif' }} 
      className="flex flex-wrap justify-center gap-8 px-2 mt-4 lg:mt-16">
        <div className="bg-white border-1 border-gray-200 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold mb-4">
            Quran Memorization Online Course – Learn and Master Hifz Quran
          </h1>
          <p className="text-justify text-lg  text-gray-700">
            Are you ready to embark on a spiritual journey and memorize the
            Quran? At Darul Ilm Online Quran Academy, we offer the most
            comprehensive online Quran memorization classes, designed for
            students of all ages and proficiency levels. Whether you’re in the
            USA, UK, or the Middle East, our flexible and personalized courses
            ensure you achieve your Hifz goals with ease.
          </p>
          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            What You Will Learn In This Course?
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>Accurate Quran Memorization</li>
            <li>Mastering Tajweed Rules:</li>
            <li>Retention Techniques</li>
            <li>Daily Revision Practices</li>
            <li>Spiritual Connection</li>
          </ul>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Certified and Experienced Instructors
          </h1>

          <p className="text-justify text-lg my-2  text-gray-700">
            At Darul Ilm Online Quran Academy, we are proud to have a team of
            highly qualified instructors who are experts in Quranic studies,
            Tajweed, and recitation. Our instructors are passionate about
            teaching and are dedicated to making your learning experience both
            enjoyable and meaningful. With their deep knowledge and years of
            experience, you will feel supported throughout your learning
            journey.
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Free Trial Class
          </h1>

          <p className="text-justify my-2 text-lg  text-gray-700">
            Once you complete your memorization, you can guide others as a tutor
            or scholar.
          </p>

          <button className="lg:w-1/3 w-full  bg-teal-400 hover:animate-bounce hover:bg-teal-700 text-white py-3 my-4 rounded-md font-semibold">
            Get Enrolled Now
          </button>
        </div>

      <ClassInfo />

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-6 mt-10 px-4">
          <div className="flex border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-teal-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>Master the Arabic Alphabet</li>
                <li>Read Quranic Verses with Proper Pronunciation</li>
                <li>Understand and Apply Tajweed Rules</li>
                <li>Gain Understanding of Quranic Meanings and Tafseer</li>
                <li>Receive Personalized Feedback for Improvement</li>
                <li>Continue Your Quranic Learning Journey</li>
              </ul>
            </div>
          </div>

          <div className="flex border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 bg-white p-4 rounded-md">
            <div className="mx-2  text-start">
              <p className="text-teal-500 font-semibold text-lg">
                Course Outline: Quran Reading Course
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>Module 1: Introduction to Quranic Studies</li>
                <li>Module 2: Mastering the Arabic Alphabet</li>
                <li>Module 3: Basic Quranic Reading Skills</li>
                <li>Module 4: Introduction to Tajweed</li>
                <li>Module 5: Advanced Quran Reading with Tajweed</li>
                <li>Module 6: Understanding the Meaning of the Quran</li>
                <li>Module 7: Quranic Recitation Practice</li>
                <li>Module 8: Reviewing and Perfecting Your Recitation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300  shadow-md p-6 w-full md:w-10/12 sm:w-1/4 rounded-md">
          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold mb-4">
            Basic Quran Reading for Beginners
          </h1>
          <p className="text-justify text-lg  text-gray-700">
            For those new to the Quran, our course starts with the fundamentals
            of Quran reading. This includes learning to recognize the Arabic
            alphabet, vowels, and how to form basic words. We guide you
            step-by-step from the basics, making it ideal for children and
            adults who are new to Quranic studies.
          </p>
          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Quran Reading with Urdu Translation and Tafseer
          </h1>

          <p className="text-justify my-2 text-lg  text-gray-700">
            Our curriculum goes beyond just reading the Quran. We provide
            detailed Urdu translations and Tafseer (exegesis) to help you
            understand the meanings and context of Quranic verses. This deeper
            understanding allows you to connect with the message of the Quran in
            a more meaningful way.
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Improve Quran Recitation and Fluency
          </h1>

          <p className="text-justify my-2 text-lg  text-gray-700">
            In addition to basic reading, we focus on improving your fluency in
            reciting the Quran. With practical recitation lessons led by
            experienced instructors, you will gain confidence in reading the
            Quran and perfect your pronunciation.
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Free Online Quran Reading Trial
          </h1>

          <p className="text-justify my-2 text-lg  text-gray-700">
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
        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="lg:text-2xl text-xl  text-black font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>
          <Faqs />
        </div>

        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 p-6 w-full md:w-[400px] rounded-md">
          <h1 className="lg:text-2xl text-xl  text-black font-bold mb-4">Join Free Trial Classes</h1>
          <p className=" text-gray-700">
            Male & Female Teachers Are Available
          </p>

          <JoinForm />
          
        </div>
      </div>
<Footer/>

    </div>
  );
}
