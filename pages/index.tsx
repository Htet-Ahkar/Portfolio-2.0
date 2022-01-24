import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-bg text-secondaryText p-5 
      md:my-[-3rem]
    dark:bg-dark-bg dark:text-dark-secondaryText"
    >
      {/* Card */}
      <div
        className="w-full py-5 px-2 flex flex-col justify-center items-center shadow-lg rounded-lg
      dark:shadow-none dark:border dark:border-white
      sm:w-7/12
      md:w-11/12 md:flex-row
      lg:w-8/12
      "
      >
        {/* Image Container */}
        <div className="w-full flex justify-center items-center">
          <div
            className="w-60 h-60 relative
          lg:w-80 lg:h-80"
          >
            <Image
              src="/Me.jpg"
              layout="fill"
              objectFit="contain"
              alt="htet_ahkar"
              className="rounded-3xl
              lg:rounded-full"
            />
          </div>
        </div>
        {/* Text Boxs */}
        <div className="flex flex-col gap-5 justify-center items-center w-full py-5">
          {/* Box-1 */}
          <div className="w-full animate-bounce">
            <svg
              width="150"
              height="89"
              viewBox="0 0 150 89"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary
              dark:fill-dark-primary"
            >
              <g clipPath="url(#clip0_7771_494)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4907 0H134.497C138.757 0 142.639 1.74561 145.435 4.55322L145.593 4.72412C148.315 7.51953 149.988 11.3281 149.988 15.5029V55.0903C149.988 59.3506 148.254 63.2568 145.447 66.0889C142.651 68.8965 138.794 70.6421 134.497 70.6421H28.5645L4.37012 87.8418C3.125 88.7207 1.40381 88.4399 0.512695 87.1948C0.170898 86.7065 0 86.145 0 85.5957H0V15.4907C0 11.2305 1.74561 7.36084 4.55322 4.55322L4.56543 4.54102C7.37305 1.74561 11.2427 0 15.4907 0ZM53.1982 17.5293V51.123H44.4458V37.0239H41.8945V51.123H33.1421V17.5293H41.8945V29.5532H44.4458V17.5293H53.1982V17.5293ZM75.4517 37.8296H64.5752V43.7988C64.5752 45.0439 64.6729 45.8496 64.8437 46.2158C65.0269 46.582 65.3809 46.7529 65.8936 46.7529C66.5405 46.7529 66.9678 46.5088 67.1875 46.0327C67.4072 45.5566 67.5171 44.6289 67.5171 43.2495V39.6118H75.4639V41.6504C75.4639 43.3594 75.354 44.6655 75.1465 45.5811C74.9268 46.4966 74.4263 47.4731 73.6328 48.5107C72.8516 49.5483 71.8384 50.3296 70.6299 50.8545C69.4214 51.3672 67.9077 51.6357 66.0767 51.6357C64.3066 51.6357 62.7441 51.3794 61.3892 50.8667C60.0342 50.354 58.9844 49.6582 58.2275 48.7671C57.4707 47.876 56.958 46.8872 56.665 45.813C56.3721 44.7388 56.2256 43.1885 56.2256 41.1377V33.1055C56.2256 30.7007 56.5552 28.7964 57.2021 27.4048C57.8491 26.0132 58.9111 24.9512 60.4004 24.2065C61.8896 23.4619 63.5864 23.0957 65.5151 23.0957C67.8711 23.0957 69.7998 23.5474 71.3379 24.4385C72.8638 25.3296 73.938 26.5137 74.5605 27.9907C75.1709 29.4556 75.4761 31.5308 75.4761 34.2041V37.8296H75.4517ZM67.0898 33.374V31.3599C67.0898 29.9316 67.0166 29.0161 66.8579 28.6011C66.6992 28.186 66.3818 27.9785 65.9058 27.9785C65.3076 27.9785 64.9414 28.1494 64.8071 28.5156C64.6606 28.8696 64.5996 29.8218 64.5996 31.3721V33.3862H67.0898V33.374ZM86.8042 17.5293V51.123H78.186V17.5293H86.8042ZM98.4375 17.5293V51.123H89.8193V17.5293H98.4375ZM120.398 33.2642V40.0146C120.398 42.4927 120.276 44.2993 120.02 45.459C119.775 46.6187 119.238 47.6929 118.433 48.6938C117.615 49.6948 116.565 50.4395 115.295 50.9155C114.014 51.3916 112.549 51.6357 110.889 51.6357C109.033 51.6357 107.459 51.4282 106.177 51.0254C104.883 50.6104 103.894 50 103.186 49.1821C102.466 48.3521 101.965 47.3511 101.66 46.1914C101.355 45.0195 101.209 43.2739 101.209 40.9302V33.8745C101.209 31.311 101.489 29.3213 102.039 27.8687C102.588 26.4282 103.589 25.2808 105.029 24.4019C106.47 23.5352 108.301 23.0957 110.547 23.0957C112.427 23.0957 114.038 23.3765 115.393 23.938C116.736 24.4995 117.773 25.2319 118.518 26.123C119.25 27.0264 119.751 27.9541 120.02 28.9063C120.264 29.8584 120.398 31.311 120.398 33.2642ZM112.036 31.189C112.036 29.7852 111.963 28.894 111.804 28.5278C111.646 28.1616 111.328 27.9785 110.815 27.9785C110.315 27.9785 109.985 28.1616 109.814 28.5278C109.656 28.894 109.57 29.7852 109.57 31.189V43.6157C109.57 44.9219 109.656 45.7642 109.814 46.1548C109.985 46.5454 110.315 46.7529 110.803 46.7529C111.304 46.7529 111.633 46.5698 111.792 46.2158C111.951 45.8496 112.036 45.0806 112.036 43.8965V31.189V31.189Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_7771_494">
                  <rect width="150" height="88.3423" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* Box-2 */}
          <div className="w-full flex justify-center gap-10">
            <span
              className="flex justify-center items-center text-2xl font-bold 
            md:mr-10"
            >
              I'm
            </span>
            <div
              className=" flex justify-center items-center text-xl font-medium bg-primary text-primaryText py-3 px-5 rounded-xl
            dark:bg-dark-primary dark:text-dark-primaryText
            "
            >{`Htet Ahkar(Xero)`}</div>
          </div>
          {/* Box-3 */}
          <div className="w-full text-2xl font-bold leading-tight text-left underline decoration-rose-600">
            A Self-taught Programmer
          </div>
          {/* Box-4 */}
          <div className="w-full flex justify-start gap-8">
            <span className="flex justify-center items-center text-2xl font-bold ml-10">
              From
            </span>
            <div
              className=" flex justify-center items-center text-2xl font-bold bg-primary text-primaryText py-3 px-5 rounded-xl
            dark:bg-dark-primary dark:text-dark-primaryText
            "
            >{`Myanmar`}</div>
          </div>
          {/* Box-5 */}
          <div className="w-full text-2xl font-bold leading-tight text-left">
            Who likes to build
          </div>
          {/* Box-6 */}
          <div className="w-full flex justify-start gap-1">
            <div
              className="flex justify-center items-center text-lg font-semibold bg-primary text-primaryText py-3 px-5 rounded-xl
            dark:bg-dark-primary dark:text-dark-primaryText
            "
            >
              Simple, yet
              <br />
              Elegant.
              <br />
              User-friendly
              <br />
              but Functional
            </div>
            <span className="flex justify-center items-end text-xs font-bold">
              Websites and Applications.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
