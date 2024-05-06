import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
import { useTranslation } from "react-i18next";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  const { t } = useTranslation();

  const [classNames, setClassNames] = useState(Array(data.length).fill(null));

  const handleAccordionItemClick = (index) => {
    const newClassNames = classNames.map((className, i) =>
      i === index ? (className === "expanded" ? "collapsed" : "expanded") : null
    );
    setClassNames(newClassNames);
  };
  return (
    <section id="aboutUs" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./about.jpg" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">{t("aboutUs")}</span>

          <span className="primaryText">{t("aboutTitle")}</span>

          <span className="secondaryText">{t("aboutDesc")}</span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${classNames[i]}`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className="flexCenter accordionButton "
                      onClick={() => handleAccordionItemClick(i)}
                    >
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{t(item.heading)}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{t(item.detail)}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
