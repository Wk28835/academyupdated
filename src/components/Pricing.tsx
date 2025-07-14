import { BsCheckCircleFill } from "react-icons/bs";


const Pricing = () => {
  
  return (
    <header className="bg-white">
      
 <div className="flex flex-wrap justify-center gap-6">
          {[
            { plan: "Basic", title: "2 Class/week", price: "$47 USD", Monthly_classes: 8 },
            { plan: "Standard",title: "3 Class/week", price: "$45 USD", Monthly_classes: 12 },
            { plan: "Premium",title: "4 Class/week", price: "$79 USD", Monthly_classes: 16 },
            { plan: "Elite",title: "5 Class/week", price: "$99 USD", Monthly_classes: 20 },
          ].map((pkg, idx) => (
            <div
              key={idx}
              className="bg-gray-100 text-black w-full lg:w-[260px] rounded-md p-4 shadow"
            >
              <div className="bg-[#13B4B6] text-white">
              <h1 className=" text-xl font-semibold lg:text-2xl text-center pl-4 lg:text-center py-2 rounded">
                {pkg.plan}
              </h1>
              <p className="text-base">
                {pkg.title}
              </p>
              </div>
              <p className="lg:text-center text-center pt-6 font-bold text-xl">{pkg.price}</p>
              <p className="lg:text-center text-center py-4">Per Month</p>
              <p className="flex text-center pt-2">
                <BsCheckCircleFill className="text-[#13B4B6] w-4 mx-1 h-6" />{" "}
                {pkg.Monthly_classes} Classes per month
              </p>
              <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
              <p className="lg:text-center  text-center flex">
                <BsCheckCircleFill className="text-[#13B4B6] w-4 mx-1 h-6" /> 30
                minutes each lesson
              </p>
              
            </div>
          ))}
        </div>

    </header>
  );
};

export default Pricing;
