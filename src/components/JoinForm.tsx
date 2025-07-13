
const JoinForm = () => {
  
  return (
    <header className="bg-white">
       <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Contact No"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Your Country"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md font-semibold"
            >
              Apply Now
            </button>
          </form>
 

    </header>
  );
};

export default JoinForm;
