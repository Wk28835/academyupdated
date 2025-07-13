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
    <header className="bg-white shadow-md">
      <div className="text-center mt-20 px-4">
        <h1 className="text-black text-2xl lg:text-3xl font-bold">
          Why <span className="text-[#1AB0BA] font-semibold">Darul Ilm Online Quran</span> Academy
        </h1>

       <div className="flex flex-wrap justify-center gap-6 mt-10">
  {features.map((feature, i) => (
    <div
      key={i}
      className="flex items-center shadow-2xl bg-white p-2 rounded-md w-full sm:w-[100%] md:w-[45%] lg:w-[30%] max-w-xs"
    >
      <div className=" min-w-[40px] min-h-[40px]">
        <Image
          src={feature.image}
          alt={feature.title}
          width={100}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="ml-4 text-start">
        <p className="font-medium text-black pb-4 text-base">{feature.title}</p>
        <p className="text-sm  text-black">{feature.desc}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </header>
  );
};

export default WhyUs;
