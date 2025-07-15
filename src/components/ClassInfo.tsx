import Image from "next/image";

const ClassInfo = () => {
  return (
    <header className="bg-white">
      <div
        style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
        className="bg-white text-black shadow-md p-6 w-full md:w-[400px] rounded-md"
      >
        <p className="text-lg mb-4">
          <span className="font-semibold"> Class Type:</span> One-on-One Classes
        </p>

        <p className="text-lg  mb-4">
          <span className="font-semibold">Class Duration:</span> 30 Minutes Per
          Student
        </p>

        <p className="text-lg  mb-4">
          <span className="font-semibold">Time Period:</span> Flexible, based on
          the student’s availability
        </p>

        <p className="text-lg  mb-4">
          <span className="font-semibold">Age Level:</span>Minmum 05 Years
        </p>

        <p className="text-lg  mb-4">
          <span className="font-semibold">Gender:</span>Both Male and Female
        </p>

        <p className="text-lg  mb-4">
          <span className="font-semibold">Language:</span>English, Urdu, Hindi,
          Pashto
        </p>

        <Image
          className="w-full"
          alt="image"
          width={400}
          height={50}
          src={"/enroll.jpg"}
        />
      </div>
    </header>
  );
};

export default ClassInfo;
