
import ClassInfo from "@/components/ClassInfo";

import JoinForm from "@/components/JoinForm";
import WhyUs from "@/components/whyUs";
import Faqs from "@/components/Faqs";


export default function ArabicCourse() {
  

  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">
          <div className="text-white max-w-xl">
            <h2 className="font-semibold lg:text-3xl text-xl text-wrap font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
              Arabic Language Course
            </h2>
            <p className="lg:text-xl text-base text-wrap font-serif text-white pt-4 lg:text-left px-4 lg:px-24">
              Join our Arabic Language Course Online to master conversational
              and written Arabic.
              <br /> Perfect for beginners, professionals, and travelers. Enroll
              now and learn Arabic from expert instructors!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-2 mt-16">
        <div className="bg-gray-100 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Learn Arabic Online with Expert Guidance
          </h1>
          <p className="text-justify  text-gray-700">
            Discover the beauty of the Arabic language with our Arabic Language
            Course, designed for students worldwide. Whether you’re a beginner
            or looking to enhance your skills, our courses offer a comprehensive
            and interactive learning experience.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Enroll Today to Learn Arabic Language Online
          </h1>
          <p className="text-justify  text-gray-700">
            Take the first step towards mastering Arabic. Join our Arabic
            courses and transform the way you connect with the Arabic-speaking
            world. Enroll now and start your journey to fluency!
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Why Choose Our Quran Tafseer Course Online?
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Flexible Online Learning: Study Arabic from the comfort of your
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

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Key Features of Our Arabic Lessons
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Arabic Lessons Online: Perfect for students who want to learn at
              their own pace and convenience.
            </li>
            <li>
              Speaking and Writing Focus: Emphasis on conversational Arabic and
              writing skills
              <br /> to help you communicate confidently.
            </li>
            <li>
              Practical Learning: Real-life examples and cultural insights make
              learning engaging and relevant.
            </li>
            <li>
              Small Class Sizes: One-on-one and small group classes ensure
              personalized attention.
            </li>
          </ul>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Best Way to Learn Arabic
          </h1>

          <p className="text-justify  text-gray-700">
            Our Arabic lessons near you are designed to make language learning
            accessible and enjoyable. By focusing on conversational Arabic,
            grammar, and vocabulary, our program ensures you can speak, read,
            and write Arabic fluently.
          </p>

          <button className="lg:w-1/3 w-full bg-cyan-400 hover:animate-bounce hover:bg-cyan-700 text-white py-3 my-4 rounded-md font-semibold">
            Get Enrolled Now
          </button>
        </div>

       <ClassInfo />

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-6 mt-10 px-4">
          <div className="flex border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>
                  Accessibility: Learn from the comfort of your home, no matter
                  where you are in the world.
                </li>
                <li>Read Quranic Verses with Proper Pronunciation</li>
                <li>Understand and Apply Tajweed Rules</li>
                <li>Gain Understanding of Quranic Meanings and Tafseer</li>
                <li>Receive Personalized Feedback for Improvement</li>
                <li>Continue Your Quranic Learning Journey</li>
              </ul>
            </div>
          </div>

          <div className="flex border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 bg-white p-4 rounded-md">
            <div className="mx-2  text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                Benefits of Quran Tafseer Course
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>
                  Accessibility: Learn from the comfort of your home, no matter
                  where you are in the world.
                </li>
                <li>
                  Global Reach: Tailored for students in the USA, UK, and
                  Canada, our courses bridge cultural and linguistic barriers.
                </li>
                <li>
                  Interactive Experience: Engage in live sessions with
                  instructors and participate in group recitations for peer
                  learning.
                </li>
                <li>
                  Spiritual Fulfillment: Develop a deeper connection with the
                  Quran and strengthen your faith.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300  shadow-md p-6 w-full md:w-10/12 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Basic Quran Reading for Beginners
          </h1>
          <p className="text-justify  text-gray-700">
            For those new to the Quran, our course starts with the fundamentals
            of Quran reading. This includes learning to recognize the Arabic
            alphabet, vowels, and how to form basic words. We guide you
            step-by-step from the basics, making it ideal for children and
            adults who are new to Quranic studies.
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Quran Reading with Urdu Translation and Tafseer
          </h1>

          <p className="text-justify my-2  text-gray-700">
            Our curriculum goes beyond just reading the Quran. We provide
            detailed Urdu translations and Tafseer (exegesis) to help you
            understand the meanings and context of Quranic verses. This deeper
            understanding allows you to connect with the message of the Quran in
            a more meaningful way.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Improve Quran Recitation and Fluency
          </h1>

          <p className="text-justify my-2  text-gray-700">
            In addition to basic reading, we focus on improving your fluency in
            reciting the Quran. With practical recitation lessons led by
            experienced instructors, you will gain confidence in reading the
            Quran and perfect your pronunciation.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Free Online Quran Reading Trial
          </h1>

          <p className="text-justify my-2  text-gray-700">
            If you are unsure whether online learning is right for you, we offer
            a free trial class where you can experience our teaching methods
            firsthand. This gives you the chance to see how our courses work and
            decide if it’s the best fit for your learning needs.
          </p>
        </div>

        {/* Why Academy Section */}
       <WhyUs />
       
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 mt-16">
        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="text-2xl text-black font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>
         
            <Faqs />

        </div>

        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[400px] rounded-md">
          <h1 className="text-2xl text-black font-bold mb-4">Join Free Trial Classes</h1>
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
