
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
const StudentReview= () => {
  const reviews = [
    {
      title: "Exceptional Quran Learning Experience!",
      rating: "★★★★★",
      content:
        "Darul Quran Academy has excellent courses with professional teachers. The Noorani Qaida Course helped me learn Arabic pronunciation easily. Highly recommended!",
      time: "11 Days Ago",
      student: "Ahmad",
      role: "Student",
    },
    {
      title: "Best for Quran Memorization",
      rating: "★★★★★",
      content:
        "The Quran Memorization Course is well-structured, and the teachers are very supportive. I'm making great progress, Alhamdullilah!",
      time: "7 Days Ago",
      student: "Talha Nazim",
      role: "Student",
    },

    {
      title: "Excellent Tajweed Course",
      rating: "★★★★★",
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

  // Get current pair of reviews to display
  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  
  return (
    <header className="bg-white shadow-md">



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
          <div className="flex gap-6  overflow-hidden">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="flex-1 bg-gray-50 min-w-[calc(50%-12px)] shadow-sm border border-gray-200 p-6"
              >
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {review.title}
                  </h2>
                  <div className="text-yellow-400 text-lg mb-3">
                    {review.rating}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {review.content}
                  </p>
                  <div className="text-gray-500 text-sm mb-4">
                    {review.time}
                  </div>
                  <div className="font-medium text-gray-800">
                    {review.student}
                  </div>
                  <div className="text-gray-500 text-sm">{review.role}</div>
                </div>
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
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? "bg-gray-600" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      

    </header>
  );
};

export default StudentReview;
