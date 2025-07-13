  
"use client";

import StudentReview from './../../components/StudentReview';


export default function Reviews() {

  

  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-100 shadow-lg flex justify-start items-center
 px-4 py-2">
          <div className="text-white ">
            <h2 className="font-bold  text-3xl text-white pt-4 lg:text-left px-2 lg:px-24">
              STUDENT REVIEWS
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1 className="px-2 lg:text-3xl text-2xl text-center text-[#13B4B6] font-bold">
          Dar ul Quran Academy Reviews
        </h1>
      </div>
      {/*Revies section */}
      {/* student review section */}
      <div className="max-w-6xl  mt-6 mx-auto p-6">
       
    <StudentReview/>
        
      </div>
      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
