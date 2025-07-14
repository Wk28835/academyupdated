"use client";

import { useState } from "react";

const StudentReview = () => {
  const reviews = [
    {
      title: "Exceptional Quran Learning Experience!",
      rating: 5,
      content:
        "Darul Quran Academy has excellent courses with professional teachers. The Noorani Qaida Course helped me learn Arabic Easily. recommended!",
      time: "11 Days Ago",
      student: "Ahmad",
      role: "Student",
    },
    {
      title: "Best for Quran Memorization",
      rating: 5,
      content:
        "The Quran Memorization Course is well-structured, and the teachers are very supportive. I'm making great progress, Alhamdullilah!",
      time: "7 Days Ago",
      student: "Talha Nazim",
      role: "Student",
    },
    {
      title: "Excellent Tajweed Course",
      rating: 5,
      content:
        "The Tajweed rules are explained so clearly. My Quran recitation has improved tremendously in just a few weeks.",
      time: "3 Days Ago",
      student: "Fatima",
      role: "Student",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 2 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-4 lg:py-12 px-2 md:px-16">
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={prevReview}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-5xl text-teal-400 hover:text-black z-20"
          aria-label="Previous reviews"
        >
          ‹
        </button>

        <button
          onClick={nextReview}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-5xl text-teal-400 hover:text-black z-20"
          aria-label="Next reviews"
        >
          ›
        </button>

        {/* Reviews Container */}
        <div className="flex gap-6 overflow-hidden justify-center flex-wrap">
          {/* First Card (always visible) */}
          <div className="flex flex-col items-center w-full md:w-[47%]">
            <div className="bg-gray-50 text-black shadow-base p-6 pb-12 w-full rounded-md">
              <div className="text-center">
                <h3 className="lg:text-xl text-xl font-semibold mb-2">
                  {reviews[currentIndex].title}
                </h3>
                <div className="flex justify-center mb-3 text-yellow-300">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-4 leading-relaxed">
                  {reviews[currentIndex].content}
                </p>
                <div className="text-base font-semibold text-gray-400">
                  {reviews[currentIndex].time}
                </div>
              </div>
            </div>
            <div className="font-semibold lg:mt-2 mt-4 text-center">
              {reviews[currentIndex].student}
            </div>
            <div className="text-base text-center text-gray-400">
              {reviews[currentIndex].role}
            </div>
          </div>

          {/* Second Card (only on desktop) */}
          <div className="hidden md:flex flex-col items-center w-full md:w-[47%]">
            <div className="bg-gray-50 text-black shadow-base p-6 pb-12 w-full rounded-md">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {reviews[(currentIndex + 1) % reviews.length].title}
                </h3>
                <div className="flex justify-center mb-3 text-yellow-300">
                  {[...Array(reviews[(currentIndex + 1) % reviews.length].rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-4 leading-relaxed">
                  {reviews[(currentIndex + 1) % reviews.length].content}
                </p>
                <div className="text-base font-semibold text-gray-400">
                  {reviews[(currentIndex + 1) % reviews.length].time}
                </div>
              </div>
            </div>
            <div className="font-semibold lg:mt-2 mt-4 text-center">
              {reviews[(currentIndex + 1) % reviews.length].student}
            </div>
            <div className="text-base text-center text-gray-400">
              {reviews[(currentIndex + 1) % reviews.length].role}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndex(index > reviews.length - 2 ? 0 : index)
              }
              className={`h-3 w-3 rounded-full transition ${
                currentIndex === index ? "bg-gray-600" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReview;
