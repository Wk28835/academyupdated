"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full bg-white px-4 py-4 lg:py-6 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="lg:text-3xl text-xl sm:text-4xl font-bold text-[#1AB0BA] mb-4" style={{ fontFamily: 'League Spartan, sans-serif' }}>
          About Darul Ilm Quran Academy
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Empowering students around the world with authentic Quran education, guided by expert tutors, from the comfort of their homes.
        </p>
      </div>

      {/* Image and Mission */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-between lg:mt-14 mt-4 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="lg:text-2xl text-xl font-semibold text-[#1AB0BA]">Our Mission</h2>
          <p className="text-gray-700 text-sm text-justify">
            At <strong>Darul Ilm Online Quran Academy</strong>, our mission is to make Quranic and Islamic education accessible to every household. Whether you are a beginner, a child, or someone revisiting the Quran, our certified tutors offer personalized classes in Tajweed, Hifz, Arabic, and more — all online.
          </p>
          <p className="text-gray-700 text-sm text-justify">
            With our flexible schedule, multilingual support, and one-on-one learning options, we strive to create an environment that is spiritually enriching and academically effective.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="/logo1.png"
            alt="About Darul Ilm"
            width={600}
            height={400}
            className="rounded-lg "
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="lg:mt-20 mt-6 max-w-xl lg:max-w-6xl mx-auto">
        <h2 className="lg:text-2xl text-xl font-semibold text-center text-[#1AB0BA] mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Certified male & female Quran teachers",
            "Flexible schedule to suit your routine",
            "24/7 student support",
            "Structured curriculum with progress tracking",
            "Free one-day trial class",
            "Personalized one-on-one classes",
          ].map((point, i) => (
            <div
              key={i}
              className="bg-[#1AB0BA] hover:shadow-lg transition p-6 rounded-md text-center border border-cyan-200"
            >
              <p className="text-sm sm:text-base text-white font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>

       <div className="py-8">
        <h1 className="text-center text-xs text-gray-500">
          Copyright © 2025 Darul Ilm Online Quran Academy
        </h1>
      </div>

   
      
    </div>
  );
}
