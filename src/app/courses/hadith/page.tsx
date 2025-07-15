import ClassInfo from "@/components/ClassInfo";
import JoinForm from "@/components/JoinForm";
import WhyUs from "@/components/whyUs";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function HadithCourse() {
  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[180px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-2">
          <div className="text-white max-w-xl">
            <h2 className="font-semibold lg:text-3xl text-xl text-wrap  lg:text-left px-4 lg:px-24">
              Hadith Course Online
            </h2>
            <p className="lg:text-xl text-base text-justify text-white  lg:text-left px-4 lg:px-24">
              Enroll in our Hadith Course Online to learn authentic sayings of
              the Prophet (ﷺ). Ideal for beginners and seekers of Islamic
              knowledge. Study Hadith with scholars and understand its practical
              application in daily life.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Roboto, sans-serif" }}
        className="flex flex-wrap justify-center gap-8 px-2 mt-4 lg:mt-16"
      >
        <div className="bg-white border-1 border-gray-200 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold mb-4">
            Learn Hadith Online with Authentic Guidance
          </h1>
          <p className="text-justify text-lg text-gray-700">
            Dive deep into the treasures of Islamic knowledge with our Hadith
            Course, designed for learners around the globe. Whether you are just
            starting or aiming to deepen your understanding, this course offers
            a comprehensive and engaging learning journey.
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold mb-4">
            Enroll Today to Study Hadith Online
          </h1>
          <p className="text-justify text-lg text-gray-700">
            Begin your journey into the words of the Prophet Muhammad (ﷺ). Join
            our Hadith classes to enrich your understanding of Islam and apply
            prophetic teachings in your life. Enroll now and grow spiritually.
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Why Choose Our Online Hadith Course?
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Flexible Learning: Study Hadith at your own pace with our online
              classes
            </li>
            <li>
              Learn from qualified scholars with authentic chains of
              transmission and deep knowledge of Hadith sciences.
            </li>
            <li>
              Structured Curriculum: Organized lessons from beginner to advanced
              levels, tailored to suit all learners.
            </li>
            <li>
              Interactive Approach: Benefit from live sessions, discussions, and
              practical insights to help you apply Hadith in daily life.
            </li>
          </ul>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Key Features of Our Hadith Course
          </h1>

          <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Study authentic Hadith collections such as Bukhari, Muslim, and
              Nawawi’s 40 Hadith.
            </li>
            <li>
              Emphasis on understanding the context, meaning, and implementation
              of Hadith in life.
            </li>
            <li>
              Includes explanation (Sharh) by qualified teachers for better
              comprehension and practical application.
            </li>
            <li>
              Small group sessions for personalized learning and Q&A with
              instructors.
            </li>
          </ul>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Best Way to Learn Hadith
          </h1>

          <p className="text-justify text-gray-700">
            Our Hadith course is carefully designed to make the study of
            prophetic traditions meaningful and effective. Through guided study
            and reflection, students will gain both knowledge and wisdom from
            the words of the Prophet (ﷺ).
          </p>

          <button className="lg:w-1/3 w-full bg-teal-400 hover:animate-bounce hover:bg-teal-700 text-white py-3 my-4 rounded-md font-semibold">
            Get Enrolled Now
          </button>
        </div>

        <ClassInfo />

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-6 mt-10 px-2">
          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-teal-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-wrap mt-4 space-y-2 text-gray-800">
                <li>Understand the classifications and sciences of Hadith</li>
                <li>Study selected Hadith from Sahih collections</li>
                <li>
                  Learn the background and meanings of key prophetic sayings
                </li>
                <li>Explore how Hadith apply to modern-day situations</li>
                <li>
                  Enhance your spiritual connection through prophetic wisdom
                </li>
              </ul>
            </div>
          </div>

          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-teal-500 font-semibold text-lg">
                Hadith Course Outline:
              </p>
              <ul className="list-disc text-wrap mt-4 space-y-2 text-gray-800">
                <li>Module 1: Introduction to Hadith & Its Importance</li>
                <li>Module 2: Types of Hadith and Their Classifications</li>
                <li>Module 3: Overview of Sahih Bukhari & Sahih Muslim</li>
                <li>Module 4: Selected Hadith from Imam Nawawis Collection</li>
                <li>Module 5: Understanding the Chain of Narration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 shadow-md p-6 w-full md:w-10/12 sm:w-1/4 rounded-md">
          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold mb-4">
            Learning Hadith for Beginners
          </h1>
          <p className="text-justify text-lg text-gray-700">
            Our Hadith course begins with the foundations—understanding the
            basics of Hadith terminology and authenticity. Perfect for new
            students seeking a structured path to deeper Islamic knowledge.
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Explanation of Hadith with Context and Wisdom
          </h1>

          <p className="text-justify my-2 text-lg  text-gray-700">
            Each Hadith is explained in light of Islamic scholarship. We provide
            background stories and practical reflections to help students apply
            the Prophet’s teachings in real life.
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Improve Islamic Understanding Through Hadith
          </h1>

          <p className="text-justify my-2 text-lg text-gray-700">
            Beyond memorization, our goal is comprehension. You’ll gain deeper
            insights into Islamic values, ethics, and practices rooted in the
            sayings of the Prophet Muhammad (ﷺ).
          </p>

          <h1 className="lg:text-2xl text-xl  text-teal-500 font-bold my-6">
            Free Hadith Class Trial
          </h1>

          <p className="text-justify my-2 text-lg text-gray-700">
            Still unsure? Try a free trial session. Get introduced to the course
            structure, teaching style, and content before making a commitment.
          </p>
        </div>
      </div>

      <div className="px-0 w-full">
        <WhyUs />
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 mt-1 lg:mt-16">
        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="lg:text-2xl text-xl  text-black font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-justify text-lg text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>

          <Faqs />
        </div>

        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 p-6 w-full md:w-[400px] rounded-md">
          <h1 className="lg:text-2xl text-xl  text-black font-bold mb-4">
            Join Free Trial Classes
          </h1>
          <p className=" text-gray-700">Male & Female Teachers Are Available</p>

          <JoinForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}
