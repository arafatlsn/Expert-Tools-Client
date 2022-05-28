import { Footer } from "flowbite-react";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import logoImg from '../../Assets/expert-logo.jpg'

const FooterComp = () => {
  return (
    <Footer className="flex flex-col mt-[5rem] bg-[#EEEEEE]">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="flex items-center mb-[2.5rem]">
          <img className="w-[60px] object-contain mr-3" src={logoImg} alt="" />
          <h1 className="text-[1.5rem] font-bold">EXPERT TOOLS</h1>
        </div>
        <div className="w-[70%] grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              About
            </h2>
            <Footer.LinkGroup className="flex-col">
              <Footer.Link className="mb-4" href="#">
                Flowbite
              </Footer.Link>
              <Footer.Link className="mb-4" href="#">
                Tailwind CSS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Follow us
            </h2>
            <Footer.LinkGroup className="flex-col">
              <Footer.Link className="mb-4" href="#">
                Gihub
              </Footer.Link>
              <Footer.Link className="mb-4" href="#">
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Legal
            </h2>
            <Footer.LinkGroup className="flex-col">
              <Footer.Link className="mb-4" href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link className="mb-4" href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsFacebook}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsInstagram}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsTwitter}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsGithub}
          />
          <Footer.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsDribbble}
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
