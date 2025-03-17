"use client";

import NavBar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import HeaderThreeImages from "@/components/reuseables/HeaderThreeImages/HeaderThreeImages";
import TruestedBy from "@/components/reuseables/TruestedBy/TruestedBy";
import RenovationServices from "@/components/reuseables/RenovationServices";
import HomepageLuxuryBrands from "./homepage_luxury_brands";
import HomepagePastProjects from "./homepage_past_projects";
import HomepageOurProcess from "./homepage_our_process";
import Testimonials from "@/components/reuseables/Testimonials/Testimonials";
import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";

import styles from "./styles.module.css";

const Homepage = () => {
  return (
    <>
      <BorderedPageWrapper>
        <div className={styles.home_container}>
          <div className="w-full px-padding-vertical-screen left-0 mx-auto top-0 fixed z-50  bg-[#0e0e0e] sm:border-t-[5px]   sm:border-r-[5px] sm:border-l-[5px]  border-white  pb-5">
            <NavBar />
          </div>



          <div
            className="py-py-[60px] pt-[50px]
            mt-20
            sm:pt-[80px] 
            3xl:pt-[100px]
            "
          >
            <HeaderTitle
              title_color="#fff"
              title_font="font-tt-tunnels"
              title_top="WE DRIVE YOUR"
              title_bottom="REVENUE GROWTH"
              description="Discover the pinnacle of digital excellence with Lintech Group. Here, we craft bespoke marketing strategies and pioneering digital products designed to propel your business into a realm of  growth and efficiency. Our commitment is to turn your aspirations into tangible successes, ensuring that every digital touchpoint is an opportunity to captivate and convert."
              description_color="#a9a9a9"
            />
            <HeaderThreeImages
              image_1={"/lintech-group-imgaes/banner-img1.jpg"}
              image_2={"/lintech-group-imgaes/banner-img2.jpg"}
              image_3={"/lintech-group-imgaes/banner-img-3.jpg"}
            />
          </div>
          <TruestedBy title_color="#ffffff" />

          <RenovationServices />
        </div>
        <HomepageLuxuryBrands />
        <div className={styles.home_container}>
          <HomepagePastProjects />
        </div>
        <div className={styles.home_container} style={{ overflowX: "hidden" }}>
          <HomepageOurProcess />
          <Testimonials description_color="#A9A9A9" />
          <MakeInquiry />
          <Footer />
        </div>
      </BorderedPageWrapper>
    </>
  );
};

export default Homepage;
