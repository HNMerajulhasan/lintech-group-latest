import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_inner}>
        <h1>LET’S TURN YOUR VISION INTO REALITY </h1>
        <p>
        We create powerful marketing and high-converting websites that attract, engage, and drive results. Let’s grow your business together.
        </p>
        <Link href={"/contact"}>
          <button>Make An Inquiry</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
