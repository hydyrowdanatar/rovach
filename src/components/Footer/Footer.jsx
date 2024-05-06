import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./Capture.png" alt="" width={150} />
          <span className="secondaryText">{t("footerDesc")}</span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">{t("location")}</span>
          <span className="secondaryText">
            G.Kulyýew (obýeznoý), Gujurly ýaşlar
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
