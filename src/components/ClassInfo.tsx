
import Image from "next/image";

const ClassInfo = () => {
  
  return (
    <header className="bg-white">
      
  <div className="bg-white text-black shadow-md p-6 w-full md:w-[400px] rounded-md">
          <p className="text-lg mb-4">
            <b>Class Type:</b> One-one Classes
          </p>

          <p className="text-lg  mb-4">
            <b>Class Duration:</b> One-one Classes
          </p>

          <p className="text-lg  mb-4">
            <b>Course:</b> One-one Classes
          </p>

          <p className="text-lg  mb-4">
            <b>Time Period:</b> Flexible, based on the student’s availability
          </p>

          <p className="text-lg  mb-4">
            <b>Age Level:</b>Minmum 05 Years
          </p>

          <p className="text-lg  mb-4">
            <b>Gender:</b>Both Male and Female
          </p>

          <p className="text-lg  mb-4">
            <b>Language:</b>English, Urdu, Hindi, Pashto
          </p>

          <Image className="w-full" alt="image" width={400} height={50} src={"/enroll.jpg"} />
        </div>

    </header>
  );
};

export default ClassInfo;
