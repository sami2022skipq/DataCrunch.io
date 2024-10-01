import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-between">
      <p className="flex-1 text-[#245866] text-3xl font-semibold">
        Start your ML journey today
      </p>

      <div className="text-xl font-semibold">
        <button className="px-4 py-2 bg-[#245866] text-white rounded-lg transition duration-300 hover:bg-teal-900">
          Sign up
        </button>
        <button className="px-4 py-2 text-[#245866] hover:text-gray-400 transition duration-300 rounded-lg border-2 ">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
