import React from "react";
import "./Companies.css";
import { useTranslation } from "react-i18next";
const Companies = () => {
  const { t } = useTranslation();
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <a href="" className="company-href">
          <img src="./Capture.png" alt="" />
        </a>
        <a
          href="http://noonchina.com.tm/"
          target="_blank"
          className="company-href"
        >
          <img src="./noon.png" alt="" />
        </a>
        <a
          href="http://uphelectrode.com.tm/"
          target="_blank"
          className="company-href2"
        >
          <img src="./uhp.png" alt="" />
        </a>
        <a
          href="http://steelpipe.com.tm/"
          target="_blank"
          className="company-href2"
        >
          <img src="./pipe.png" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Companies;
