import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle" /> */}
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Rowaç
              <br />
              Hususy
              <br />
              Kärhanasy
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>{t("hero1")}</span>
            <br />
            <span>{t("hero2")}</span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">{t("product")}</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={2750} end={2820} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">{t("customer")}</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
