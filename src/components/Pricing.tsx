import { BsCheckCircleFill } from "react-icons/bs";


const Pricing = () => {
  
  return (
    <header className="bg-white">
      
 <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "2 days/week", price: "$39 / £25 / $45 CAD", lessons: 8 },
            { title: "3 days/week", price: "$49 / £35 / $55 CAD", lessons: 12 },
            { title: "4 days/week", price: "$59 / £42 / $65 CAD", lessons: 16 },
            { title: "5 days/week", price: "$69 / £49 / $75 CAD", lessons: 20 },
          ].map((pkg, idx) => (
            <div
              key={idx}
              className="bg-gray-100 text-black w-full lg:w-[260px] rounded-sm p-4 shadow"
            >
              <h1 className="bg-[#13B4B6] text-white text-xl font-semibold lg:text-2xl text-start pl-4 lg:text-center py-3 rounded">
                {pkg.title}
              </h1>
              <p className="lg:text-center text-start pt-6 font-bold text-xl">{pkg.price}</p>
              <p className="lg:text-center text-start py-4">Per Month</p>
              <p className="lg:text-start  text-start flex">
                <BsCheckCircleFill className="text-[#13B4B6] w-4 mx-1 h-6" /> 30
                minutes each lesson
              </p>
              <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
              <p className="flex text-start pt-2">
                <BsCheckCircleFill className="text-[#13B4B6] w-4 mx-1 h-6" />{" "}
                {pkg.lessons} lessons per month
              </p>
            </div>
          ))}
        </div>

    </header>
  );
};

export default Pricing;
