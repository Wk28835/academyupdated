
import Pricing from "../../components/Pricing";

export default function Price() {
  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-100 shadow-lg flex justify-start items-center
 px-4 py-2">
          <div className="text-white ">
            <h2 className="font-bold  text-3xl text-white pt-4 lg:text-left px-2 lg:px-24">
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

        <div className="pt-10">
          <h1 className="text-center text-xs text-gray-500 ">
            Copyright © 2025 Darul Quran Academy |
          </h1>
        </div>
      </div>
    </div>
  );
}
