"use client";

import Image from "next/image";

const WhyUs = () => {
  const features = [
    {
      image: "/icons/calendar.png",
      title: "Flexible Schedule",
      desc: "Enjoy a flexible schedule tailored to your needs",
    },
    {
      image: "/icons/teacher.png",
      title: "Male & Female Tutors",
      desc: "Male and female tutors available to meet your learning needs.",
    },
    {
      image: "/icons/support.png",
      title: "24/7 Support",
      desc: "Customer support available 24/7 for your convenience.",
    },
    {
      image: "/icons/certificate.png",
      title: "Completion Certificate",
      desc: "Receive certification upon course completion.",
    },
    {
      image: "/icons/redo.png",
      title: "Reschedule Classes",
      desc: "Options available for rescheduling or makeup classes.",
    },
    {
      image: "/icons/payment.png",
      title: "Easy Payments",
      desc: "Multiple online payment options supported.",
    },
    {
      image: "/icons/one-on-one.png",
      title: "One-on-One Classes",
      desc: "Personalized one-on-one classes tailored to your goals.",
    },
    {
      image: "/icons/report.png",
      title: "Monthly Report",
      desc: "Receive a detailed monthly evaluation report of your progress.",
    },
    {
      image: "/icons/language.png",
      title: "Multi-language Support",
      desc: "Courses available in multiple languages.",
    },
  ];

  return (
    <header
      className=" relative bg-cover bg-center bg-no-repeat py-10 "
      style={{
        backgroundImage: "url('/background2.jpeg')"  // ✅ Use your background image here
      }}>

        <div className="absolute inset-0 opacity-40 z-0"></div>
      <div className="relative z-10 text-center px-4">
      
        <div
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="text-center px-4" >
        <h1 className="text-black text-xl lg:text-3xl font-bold mb-6">
          Why{" "}
          <span className="text-teal-500 font-semibold">
            Darul Ilm Quran
          </span>{" "}
          Academy
        </h1>

        <div className="flex w-full flex-wrap px-2 justify-center gap-3 lg:gap-6 mt-2 ">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center shadow-sm bg-white p-4 w-full sm:w-full md:w-[45%] lg:w-[30%] max-w-full
               hover:shadow-md hover:shadow-teal-500 shadow-teal-400"
            >
              <div className="lg:min-w-[60px] min-h-[40px] mb-2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="object-contain w-[80px]"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-black pb-2 text-lg">
                  {feature.title}
                </p>
                <p className="text-base my-2 text-black">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </header>
  );
};

export default WhyUs;
