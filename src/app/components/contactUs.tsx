import React from "react";

function ContactUs() {
  return (
    <div className="flex max-lg:flex-col gap-4 justify-between max-md:mx-auto">
      <p className="flex-1 text-[#245866] text-xl md:text-3xl  font-semibold">
        Start your ML journey today
      </p>

      <div className="md:text-xl font-semibold flex space-x-2 md:space-x-4">
        <button className="px-4 py-2 bg-[#245866] text-white rounded-lg transition duration-300 hover:bg-teal-900">
          Sign up
        </button>
        <button className="px-4 py-2 text-[#245866] hover:text-gray-500 transition duration-300 rounded-lg border-2 border-[#245866] ">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
