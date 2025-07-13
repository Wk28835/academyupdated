import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaHeadset,
  FaCertificate,
  FaRedoAlt,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaChartBar,
  FaLanguage,
} from "react-icons/fa";

const WhyUs = () => {
  const features = [
      {
        icon: <FaCalendarAlt size={40} className="text-purple-600" />,
        title: "Flexible Schedule",
        desc: "Enjoy a flexible schedule tailored to your needs",
      },
      {
        icon: <FaChalkboardTeacher size={40} className="text-blue-600" />,
        title: "Male & Female Tutors",
        desc: "Male and female tutors available to meet your learning needs.",
      },
      {
        icon: <FaHeadset size={40} className="text-pink-600" />,
        title: "24/7 Support",
        desc: "Customer support available 24/7 for your convenience..",
      },
      {
        icon: <FaCertificate size={40} className="text-yellow-600" />,
        title: "Completion Certificate",
        desc: "Receive certification upon course completion.",
      },
      {
        icon: <FaRedoAlt size={40} className="text-red-600" />,
        title: "Reschedule Classes",
        desc: "Options available for rescheduling or makeup classes.",
      },
      {
        icon: <FaMoneyCheckAlt size={40} className="text-green-600" />,
        title: "Easy Payments",
        desc: "Multiple online payment options supported.",
      },
      {
        icon: <FaUserFriends size={40} className="text-teal-600" />,
        title: "One-on-One Classes",
        desc: "Personalized one-on-one classes tailored to your goals.",
      },
      {
        icon: <FaChartBar size={40} className="text-indigo-600" />,
        title: "Monthly Report",
        desc: "Receive a detailed monthly evaluation report of your progress.",
      },
      {
        icon: <FaLanguage size={40} className="text-orange-600" />,
        title: "Multi-language Support",
        desc: "Courses available in multiple languages.",
      },
    ];
  
  return (
    <header className="bg-white shadow-md">

<div className="text-center mt-20 px-4">
        <h1 className="text-black text-3xl font-bold">
          Why <span className="text-cyan-600">Darul Ilm Online Quran</span>{" "}
          Academy
        </h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center shadow-2xl bg-white p-4 rounded-md"
            >
              <div className="mr-4">{feature.icon}</div>
              <div className="ml-4 text-start">
                <p className="font-semibold text-black text-lg">
                  {feature.title}
                </p>
                <p className="text-sm text-black">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </header>
  );
};

export default WhyUs;
