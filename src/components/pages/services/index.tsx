"use client";

import React from "react";
import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import HeaderThreeImages from "@/components/reuseables/HeaderThreeImages/HeaderThreeImages";
import TruestedBy from "@/components/reuseables/TruestedBy/TruestedBy";

import WorkingBenefits from "@/components/pages/services/workingBenefits";
import OurProcess from "@/components/pages/services/OurProcess";
import CaseStudies from "@/components/pages/services/CaseStudies/caseStudies";
import Recentwork from "@/components/pages/services/Recentwork/Recentwork";
import OurSolution from "@/components/pages/services/OurSolution";
import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";

import Testimonials from "@/components/reuseables/Testimonials/Testimonials";
import FaqSection from "./Faq";

import { pages_data } from "@/data/pages_data";
import HomeProcess from "./HomeProcess/HomeProcess";
import LuxeInAction from "./LuxeInAction";
import AttentionTodetails from "./AttentionTodetails";
import InquireNow from "./InquireNow";
import HomeRenoCases from "./CaseStudies/HoemRenoCases";

function ServicePage({ page_id }: { page_id?: string }) {
  const found_page = pages_data.find(
    (page) => `/services/${page_id}` === page?.link
  );

  return (
    <BorderedPageWrapper light_bg>
      <div className="px-padding-vertical-screen overflow-x-hidden relative">
        {/* <Navbar dark={false} /> */}
        <div className="w-full px-padding-vertical-screen left-0 mx-auto top-0 fixed z-50 bg-white sm:border-r-[5px] sm:border-l-[5px]  border-white  pb-5">
          <Navbar dark={false} />
        </div>

        <div
          className="py-[60px] pt-[50]
          sm:pt-[80px] 
          3xl:pt-[100px] mt-20 "
        >
          <HeaderTitle
            title_color="#100E10"
            title_top={`${found_page?.content?.header_title_1}`.toUpperCase()}
            title_bottom={`${found_page?.content?.header_title_2}`.toUpperCase()}
            title_bottom2={`${found_page?.content?.header_title_3}`.toUpperCase()}
            description={found_page?.content?.header_description}
            description_color="#4E4E4E"
          />
          <HeaderThreeImages
            image_1={found_page?.content?.header_image_1}
            image_2={found_page?.content?.header_image_2}
            image_3={found_page?.content?.header_image_3}
          />
        </div>
        <TruestedBy title_color="#100E10" />

        {page_id !== "luxury-home-renovation" && (
          <OurSolution
            solution_text_1={found_page?.content?.solution_text_1}
            solution_text_2={found_page?.content?.solution_text_2}
          />
        )}
      </div>

      {page_id !== "luxury-home-renovation" && (
        <>
          <Recentwork
            recent_works_top={
              found_page?.content?.recent_works_top || undefined
            }
            recent_works_bottom={
              found_page?.content?.recent_works_bottom || undefined
            }
          />

          <section className="w-full text-black  bg-white overflow-x-hidden">
            <CaseStudies
              caption_text={found_page?.content?.caseStudy?.caption_text}
              title_top={found_page?.content?.caseStudy?.title_top}
              description={found_page?.content?.caseStudy?.description}
              data={found_page?.content?.caseStudy?.data}
            />
          </section>

          <div className="px-padding-vertical-screen">
            <Testimonials
              title_color="#100E10"
              description="Recent projects reflecting our commitment to high-quality craftsmanship and exceptional results."
              description_color="#4E4E4E"
            />
            <WorkingBenefits />
          </div>

          <section className="w-full  text-white  bg-[#0F0F0F]">
            <OurProcess />
          </section>

          <div className="bg-[#0F0F0F] w-full  text-white">
            <FaqSection />
          </div>

          <section className="bg-[#0F0F0F] px-padding-vertical-screen text-white w-full">
            <MakeInquiry />
          </section>
        </>
      )}



      

      {/*__________________________________ HOME RENOVATION PAGE _____________________________________ */}
      {page_id === "luxury-home-renovation" && (
        <>
          <div className="px-padding-vertical-screen">
            <InquireNow />

            <AttentionTodetails />

            <Testimonials
              title_color="#100E10"
              description="Recent projects reflecting our commitment to high-quality craftsmanship and exceptional results."
              description_color="#4E4E4E"
            />
          </div>

          <section className="w-full text-black  bg-white overflow-x-hidden">
            <HomeRenoCases
              caption_text={found_page?.content?.caseStudy?.caption_text}
              title_top={found_page?.content?.caseStudy?.title_top}
              description={found_page?.content?.caseStudy?.description}
              data={found_page?.content?.caseStudy?.data}
            />
          </section>

          <section className="bg-[#0F0F0F] w-full text-white px-padding-vertical-screen">
            <HomeProcess />
          </section>

          <section className="bg-[#0F0F0F] w-full text-white px-padding-vertical-screen">
            <LuxeInAction />
          </section>

          <div className="bg-[#0F0F0F] w-full  text-white">
            <FaqSection />
          </div>

          <section className="bg-[#0F0F0F] px-padding-vertical-screen text-white w-full">
            <MakeInquiry />
          </section>
        </>
      )}

      {/* <section className="text-black w-full px-5 md:px-10 xl:px-16">
        <ExquisiteElegance />
      </section> */}

      <footer className="w-full px-5 pt-20 md:px-10 bg-[#0F0F0F] ">
        <Footer   />
      </footer>
    </BorderedPageWrapper>
  );
}

export default ServicePage;


 