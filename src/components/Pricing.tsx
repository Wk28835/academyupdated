const Pricing = () => {
  return (
    <header className="bg-white">
      <div className="flex flex-wrap lg:px-0 px- justify-center gap-6">
        {[
          {
            plan: "Basic Plan",
            title: "2 Class /week",
            price: "$47",
            Monthly_classes: 8,
          },
          {
            plan: "Standard Plan",
            title: "3 Class /week",
            price: "$45",
            Monthly_classes: 12,
          },
          {
            plan: "Premium Plan",
            title: "4 Class /week",
            price: "$79",
            Monthly_classes: 16,
          },
          {
            plan: "Elite Plan",
            title: "5 Class /week",
            price: "$99",
            Monthly_classes: 20,
          },
        ].map((pkg, idx) => (
          <div
            key={idx}
            className="bg-teal-600 text-white w-full  lg:w-[260px] rounded-md p-3 shadow"
          >
            <div className=" text-white">
              <h1 className=" text-xl font-semibold lg:text-2xl text-center lg:text-center rounded">
                {pkg.plan}
              </h1>
              <div className="bg-teal-400 mt-2 w-full h-2"></div>
            </div>
            <p className="lg:text-center text-center py-4  font-bold text-2xl">
              {pkg.price}
              <span className="text-base">/Month</span>
            </p>
            <p className="text-base">{pkg.title}</p>
            <p className=" text-center">{pkg.Monthly_classes} Classes /Month</p>
            <p className="lg:text-center  text-center "> 30 minutes Duration</p>

            <div className="place-items-center">
              <div className="bg-teal-500 mt-2 w-full h-0.5"></div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Pricing;
