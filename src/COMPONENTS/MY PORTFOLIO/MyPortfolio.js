import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div className="w-[50%] mx-auto">
        <div className="flex justify-center">
          <img
            className="w-[120px] object-contain"
            src="P-59302-1.jpg"
            alt=""
          />
        </div>
        <div className="mt-[1rem] flex flex-col items-center">
          <table>
            <p className="text-[1.2rem] text-center lg:text-2xl font-[600]">
              Arafat Hossan Lisan
            </p>
            <p className="lg:text-2xl font-[600]">
              Email: arafatsarkar22@gmail.com
            </p>
            <p className="lg:text-2xl font-[600]">Education: B.Sc (Hons.) </p>
          </table>
          <p>
            Skills: <span>HTML5</span>, <span>CSS</span>, <span>Bootstrap</span>
            , <span>Tailwind</span>, <span>JavaScript</span>, <span>React</span>
            , <span>Node JS</span>, <span>Express JS</span>,{" "}
            <span>Mongo DB</span>
          </p>
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-[3rem]">
        <h1 className="text-3xl font-bold text-center mt-[2rem] mb-[1rem]">My Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] lg:gap-[.5rem]">
          <div className="shadow-lg">
            <div className="flex justify-center">
              <img
                className="w-[300px] h-[300px] object-cover object-top"
                src="lasnmart.png"
                alt=""
              />
            </div>
            <a href="https://lsn-mart.web.app/">
              <button className="bg-lightBlue w-full py-[.5rem]">
                Live Link
              </button>
            </a>
          </div>
          <div className="shadow-lg">
            <div className="flex justify-center">
              <img
                className="w-[300px] h-[300px] object-cover object-top"
                src="xpixel.png"
                alt=""
              />
            </div>
            <a href="https://x-pixel-demo.web.app/">
              <button className="bg-lightBlue w-full py-[.5rem]">
                Live Link
              </button>
            </a>
          </div>
          <div className="shadow-lg">
            <div className="flex justify-center">
              <img
                className="w-[300px] h-[300px] object-cover object-top"
                src="amazonclone.png"
                alt=""
              />
            </div>
            <a href="https://e-commerce37.netlify.app">
              <button className="bg-lightBlue w-full py-[.5rem]">
                Live Link
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
