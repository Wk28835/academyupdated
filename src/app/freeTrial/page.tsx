import Footer from "@/components/Footer";
import FreeTrial from "@/components/FreeTrial";


export default function FreeTrialForm() {
  return (

    <div>
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[180px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-100 shadow-lg flex justify-start items-center px-4 py-2">
          <div className="text-white ">
            <h2 className="font-bold text-2xl  lg:text-3xl text-white pt-4 lg:text-left px-2 lg:px-24">
              Free Trial
            </h2>
          </div>
        </div>
      </div>

      {/* Register Now */}
      
    </div>

    <div className="">
      
      <FreeTrial/>
  </div>
    

        <Footer/>
    </div>
  );
}
