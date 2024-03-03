import React, { useRef, useState } from "react";
import "./features.scss";
import {
  featureicon,
  howwe,
  icon,
  phone1,
  phone2,
  phone3,
} from "./features-img";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const id = localStorage.getItem('id')
  const { t } = useTranslation()
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const imgSectionRef1 = useRef(null);
  const imgSectionRef2 = useRef(null);
  const imgSectionRef3 = useRef(null);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const section1Top = sectionRef1.current.offsetTop - 300;
    const section1Bottom = section1Top + sectionRef1.current.offsetHeight;
    const section2Top = sectionRef2.current.offsetTop - 200;
    const section2Bottom = section2Top + sectionRef2.current.offsetHeight;
    const section3Top = sectionRef3.current.offsetTop - 200;
    const section3Bottom = section3Top + sectionRef3.current.offsetHeight;

    if (scrollPosition >= section3Top && scrollPosition <= section3Bottom) {
      setCurrentSection(3);
    } else if (
      scrollPosition >= section2Top &&
      scrollPosition <= section2Bottom
    ) {
      setCurrentSection(2);
    } else if (
      scrollPosition >= section1Top &&
      scrollPosition <= section1Bottom
    ) {
      setCurrentSection(1);
    } else {
      setCurrentSection(0); // Set to 0 if above all sections
    }
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };


  return (
    <div
      id="bot_features"
      className="features max-w-[1440px] w-10/12 max-lg:w-11/12 mx-auto pt-[100px] flex flex-col justify-center items-center mb-[100px] max-sm:mb-0"
    >
      <h1 className="md:w-1/2 text-[32px] font-[600] max-sm:text-[29px] sm:text-center">
        {t("out_offer")}
      </h1>
      <section className="pt-[100px] max-sm:pt-[64px] mb-[200px] max-sm:mb-[100px] flex flex-col  items-center justify-center">
        <div
          ref={sectionRef1}
          className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-around max-lg:justify-between items-center "
        >
          <article className="w-1/2 max-sm:w-full flex flex-col gap-[32px]">
            <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
            <h1 className="text-[26px] max-sm:text-[23px] font-[500]">
              <span className="span">
                {t("offer_h1_1")}
              </span>
            </h1>
            <p className="text-[16px] font-[400] opacity-[0.8] pb-[70px]">
              {t("offer_p_1")}
            </p>
          </article>
          <motion.div
            id="sectionRef1"
            ref={imgSectionRef1}
            transition={{ duration: 0.4 }}
            animate={{
              opacity: currentSection === 1 ? 1 : 0,
              scale: currentSection === 1 ? 1 : 0,
            }}
            className="relative bankomat"
          >
            <Link onClick={() => scrollToSection(imgSectionRef2)}>
              <button className="flex msg-btn1 absolute top-[382px] left-[35px] h-[25px] w-[113px] max-md:top-[318px] max-md:w-[93px] max-md:left-[30px] max-md:h-[20px] max-md:text-[10px] text-[10px] max-sm:text-[9px]">
                Bankomatlar
              </button>
            </Link>
            <img
              className="w-[300px] max-md:w-[250px]"
              src={phone1}
              alt="icon"
            />
          </motion.div>
        </div>
        <div

          ref={sectionRef2}
          className="flex pt-[100px] max-sm:flex-col max-sm:justify-center max-sm:items-center justify-around max-lg:justify-between items-center "
        >
          <article className="w-1/2 max-sm:w-full flex flex-col gap-[32px]">
            <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
            <h1 className="text-[26px] max-sm:text-[23px] font-[500]">
              <span className="span1">
                {t("offer_h1_2")}
              </span>
            </h1>
            <p className="text-[16px] font-[400] opacity-[0.8] pb-[70px]">
              {t("offer_p_2")}</p>
          </article>
          <motion.div
            ref={imgSectionRef2}
            className="relative"
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSection === 2 ? 1 : 0,
              scale: currentSection === 2 ? 1 : 0,
            }}
          >
            <Link onClick={() => scrollToSection(imgSectionRef3)}>
              <button className="flex msg-btn2 top-[380px] w-[173px] h-[25px] left-[38px] max-md:top-[316px] max-md:w-[146px] max-md:h-[21px] max-md:left-[30px]">
                Ma'lumot olish
              </button>
            </Link>
            <img
              className="w-[300px] max-md:w-[250px]"
              src={phone2}
              alt="icon"
            />
          </motion.div>
        </div>
        <div
          id="sectionref3"
          ref={sectionRef3}
          className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-around max-lg:justify-between items-center pt-[100px]"
        >
          <article className="w-1/2 max-sm:w-full flex flex-col gap-[32px]">
            <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
            <h1 className="text-[26px] max-sm:text-[23px] font-[500]">
              <span className="span">
                {t("offer_h1_3")}
              </span>
            </h1>
            <p className="text-[16px] font-[400] opacity-[0.8] pb-[70px]">
              {t("offer_p_3")}
            </p>
          </article>
          <motion.div
            ref={imgSectionRef3}
            className="relative"
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSection === 3 ? 1 : 0,
              scale: currentSection === 3 ? 1 : 0,
            }}
          >

            <button onClick={() => navigate(`/contact/${id}`)} className="flex msg-btn3 top-[518px] w-[210px] h-[30px] left-[45px] max-md:top-[432px] max-md:w-[172px] max-md:h-[25px] max-md:left-[39px]">
              Sharh qoldirish
            </button>

            <img
              className="w-[300px] max-md:w-[250px]"
              src={phone3}
              alt="icon"
            />
          </motion.div>
        </div>
      </section>
      <section className="w-full flex flex-row max-sm:flex-col justify-between feature-card-true p-[48px] max-md:p-[28px] mb-[100px]">
        <div className="img-container flex justify-center items-center relative w-[40%] max-sm:w-full">
          <img
            className="w-[240px] h-[240px] max-lg:w-[200px] max-lg:h-[200px] max-sm:w-[270px] max-sm:h-[270px]"
            src={icon}
            alt="icon"
          />
        </div>
        <article className="flex flex-col items-start gap-[16px] max-sm:gap-[24px] w-[60%] max-sm:w-full max-sm:text-center">
          <h1 className="text-[29px] max-lg:text-[26px] max-sm:text-[23px] font-[600]">
            {t("our_offer_2")}
          </h1>
          <p className="text-[16px] font-[400] opacity-[0.7]">
            {t("our_offer_3")}
          </p>
          <div className="shimmer-btn pt-[20px] w-[144px] h-[42px] max-sm:w-full max-sm:h-[46px]">
            <button
              onClick={() => navigate(`/contact/${id}`)}
              className="msg-btn flex max-sm:w-full"
            >
              {t("msg_btn_text")}
            </button>
          </div>
        </article>
      </section>
      <section className="w-full flex flex-col justify-center items-center pt-[100px] max-sm:pt-0">
        <h1 className="text-[32px] max-sm:text-[29px] font-[600]">
          {t("how_work")}
        </h1>
        <article className=" w-[70%] max-xl:w-[80%] max-lg:w-[80%] max-sm:w-full flex flex-col  justify-center items-center gap-[5px] pt-[74px] mb-[50px]">
          <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
            <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
              <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] right-[-30px] absolute w-1/2">
                {t("how_work_1")}
              </p>
              <img className="w-[16px] h-[16px]" src={howwe} alt="" />
              <div className="howwe-line"></div>
            </div>
          </div>
          <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
            <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
              <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] left-[-30px] text-right absolute w-1/2">
                {t("how_work_2")}
              </p>
              <img className="w-[16px] h-[16px]" src={howwe} alt="" />
              <div className="howwe-line"></div>
            </div>
          </div>
          <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
            <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
              <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] right-[-30px] absolute w-1/2">
                {t("how_work_3")}
              </p>
              <img className="w-[16px] h-[16px]" src={howwe} alt="" />
              <div className="howwe-line"></div>
            </div>
          </div>
          <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
            <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
              <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] left-[-30px] text-right absolute w-1/2">
                {t("how_work_4")}
              </p>
              <img className="w-[16px] h-[16px]" src={howwe} alt="" />
            </div>
          </div>
          {/* sm  dan keyingi qism */}
          <div className="flex sm:hidden">
            <div className="flex flex-col justify-center items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
              <img className="w-[16px] h-[16px]" src={howwe} alt="" />
              <div className="howwe-line"></div>
            </div>
            <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
              {t("how_work_1")}
            </p>
          </div>
          <div className="flex sm:hidden">
            <div className="flex flex-col justify-center items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
              <img className="w-[16px] h-[16px]" src={howwe} alt="" />
              <div className="howwe-line"></div>
            </div>
            <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
              {t("how_work_2")}
            </p>
          </div>
          <div className="flex sm:hidden">
            <div className="flex flex-col justify-center items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
              <img className="w-[16px] h-[16px]" src={howwe} alt="" />
              <div className="howwe-line"></div>
            </div>
            <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
              {t("how_work_3")}
            </p>
          </div>
          <div className="flex sm:hidden">
            <div className="flex flex-col justify-start items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
              <img className="w-[16px] h-[16px] ml-[3px]" src={howwe} alt="" />
            </div>
            <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
              {t("how_work_4")}
            </p>
          </div>
          {/* sm dan keyingi qism */}
        </article>
      </section>
    </div>
  );
};

export default Features;
