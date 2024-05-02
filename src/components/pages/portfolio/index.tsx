"use client";

import NavBar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";

import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";

import styles from "./styles.module.css";
import HeroSection from "./heroSection";
import MainSection from "./mainSection";
// import MainSection from "./mainSection";

const Homepage = () => {
  return (
    <>
      <BorderedPageWrapper>
        <div className={styles.home_container}>
          {/* <NavBar dark={true} /> */}
          <div className="w-full px-padding-vertical-screen left-0 mx-auto top-0 fixed z-50  bg-[#0e0e0e] sm:border-r-[5px]  sm:border-t-[5px]  sm:border-l-[5px]  border-white  pb-5">
            <NavBar dark={true}  />
          </div>


          <HeroSection />
          <MainSection />
          <MakeInquiry />
          <Footer />
        </div>
      </BorderedPageWrapper>
    </>
  );
};

export default Homepage;
