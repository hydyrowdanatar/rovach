import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">{t("ourContacts")}</span>
          <span className="primaryText">{t("easyContact")}</span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{t("phoneNum")}</span>
                    <span className="secondaryText">+993 61 783808</span>
                  </div>
                </div>
                <a href="tel:+99361783808" className="flexCenter button">
                  {t("call")}
                </a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaInstagramSquare size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">@rovach_cargo</span>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/rovach_cargo/"
                  className="flexCenter button"
                  target="_blank"
                >
                  {t("view")}
                </a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaTiktok size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Tiktok</span>
                    <span className="secondaryText">@Rovach.co.ltd</span>
                  </div>
                </div>
                <a
                  href="https://www.tiktok.com/@rovach.co.ltd"
                  className="flexCenter button"
                  target="_blank"
                >
                  {t("view")}
                </a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">{t("message")}</span>
                    <span className="secondaryText">+993 61 783808</span>
                  </div>
                </div>
                <a href="tel:+99361783808" className="flexCenter button">
                  {t("messageNow")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
