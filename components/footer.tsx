import Link from "next/link";
import { BsTwitter, BsYoutube, BsWhatsapp } from "react-icons/bs";
const footer = () => {
  return (
    <div className="bg-blue-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
         
            {/* <span className="ml-3 text-xl">In Touch</span> */}
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 .All Rigths Reserved
            {/* <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @knyttneve
      </a> */}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
            target="_blank"
              href="https://twitter.com/zohaibj50926545"
              className="text-gray-500"
            >
              <BsTwitter className="text-3xl ml-3 hover:text-blue-400 " />
            </Link>
            <Link
            target="_blank"
              href="https://www.youtube.com/channel/UCY5szyPvmWog62q5bDdqxVg"
              className="text-gray-500"
            >
              <BsYoutube className="text-3xl ml-3 hover:text-red-500 " />
            </Link>
            <Link
            target="_blank"
              href="" className="text-gray-500">
              <BsWhatsapp className="text-3xl ml-3 hover:text-green-800 " />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default footer;
