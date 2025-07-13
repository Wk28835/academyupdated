import ClassInfo from "@/components/ClassInfo";

import JoinForm from "@/components/JoinForm";
import WhyUs from "@/components/whyUs";
import Faqs from "@/components/Faqs";


export default function NooraniQaidaCourse() {
  
  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">
          <div className="text-white max-w-xl">
            <h2 className="font-semibold text-xl lg:text-3xl text-wrap font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
              Quran-Tafseer Course in USA, UK & Canada
            </h2>
            <p className="text-base lg:text-xl text-wrap font-serif text-white pt-4 lg:text-left px-4 lg:px-24">
              Learn Quran Tafseer Course Online with expert scholars. Flexible,
              interactive courses in English for USA, UK, and Canada. Enroll
              now!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-2 mt-16">
        <div className="bg-gray-100 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Discover the Depths of the Holy Quran with Our Quran Tafseer Course
            Online
          </h1>
          <p className="text-justify  text-gray-700">
            Quran Tafseer Course Online is a pathway to understanding the
            timeless guide for humanity, the Quran. Delve deep into its divine
            message, meanings, and context through our meticulously designed
            program. Our Quran Tafseer Course Online offers a comprehensive
            approach to uncovering its wisdom and teachings. Our Quran Tafseer
            Course Online is meticulously designed to help students uncover the
            profound wisdom, teachings, and relevance of the Holy Quran in
            today’s world.
          </p>

          <h1 className="text-2xl py-4 text-cyan-500 font-bold mb-2">
            What is Tafseer?
          </h1>
          <p className="text-justify  text-gray-700">
            Tajweed refers to the set of rules governing the proper
            pronunciation of Quranic Arabic during recitation. It ensures that
            every letter is pronounced correctly, maintaining its rightful
            characteristics and avoiding errors that may alter the meaning of
            the Quran. Learning Tajweed helps you honor the Quran’s sanctity and
            recite it as it was revealed to the Prophet Muhammad (peace be upon
            him).
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Why Choose Our Quran Tafseer Course Online?
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Comprehensive Learning: Gain an in-depth understanding of the
              Quranic verses (ayahs) with a detailed analysis of their context
              and interpretations.
            </li>
            <li>
              Expert Scholars: Learn from highly qualified Islamic scholars with
              years of experience in delivering Tafseer lessons.
            </li>
            <li>
              Flexible Timings: Designed for busy individuals, our online
              Tafseer classes fit conveniently into your schedule.
            </li>
            <li>
              Personalized Sessions: One-on-one and group classes tailored to
              your needs and learning pace.
            </li>
            <li>
              Certified Curriculum: Following authentic and widely recognized
              Tafseer methodologies.
            </li>
          </ul>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Key Features of the Quran Tafseer Course Online
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Language Flexibility: Learn Quran Tafseer in English to make the
              content accessible for students in the USA, UK, and Canada.
            </li>
            <li>
              Online Platform: Seamlessly access Tafseer lessons from the
              comfort of your home via our user-friendly online platform.
            </li>
            <li>
              Interactive Learning: Engage in discussions and Q&A sessions to
              clarify doubts and deepen your understanding.
            </li>
            <li>
              Structured Content: Cover essential topics like the reasons behind
              Quranic revelations (Asbab al-Nuzul), linguistic analysis, and the
              practical application of Quranic guidance.
            </li>
          </ul>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Who Is This Course For?
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Students seeking a detailed understanding of Tafseer-ul-Quran.
            </li>
            <li>
              Individuals aiming to strengthen their connection with the Quran.
            </li>
            <li>
              Anyone eager to explore Quran Tafseer in English to better
              comprehend its divine teachings.
            </li>
          </ul>

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
                Tafseer Quran Course Outline:
              </p>
              <ul className="list-disc text-wrap mt-4 space-y-2 text-gray-800">
                <li>Learn the shapes of Arabic alphabets</li>
                <li>Understand Compound Letters (Huroof e Murakkabat) and Harakaat</li>
                <li>Study Standing Movements (Vertical Harakaat)</li>
                <li>Explore Maddah Letters, Leen Letters, and Sukoon (Jazm)</li>
                <li>Learn the Rules of Noon Sakin, Meem Sakin, and Waqf (Rules of Stop)</li>
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
