"use client";
import { JSX, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: JSX.Element;
}

const Faqs = () => {
  const faqData: FAQItem[] = [
    {
      question: "What Do I Need to Start?",
      answer: (
        <>
          <p>• A device (PC, tablet, or phone) with internet.</p>
          <p>• Install Zoom or Skype and sign in.</p>
          <p>• Your teacher will contact you at class time.</p>
        </>
      ),
    },
    {
      question: "How Long Will It Take to Learn Quran, Arabic, or Islamic Studies?",
      answer: (
        <p>
          Duration varies by student. We customize your learning to fit your
          goals and pace.
        </p>
      ),
    },
    {
      question: "Do We Have Any Course Materials?",
      answer: (
        <p>
          Yes, we provide Qurans, Tajweed books, and Arabic/Islamic study
          materials after joining.
        </p>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">FAQ&apos;s</h2>
      <ul className="ml-6 mt-4 space-y-2 text-gray-800">
        {faqData.map((item, index) => (
          <li key={index} className="transition-all">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-base font-medium flex justify-between items-center py-2"
            >
              {item.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
              } text-gray-700`}
            >
              {openIndex === index && (
                <div className="space-y-2 text-sm sm:text-base">
                  {item.answer}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
