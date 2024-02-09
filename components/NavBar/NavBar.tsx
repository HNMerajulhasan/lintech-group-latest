import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="absolute flex items-center justify-between p-10 w-full z-10" data-aos="fade-down">
      {/* logo */}
      <div className="absolute top-10 w-14 h-14 left-4  lg:w-16 lg:h-16">
        {/* <a href="/">
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 60.0371C46.5652 60.0371 60 46.6117 60 30.0371C60 13.4625 46.5652 0.0371094 30 0.0371094C13.4348 0.0371094 0 13.4625 0 30.0371C0 46.6117 13.4348 60.0371 30 60.0371ZM15.1902 35.6029L19.4911 9.18965L25.8292 16.5129C27.3329 18.0928 29.548 19.3106 32.7009 19.36H35.7406C35.9831 19.3435 36.2256 19.3435 36.4519 19.3435H36.452C45.1507 19.3435 48.2713 23.6717 46.5413 34.3357C45.1346 43.0085 39.5887 48.6038 32.0541 48.8507H30.8253H25.6998C16.322 48.8507 14.3009 42.5641 15.1902 35.6029ZM36.8655 34.1049C36.2242 38.0439 33.6587 40.7151 30.4013 40.7151C27.2452 40.7151 25.4899 38.027 26.1312 34.1049C26.7726 30.1658 29.3886 27.4947 32.5448 27.4947C35.8191 27.4947 37.5069 30.1658 36.8655 34.1049Z"
              fill=" #D62E49"
            ></path>
          </svg>
        </a> */}
        <Image src='/images/luxe-01.svg' alt="logo" width={100} height={100}/>
      </div>



      
 




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
