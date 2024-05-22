import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-center bg-cover ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://www.flexautoparts.com/img/background.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
        <h1
          className={`text-[30px] leading-[1.2] 800px:text-[55px] text-blue-800 font-[600] font-Poppins capitalize`}
        >
          Your One-Stop Shop for  <br /> Quality Auto Parts
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Connecting You to a Vast Network of Trusted Auto Parts Vendors, Offering Competitive Prices and Reliable Shipping to Keep Your Vehicle Running Smoothly
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
