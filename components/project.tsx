import Link from "next/link";
import Image from "next/image";
import { ImDownload } from "react-icons/Im";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-16">
            {/* Projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../public/assests/project/facebook.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    FaceBook Login
                  </h2>
                  <p className="leading-relaxed ">FaceBook UI</p>
                  <a href="/assests/project/facebook.png" target="_blank">
                    <p className="leading-relaxed text-blue-500 mt-2 text-right hover:underline mr-2">
                      View Project..
                    </p>
                  </a>
                </div>
              </div>
            </div>


            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                {/* <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../public/assests/project/facebook.png")}
                /> */}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Portfolio
                  </h2>
                  <p className="leading-relaxed ">My Portfolio</p>
                  <a href="/" target="_blank">
                    <p className="leading-relaxed text-blue-500 mt-2 text-right hover:underline mr-3">
                      View
                    </p>
                  </a>
                </div>
              </div>
            </div>


            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
