"use client";
import Image from "next/image";
import WhyUs from "../components/whyUs"
import Link from "next/link";
import Pricing from "../components/Pricing"
import Footer from "@/components/Footer";



export default function Home() {
 
  return (
    <div className="w-full ">
      {/* Hero Section */}
      <div
  className="relative w-full min-h-[300px] lg:min-h-[450px] bg-cover bg-center"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>
  <div
    className="absolute bg-teal-400 opacity-85 inset-0 bg-opacity-40 rounded-md flex flex-col justify-center items-center px-4 sm:px-6 py-2 gap-4" >
    <div className="text-white w-full lg:max-w-xl text-center px-2">
      <h2
        style={{ fontFamily: 'Poppins, sans-serif' }}
        className="font-bold text-white py-2 text-2xl lg:text-3xl sm:text-2xl pt-2"
      >
        Welcome to Darul Ilm Online Quran Academy
      </h2>

      <div className="w-full flex justify-center py-2">
        <Image
          src="/register.png"
          alt="Register Now"
          width={800}
          height={300}
          className="w-full lg:w-[800px]  object-contain"
        />
      </div>

      {/* Forms button  */}

      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-1">
        <Link href="/register">
          <button className="w-full font-bold cursor-pointer sm:w-auto px-6 bg-white text-black hover:bg-teal-500 py-2 rounded-md transition text-lg sm:text-base">
            Register Now
          </button>
        </Link>

        <Link href="/freeTrial">
          <button className="w-full font-bold cursor-pointer sm:w-auto px-6 bg-white text-black hover:bg-teal-500 py-2 rounded-md transition text-lg sm:text-base">
            Free Trial
          </button>
        </Link>
      </div>


    </div>
  </div>
</div>

      {/* Courses Header */}
      <div className="mt-16 pb-8 shadow-sm hover:shadow-md hover:shadow-teal-500 shadow-teal-400 sm:mt-16 mx-auto w-full max-w-screen-lg text-center px-4 sm:px-6">
        <h1 className="text-2xl pt-4 sm:text-3xl md:text-4xl font-bold text-black">
          Explore Our Courses
        </h1>
        <p className="pt-3 text-ellipsis sm:pt-4pb-4 sm:pb-6 text-base sm:text-base md:text-base">
          Explore our online courses, including Noorani Qaida, Quran Reading,
          Tajweed, Tafseer, Memorization, Hadith, Arabic Language, and Islamic Studies.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 text-black mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {[
          {
            img: "/norani_qaida.jpg",
            title: "Noorani Qaida",
            desc: "The Noorani Qaida is the first and most important step in learning the Quran. This course is specially designed for children and beginners to help them recognize Arabic letters, learn correct pronunciation (Makharij), and form basic words. Our qualified teachers use simple and engaging methods to build a strong foundation for future Quranic reading and Tajweed.",
          },
          {
            img: "/reading.jpg",
            title: "Quran Reading",
            desc: "This course is designed for those who want to recite the Quran fluently and correctly. It focuses on improving pronunciation, rhythm, and confidence in reading. With step-by-step guidance and daily practice under the supervision of expert teachers, students will develop a strong connection with the Quran and enhance their reading skills beautifully.",
          },
          {
            img: "/tajweed.jpg",
            title: "Quran Tajweed",
            desc: "Reciting the Quran with Tajweed is essential to preserve the correct pronunciation and beauty of Allah’s words. In this course, students learn the rules of Tajweed including Makharij (articulation points), Sifaat (letter characteristics), Ghunna, Madd, Idghaam, and more. Practical exercises and personalized instruction help students perfect their recitation.",
          },
          {
            img: "/memory.jpg",
            title: "Quran Memorization",
            desc: "Memorizing the Quran is a noble achievement. This course offers a structured memorization plan with daily lessons, revision schedules, and memory-building techniques. Students are guided by experienced Huffaz and receive motivation, encouragement, and consistent support to complete their Hifz journey with success.",
          },
          {
            img: "/translate.jpg",
            title: "Quran Translation",
            desc: "Understanding the Quran is essential for every Muslim. This course offers word-by-word translation in Urdu or English along with explanations. Each lesson helps students understand vocabulary, verse meanings, and practical messages in a simple and effective way, making the Quran’s message clear and applicable to daily life.",
          },
          {
            img: "/tafseer.jpg",
            title: "Quran Tafseer",
            desc: "To understand the depth and wisdom of the Quran, Tafseer is necessary. This course explains the background (Asbab al-Nuzul), purpose, and meanings of verses using authentic classical and modern Tafseer. It enables students to explore the Quran deeply and apply its lessons in real life, in a clear and easy-to-understand format.",
          },
          {
            img: "/hadith.jpg",
            title: "Hadith Course",
            desc: "The sayings of Prophet Muhammad ﷺ are a guiding light for every Muslim. In this course, students study authentic Hadiths from major collections like Bukhari and Muslim. Each Hadith is explained with its meaning, context, and practical application, helping students bring the Sunnah into their everyday lives.",
          },
          {
            img: "/language.jpg",
            title: "Arabic Language",
            desc: "This course is for students who want to learn the Arabic language to better understand the Quran and Hadith. It covers Arabic grammar, vocabulary, sentence structure, and basic conversation. Special focus is given to Quranic Arabic to enable students to connect deeply with Islamic texts and gain insight directly from the original language.",
          },
          {
            img: "/studies.jpg",
            title: "Islamic Studies Courses",
            desc: "A complete and well-rounded course that covers Aqeedah (belief), Ibadah (worship), Seerah (biography of the Prophet ﷺ), Fiqh (Islamic rulings), and Islamic manners. This course is suitable for children, teens, and adults. It provides a strong Islamic foundation along with practical guidance for living an Islamic life.",
          },
        ].map((course, idx) => (
          <div
            key={idx}
            className="shadow-md hover:shadow-lg hover:shadow-teal-500 shadow-teal-400 rounded-md"
          >
            <Image
              className="h-56 mt-4 w-full px-12 object-cover"
              src={course.img}
              alt="Course Image"
              width={400}
              height={200}
            />
            <div className="p-4 pb-10 ">
              <h2 className="font-bold  text-xl mb-2">{course.title}</h2>
              <p className="text-base text-justify text-gray-700">
                {course.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Academy Section */}
      <WhyUs />

    
       


      {/*packages section */}
      <div className="mt-2 px-4 text-center">
        <h1 className="lg:text-4xl text-xl font-bold text-black mb-8">
          Basic Plans
        </h1>

       <Pricing />

      </div>

          

      <Footer/>
    </div>
  );
}
