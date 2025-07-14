const JoinForm = () => {
  return (
    <div className="bg-white px-2 py-6 flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#1AB0BA]">
            Register Now
          </h2>
          <p className="text-xl text-gray-600 mt-1">
           Join Darul Ilm Online Quran Academy learning!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 border-5 py-2 border-[#1AB0BA] px-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md p-3"
            required
          />

          <input
            type="number"
            placeholder="Student Age"
            className="w-full border border-gray-300 rounded-md p-3"
            required
          />

          {/* Gender */}
          <div>
            <p className="mb-2 text-lg font-medium text-gray-700">Gender</p>
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
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="accent-[#1AB0BA]"
                  required
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Country */}
          <select
            className="w-full border border-gray-300 rounded-md p-3"
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

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md p-3"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md p-3"
            required
          />

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

export default JoinForm;
