const FreeTrial = () => {
  return (
    <div className="bg-white  py-8 flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#1AB0BA]">
            Free Trial Form
          </h2>
          <p className="text-sm text-gray-600 mt-1">
           Enjoy 1-Day Free Trial – No Obligation, Just Learning!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 mx-2 rounded-md shadow-2xl">
          <div className="px-2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b px-2 border-gray-700 focus:border-[#1AB0BA] focus:outline-none p-3"
            required
          />
          </div>
        <div className="px-2">
          <input
            type="number"
            placeholder="Student Age"
            className="w-full border-b px-2 border-gray-700 focus:border-[#1AB0BA] focus:outline-none p-3"
            required
          />
          </div>

          {/* Gender */}
          <div className="px-2">
            <p className="mb-2 text-sm font-medium text-gray-700">Gender</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="accent-[#1AB0BA]"
                  required
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-1">
              <div className="px-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="accent-[#1AB0BA]"
                  required
                />
               </div> 
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Country */}
         <div className="px-2"> 
          <select
            className="w-full border-b px-2 border-gray-700 focus:border-[#1AB0BA] focus:outline-none p-3"
            defaultValue=""
            required
          >
          
            <option value="" disabled>
              Select Country
            </option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Other">Other</option>
          </select>
          </div>
 <div className="px-2">

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border-b px-2 border-gray-700 focus:border-[#1AB0BA] focus:outline-none p-3"
            required
          />
          </div>
          <div className="px-2">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b px-2 border-gray-700 focus:border-[#1AB0BA] focus:outline-none p-3"
            required
          />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1AB0BA] hover:bg-cyan-700 text-white py-3 rounded-md font-semibold"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreeTrial;
