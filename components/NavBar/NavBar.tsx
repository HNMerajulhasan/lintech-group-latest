import Image from "next/image";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="absolute flex items-center justify-between p-10 w-full z-10" data-aos="fade-down">
      <Link href={'/'}>
      <div className="absolute top-10 w-24 h-24 md:w-[10rem] h-[30rem] left-4 lg:left-8  lg:w-[30rem] lg:h-[30vh">
        <Image src='/images/logo.svg' alt="logo" width={160} height={160}/>
      </div>
      </Link>
     
 



      
 




      {/* hamburger */}
      <div className="right-4 md:right-20 top-10 absolute h-[5px]  lg:w-30 md:h-30 cursor-pointer">
        <svg
          width="30"
          height="61"
          viewBox="0 0 30 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1490_325)">
            <path
              className="lineA"
              d="M5.07 11 C5.07 27.33 5.07 43.66 5.07 60 "
              stroke="#EEEEF2"
              stroke-width="2"
              data-original="M5.07849 11V60"
            ></path>
            <path
              className="lineB"
              d="M15.07 16 C15.07 25.66 15.07 35.33 15.07 45 "
              stroke="#EEEEF2"
              stroke-width="2"
              data-original="M15.0785 16V45"
            ></path>
            <path
              className="lineC"
              d="M25.07 1 C25.07 17.33 25.07 33.66 25.07 50 "
              stroke="#EEEEF2"
              stroke-width="2"
              data-original="M25.0784 1V50"
            ></path>
            <path
              className="pointA"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.07 11 C6.38 10.14 7.69 9.29 9 8.44 9 6.83 9 5.22 9 3.61 7.69 2.74 6.38 1.87 5.07 1 3.74 1.87 2.41 2.74 1.07 3.61 1.05 5.22 1.02 6.83 1 8.44 2.35 9.29 3.71 10.14 5.07 11 "
              stroke="#EEEEF2"
              stroke-width="2"
              data-original="M5.07843 11L9 8.4482L9 3.61273L5.07843 1L1.07843 3.61273L1 8.4482L5.07843 11Z"
            ></path>
            <path
              className="pointB"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.07 60 C26.38 59.14 27.69 58.29 29 57.44 29 55.83 29 54.22 29 52.61 27.69 51.74 26.38 50.87 25.07 50 23.74 50.87 22.41 51.74 21.07 52.61 21.05 54.22 21.02 55.83 21 57.44 22.35 58.29 23.71 59.14 25.07 60 "
              stroke="#EEEEF2"
              stroke-width="2"
              data-original="M25.0784 60L29 57.4482V52.6127L25.0784 50L21.0784 52.6127L21 57.4482L25.0784 60Z"
            ></path>
          </g>
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;
