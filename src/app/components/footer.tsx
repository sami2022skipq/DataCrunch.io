import Image from "next/image";
import dataCrunchLogo from "@/assets/dataCrunchIO.svg";

const Footer = () => {
  return (
    <footer className=" w-full  bg-[#f5f9f9]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row   md:justify-between space-x-4 max-md:text-center  space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="space-y-2 md:w-1/5 max-md:mx-auto">
            <Image
              src={dataCrunchLogo}
              alt="DataCrunch.io Logo"
              className="w-60 object-cover cursor-pointer"
            />

            <p className="text-gray-600">Premium GPU servers & clusters</p>
            <p className="text-gray-600">Model inference services</p>
          </div>

          {/* GPU Products */}
          <div className="md:w-1/5 ">
            <h3 className="text-lg font-semibold text-gray-800">
              GPU Products
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>GPU Clusters</li>
              <li>GPU Cloud</li>
              <li>H100 SXM5</li>
              <li>H200 SXM5</li>
              <li>A100 SXM4</li>
              <li>GB200</li>
            </ul>
          </div>

          {/* Inference */}
          <div className="md:w-1/5 ">
            <h3 className="text-lg font-semibold text-gray-800">Inference</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Serverless Inference</li>
              <li>ML Pipeline Builder</li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:w-1/5 ">
            <h3 className="text-lg font-semibold text-gray-800">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Contact Us</li>
              <li>Jobs</li>
              <li>Career</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:w-1/5 ">
            <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Blog</li>
              <li>Docs</li>
              <li>API</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
