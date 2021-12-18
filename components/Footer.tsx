import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-primaryText bg-primary pb-5 dark:bg-dark-primary dark:text-dark-primaryText md:grid md:grid-cols-3 md:grid-rows-2 md:h-52">
      {/* Header */}
      <div>
        <div className="h-20 w-full flex justify-center items-center">
          <h1 className="text-5xl font-bold">Xero</h1>
        </div>
      </div>
      {/* Contact Me */}
      <div className="md:col-start-3">
        {/* Contact Me Header */}
        <div className="w-full h-12 flex justify-center items-center">
          <h1 className="text-2xl font-semibold">Contact Me</h1>
        </div>
        {/* Contact Me Components */}
        <div className="text-base font-medium flex flex-col justify-center items-center gap-2 py-4">
          <p>
            <Link href="mailto:htetahkar.htetahkar@gmail.com">
              Email: htetahkar.htetahkar@gmail.com
            </Link>
          </p>
          <p>
            <Link href="tel:+959-969825073">Phone : +959-969825073</Link>
          </p>
        </div>
      </div>
      {/* Social Media */}
      <div className="flex flex-col justify-start items-center py-4 md:col-start-2 md:row-start-1">
        <h1 className="text-2xl font-semibold">Social Media</h1>
        <li className="list-none text-lg pt-4 flex flex-col items-start">
          <ul>
            <a
              className="flex justify-center items-center"
              href="https://www.facebook.com/htet.ahkar/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="mx-3 w-6"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <span>Facebook</span>
            </a>
          </ul>
          <ul>
            <a
              className="flex justify-center items-center"
              href="https://github.com/Htet-Ahkar"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="mx-3 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
          </ul>
          <ul>
            <a
              className="flex justify-center items-center"
              href="https://discordapp.com/users/850190076079505409/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="mx-3 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
              <span>Discord</span>
            </a>
          </ul>
        </li>
      </div>
      {/* Copyright */}
      <span className="text-center text-sm md:flex md:justify-center md:items-center">
        <p>Copyright All rights reserved © 2021 HtetAhkar(Xero)</p>
      </span>
    </div>
  );
};

export default Footer;
