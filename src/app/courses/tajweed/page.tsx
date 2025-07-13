
import ClassInfo from "@/components/ClassInfo";

import JoinForm from "@/components/JoinForm";
import WhyUs from "@/components/whyUs";
import Faqs from "@/components/Faqs";



export default function Tajweed() {
 
  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[180px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-4">
          <div className="text-white max-w-xl">
            <h2 className="font-semibold lg:text-3xl text-xl text-wrap  pt-3 lg:text-left px-4 lg:px-24">
              Online Tajweed Course
            </h2>
            <p className="text-sm text-justify  text-white  lg:text-left px-4 lg:px-24">
              Online Tajweed Course – Perfect Your Quran Recitation
            </p>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: 'Roboto, sans-serif' }} 
      className="flex flex-wrap justify-center gap-8 px-2 mt-4 lg:mt-16">
        <div className="bg-white border-1 border-gray-200 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold mb-4">
            Perfect Your Quran Recitation with Our Online Tajweed Course
          </h1>
          <p className="text-justify text-sm  text-gray-700">
            The beauty of the Quran lies not only in its profound meanings but
            also in its precise recitation. At Darul Ilm Online Quran Academy,
            we bring you an expertly designed Online Tajweed Course that enables
            learners to recite the Quran with accuracy, fluency, and confidence.
            This course is ideal for anyone eager to learn the art of Tajweed,
            regardless of age or prior experience.
          </p>

          <h1 className="lg:text-2xl text-xl  py-2 text-cyan-500 font-bold mb-4">
            What is Tajweed?
          </h1>
          <p className="text-justify text-sm  text-gray-700">
            Tajweed refers to the set of rules governing the proper
            pronunciation of Quranic Arabic during recitation. It ensures that
            every letter is pronounced correctly, maintaining its rightful
            characteristics and avoiding errors that may alter the meaning of
            the Quran. Learning Tajweed helps you honor the Quran’s sanctity and
            recite it as it was revealed to the Prophet Muhammad (peace be upon
            him).
          </p>
          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Why Enroll in Our Online Tajweed Course?
          </h1>

          <p className="text-justify text-sm  text-gray-700">
            Our Online Tajweed Course is meticulously crafted to cater to
            students of all levels, whether you’re a beginner starting from
            scratch or someone seeking to refine their skills. By enrolling in
            our course, you will:
          </p>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Learn Correct Pronunciation: Master the articulation points
              (makharij) and characteristics (sifaat) of Arabic letters.
            </li>
            <li>
              Understand Tajweed Rules: Familiarize yourself with essential
              Tajweed principles such as ikhfa, idgham, and qalqalah.
            </li>
            <li>
              Improve Fluency: Enhance your recitation flow with guided practice
              and expert feedback.
            </li>
            <li>
              Receive One-on-One Attention: Benefit from personalized
              instruction tailored to your needs and pace.
            </li>
            <li>
              Gain Spiritual Rewards: Perfect your recitation and elevate your
              connection with Allah.
            </li>
          </ul>

          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Features of Our Online Tajweed Course
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>Theoretical foundations to understand Tajweed rules.</li>
            <li>Practical exercises to apply these rules during recitation.</li>
            <li>
              Strategies to overcome common challenges in Quranic pronunciation.
            </li>
          </ul>

          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            How to Get Started
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>Fill out the registration form on our website.</li>
            <li>
              Schedule your free trial class to experience our teaching style..
            </li>
            <li>
              Select a plan that suits your schedule and start your journey
              towards mastering Tajweed.
            </li>
          </ul>

          <button className="lg:w-1/3 w-full bg-cyan-400 hover:animate-bounce hover:bg-cyan-700 text-white py-3 my-4 rounded-md font-semibold">
            Get Enrolled Now
          </button>
        </div>

        <ClassInfo />

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-4 mt-10 px-4">
          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>Recognize Arabic letters in different shapes and sounds</li>
                <li>Study the Makharij of letters</li>
                <li>Understand the basic rules of Tajweed</li>
                <li>Read the Quran with accurate pronunciation</li>
                <li>Gain foundational Islamic knowledge</li>
              </ul>
            </div>
          </div>

          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                Course Outline: Quran Reading Course
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>Module 1: Introduction to Tajweed</li>
                <li>Module 2: Mastering the Arabic Alphabet</li>
                <li>Module 3: Basic Quranic Reading Skills</li>
                <li>Module 5: Advanced Quran Reading with Tajweed</li>
                <li>Module 8: Reviewing and Perfecting Your Recitation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300  shadow-md p-6 w-full md:w-10/12 sm:w-1/4 rounded-md">
          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold mb-4">
            Basic Quran Reading for Beginners
          </h1>
          <p className="text-justify text-sm  text-gray-700">
            For those new to the Quran, our course starts with the fundamentals
            of Quran reading. This includes learning to recognize the Arabic
            alphabet, vowels, and how to form basic words. We guide you
            step-by-step from the basics, making it ideal for children and
            adults who are new to Quranic studies.
          </p>
          <h1 className="lg:text-2xl text-xl  text-cyan-500 font-bold my-6">
            Quran Reading with Urdu Translation and Tafseer
          </h1>

          <p className="text-justify my-2 text-sm  text-gray-700">
            Our curriculum goes beyond just reading the Quran. We provide
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


      <div className="flex flex-wrap justify-center gap-8 px-4 mt-1 lg:mt-16">
        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-2 w-full md:w-[600px] rounded-md">
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

          <JoinForm/>
          
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
