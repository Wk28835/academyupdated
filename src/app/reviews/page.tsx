  
"use client";

import Footer from '@/components/Footer';
import StudentReview from './../../components/StudentReview';


export default function Reviews() {

  

  return (
    <div className="w-full mx-0 ">
      <div
        className="relative  w-full h-[180px]  bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-100 shadow-lg flex justify-start items-center px-4 py-2">
          <div className="text-white ">
            <h2 className="font-bold text-xl lg:text-3xl text-white pt-4 text-left px-2 lg:px-24">
              STUDENT REVIEWS
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1 className="px-2 text-3xl text-center text-teal-500 font-bold">
          Dar ul Quran Academy Reviews
        </h1>
      </div>
      {/*Revies section */}
      {/* student review section */}
      <div className="max-w-6xl  mt-6 mx-auto p-2">
       
    <StudentReview/>
        
      </div>
      <Footer/>
    </div>
  );
}
