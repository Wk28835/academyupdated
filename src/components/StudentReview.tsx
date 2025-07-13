// components/StudentReview.jsx

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
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

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-16">
     

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition z-10"
          aria-label="Previous reviews"
        >
          <FiChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition z-10"
          aria-label="Next reviews"
        >
          <FiChevronRight className="h-5 w-5 text-gray-600" />
        </button>

        {/* Reviews Container */}
        <div className="flex gap-6 overflow-hidden">
          {visibleReviews.map((review, index) => (
           <div key={index}> 
            <div
               className=" bg-gray-50 text-black  shadow-base  p-6 pb-12 min-w-[300px] max-w-[500px] flex-shrink-0"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                <div className="flex justify-center mb-3 text-yellow-300">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed">{review.content}</p>
                <div className="text-sm ">{review.time}</div>
                
              </div>
            </div>
            <div className="font-medium mt-8 text-center">{review.student}</div>
                <div className="text-sm text-center">{review.role}</div>
          </div>  
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndex(index > reviews.length - 2 ? 0 : index)
              }
              className={`h-3 w-3 rounded-full ${
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
