import { MdEmail } from "react-icons/md"; // Material Design
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div style={{ fontFamily: 'adamina, sans-serif' }}  className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[180px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}      >
        <div
          className="absolute inset-0 bg-opacity-100 shadow-lg flex justify-start items-center px-4 py-2" >
          <div className="text-white ">
            <h2 className="font-bold text-xl lg:text-3xl text-white pt-4 lg:text-left px-2 lg:px-24">
              CONTACT US
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1  className=" text-2xl lg:text-5xl text-center text-black font-semibold">
          Learn the Quran Verse by Verse with Us
        </h1>
        <div className="bg-yellow-400 w-1/5  h-1 m-5 mx-auto"></div>
        <h2 className="px-2 text-xl text-center text-gray-700 ">
          Contact us by phone or complete the form, and will get in touch with
          you shortly.
        </h2>
      </div>

      {/*Contact form*/}

      <div className="flex flex-wrap justify-center gap-8 px-4 mt-10 ">
        {/* form */}
        <div className="bg-white shadow-sm shadow-teal-400 hover:shadow-lg hover:shadow-teal-500 rounded-md p-6 w-full md:w-[600px]">
          <h1 className="mb-4 text-gray-700  text-center font-semibold text-xl lg:text-2xl">
            Get Your Free
          </h1>
          <p className="text-center text-xl  mb-6 text-gray-700">
            Trial Class at Darul Ilm Online Quran Academy Now!
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="Contact No"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="Your Country"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-700 text-white py-3 rounded-md font-semibold"
            >
              Apply Now
            </button>
          </form>
        </div>

        <div className="bg-white shadow-sm rounded-md p-6 w-full md:w-[600px] shadow-teal-400 hover:shadow-lg hover:shadow-teal-500">
          <div className="border-2 border-teal-500 pb-8">
            <div className="lg:flex flex-col place-items-center ">
              <Image
                src="/usa.png"
                className="mx-4 py-2"
                alt="Pakistan Flag "
                width={50}
                height={16}
              />
              <div>
                <h2 className="text-justify lg:text-2xl text-xl font-bold   text-teal-500 ">
                  USA CONTACT
                </h2>
                <p className=" pl-2 text-lg lg:text-xl text-gray-700 font-semibold">
                  + 1 512 576 7126
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 mt-5 text-teal-500 pb-8">
            <div className="lg:flex flex-col place-items-center ">
              <Image
                src="/uk.png"
                className="mx-4 py-2"
                alt=" Flag "
                width={50}
                height={16}
              />
              <div>
                <h2 className="text-justify text-xl lg:text-2xl font-bold   text-teal-500 ">
                  UK CONTACT
                </h2>
                <p className=" pl-2 text-lg text-gray-700 font-semibold">
                  +44 7808 715763
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 mt-5 border-teal-500 pb-8">
            <div className="lg:flex flex-col pt-2 place-items-center ">
              <MdEmail className="text-teal-500 mx-2 text-4xl" />
              <div>
                <h2 className="text-center text-xl lg:text-2xl font-bold    text-teal-500 ">
                  Email
                </h2>
                <p className=" lg:pl-10 pl-2 lg:text-xl text-base text-gray-700 font-bold">
                  info@darulilmacademy.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
      </div>

      <Footer/>
    </div>
  );
}
