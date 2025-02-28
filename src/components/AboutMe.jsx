import React, { useRef, useState, useEffect } from "react";
import styles from "../style";
import { check, Me } from "../assets";
import GetStarted from "./GetStarted";
import ButtonLink from "./ButtonLink";

const AboutMe = () => {
  const linkRef = useRef(null);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleCopy = () => {
    const link = linkRef.current;

    // Select the link's text
    link.select();

    // Copy the selected text to the clipboard
    navigator.clipboard
      .writeText(link.value)
      .then(() => {
        console.log("Link copied to clipboard:", link.value);
        setIsLinkCopied(true);
        setTimeout(() => {
          setIsLinkCopied(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy link to clipboard:", error);
      });

    // Deselect the text
    link.setSelectionRange(0, 0);
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={check} alt="check" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white 20">
              Beginning of second degree IT studies
            </span>
            <br />
            Uniwersytet Przyrodniczo-Humanistyczny w siedlcach
          </p>
        </div>
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={check} alt="check" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white 20">
              Obtaining the title of IT Engineer
            </span>
            <br />
            Uniwersytet Przyrodniczo-Humanistyczny w siedlcach
          </p>
        </div>
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={check} alt="check" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white 20">Secondary school completed</span>
            <br />
            II Liceum ogólnokształcące Im. św. królowej jadwigi w siedlcach
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}
          >
            <h1
              className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white 
          ss:leading-[100px] leading-[75px] "
            >
              <span className="text-gradient">Łukasz Graczyk</span>{" "}
            </h1>
            <img
              src={Me}
              alt="my-picture"
              className="w-[40%] h-[40%] relative z-[5]"
            ></img>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"></div>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
          </div>
        </div>
        <div>
          <div className=" flex flex-row  justify-between items-center w-full ml-2">
            <ButtonLink
              onClick={handleCopy}
              text={isLinkCopied ? "Email Copied!" : "Copy email"}
              textSize={isLinkCopied ? "18" : "24"}
              styles={
                isLinkCopied
                  ? "focus:ring-2 focus:outline-none focus:ring-blue-300 w-[100%] h-[100%] text-gray-800"
                  : "focus:ring-2 focus:outline-none focus:ring-blue-300 w-[100%] h-[100%] "
              }
              sizeX="24"
              sizeY="20"
            ></ButtonLink>
            <input
              id="email"
              type="text"
              ref={linkRef}
              defaultValue="lukasz.graczyk.dev@gmail.com"
              readOnly
              style={{ width: "500px" }}
              className="px-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 w-[100%]"
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              lukasz.graczyk.dev@gmail.com
            </label>
          </div>
        </div>
        <h1
          className="flex-1 font-poppins font-semibold ss:text-[32px] text-[52px] text-white 
          ss:leading-[100px] leading-[75px] "
        >
          <br className="sm:block hidden" /> <span>Additional curses:</span>{" "}
        </h1>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          1. Java programming - Mooc.fi
        </p>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          2. Data analysis with python 2021 - mooc.fi
        </p>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
          3. CS50's Web Programming with Python and JavaScript
        </p>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default AboutMe;
