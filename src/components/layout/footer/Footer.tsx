"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants";
import call_white from "@/assets/icons/call_white.svg";
import whatsapp_white from "@/assets/icons/whatsapp_white.svg";
import { quickLinks } from "./data";
import { useWindowSize } from "@react-hook/window-size";

function Footer() {
  const [windowWidth] = useWindowSize();
  return (
    <footer className={styles.footer_container}>
      <main className={styles.footer_inner}>
        <div>
          <Link href={"/"}>
            <Image
              src="/lintech-group-icon/litech_group_logo.svg"
              alt="logo"
              width={300}
              height={100}
              className={styles.logo}
            />
          </Link>

          <h4 className={styles.title_1}>Find Us On Social Media</h4>
          <div className={styles.socials}>
            {socialLinks.map((socail, idx) => (
              <Link href={socail.url} key={`${idx}`}>
                <Image src={socail.img} alt={socail.label} />
              </Link>
            ))}
          </div>

          <h4 className={styles.title_1}>Our Info</h4>
          <div className={styles.our_info}>
            <div>
              <Image src={call_white} alt={call_white} />
              <span>
                <a href="tel:02038369086">020 3836 9086</a>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="text-white flex flex-col gap-5 cursor-pointer">
              <li className=" flex flex-col gap-2">
             <strong className="sm:text-lg">
             Residential renovation project enquiries:{" "}
              </strong>  
                <span>
                  <a href="mailto:sales@luxetransformations.co.uk">
                    sales@luxetransformations.co.uk
                   
                  </a>
                </span>
              </li>

              <li className="flex flex-col gap-2">
            <strong className="sm:text-lg"> Commercial renovation projects: </strong>   
                <span>
                  <a href="mailto: commercial@luxetransformations.co.uk ">
                    commercial@luxetransformations.co.uk
                  </a>
                </span>
              </li>
            </ul>

            {/* <ul className="text-white flex flex-col gap-2 cursor-pointer">
              <li className="text-lg"><strong>Opening times:</strong></li>
              <li>Monday - (9am - 8pm) </li>
              <li>Tuesday - (9am - 8pm)</li>
              <li>Wednesday - (9am - 8pm)</li>
              <li>Thursday - (9am - 8pm)</li>
              <li>Friday - (9am - 8pm)</li>
              <li>Saturday - (9am - 8pm)</li>
            </ul> */}
          </div>
        </div>

        <div className="flex gap-[24px]">
          {quickLinks.map((item, i) => {
            if (windowWidth < 720 && item?.hideInSmallScreen) return null;
            return (
              <div className={styles.linkColumn} key={`${i}`}>
                {/* <h4 className={styles.title_2}> {item.title} </h4> */}
                <h4 className={i === 0 ? styles.title_2_first : styles.title_2}>
                  {item.title}
                </h4>
                {item?.children?.length
                  ? item.children.map((child, indx) => (
                      <Link href={child.link} key={`${indx}`}>
                        <span style={{ color: "#A9A9A9 !important" }}>
                          {child.title}
                        </span>
                      </Link>
                    ))
                  : null}
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <div className={styles.divider} />
          <p className={styles.title_3}>
            Copyright © 2024 Luxe Transformations Ltd. Registered in England and
            Wales, UK
          </p>
          <p className={styles.title_3}>
            All rights reserved Website Developed by Lintech Group
          </p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
