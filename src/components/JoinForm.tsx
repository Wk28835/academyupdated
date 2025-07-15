const JoinForm = () => {
  return (
    <div className="bg-white px-2 py-2 lg:py-6 flex justify-center items-center">
      <div className="w-full lg:max-w-xl">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#1AB0BA]">Register Now</h2>
          <p className="text-xl text-gray-600 mt-1">
            Join Darul Ilm Online Quran Academy learning!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 border-5 py-2 border-[#1AB0BA] px-2">
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
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="UAE">UAE</option>
            <option value="Qatar">Qatar</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Malaysia">Malaysia</option>
            <option value="South Africa">South Africa</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Turkey">Turkey</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Egypt">Egypt</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Algeria">Algeria</option>
            <option value="Argentina">Argentina</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Denmark">Denmark</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Ghana">Ghana</option>
            <option value="Iraq">Iraq</option>
            <option value="Iran">Iran</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kenya">Kenya</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Morocco">Morocco</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Palestine">Palestine</option>
            <option value="Philippines">Philippines</option>
            <option value="Russia">Russia</option>
            <option value="Somalia">Somalia</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Thailand">Thailand</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Yemen">Yemen</option>
            <option value="Zimbabwe">Zimbabwe</option>
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
