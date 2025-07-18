
import Footer from "@/components/Footer";
import Pricing from "../../components/Pricing";

export default function Price() {
  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[180px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-100 shadow-lg flex justify-start items-center
 px-4 py-2">
          <div className="text-white ">
            <h2 className="font-bold text-2xl  lg:text-3xl text-white pt-4 lg:text-left px-2 lg:px-24">
              PRICING
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {/*packages section */}
        <div className=" px-4 text-center">
          <Pricing />
        </div>

       <Footer/>
      </div>
    </div>
  );
}
