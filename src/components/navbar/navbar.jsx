import React, { useEffect, useState } from "react";
import { truegis, menu, close } from "../imgs";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import en from "./eng1.svg";
import ru from "./russian.svg";
import uz from "./uzbekistán.svg";
import frame from "./Frame.svg";
import "./navbar.scss";
import { useSelector } from "react-redux";
const language = [
  {
    code: "uz",
    name: "O'zbek",
    country_code: "uz",
    icon: uz,
  },
  {
    code: "eng",
    name: "English",
    country_code: "gb",
    icon: en,
  },
  {
    code: "ru",
    name: "Русский",
    country_code: "ru",
    icon: ru,
  },
];

const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { defLang } = useSelector((state) => state.events);
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [lengOpen, setLengOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "eng",
    name: "English",
    country_code: "gb",
    icon: en,
  });
  const [defaultLanguage, setDefaultLanguage] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem("id")

  const controls = useAnimation();
  const scrollPage = (targetId) => {
    const targetElement = document.getElementById(targetId);
    navigate(`/${id}`);
    if (pathname === `/${id}`) {
      window.scrollTo(0, 0);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleActive = () => {
    setIsOpen(!isOpen);
    setLengOpen(false);
    controls.start({
      x: isOpen ? "100%" : 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
    setActiveLink("");
  };
  useEffect(() => {
    const newData = language.filter(
      (item) => item.name !== selectedLanguage?.name
    );
    setDefaultLanguage(newData);
  }, [selectedLanguage?.name]);
  useEffect(() => {
    const body = document.body;
    const blur = document.querySelector("#blur-effect");
    if (isOpen) {
      body.classList.add("no-scroll");
      blur.classList.add("blur-effect");
    } else {
      body.classList.remove("no-scroll");
      blur.classList.remove("blur-effect");
    }
  }, [isOpen]);
  useEffect(() => {
    if (defLang) {
      const data = language.filter((item) => item.code === defLang);
      console.log(data);
      setSelectedLanguage(data[0]);
    }
  }, [defLang]);
  const link = [
    {
      id: 1,
      link_nav: "clients",
      title: t("li_2"),
    },
    {
      id: 2,
      link_nav: "bot_features",
      title: t("li_1"),
    },
    {
      id: 3,
      link_nav: "comments",
      title: t("li_3"),
    },
    {
      id: 4,
      link_nav: "faq",
      title: t("li_4"),
    },
  ];
  return (
    <nav className="navbar w-10/12 max-xl:w-11/12 mx-auto max-w-[1440px] h-[88px] flex justify-between items-center">
      <div
        onClick={() => {
          navigate(`/${id}`);
          if (pathname === `/${id}`) {
            scrollPage("home")
          }
        }}
        className="cursor-pointer logo flex justify-center items-center gap-[12px]"
      >
        <img
          className="nav-img w-[40px] h-[40px]"
          src={truegis}
          alt="truegis"
        />
        <h1 className="text-[23px] font-[500]">TrueGis</h1>
      </div>
      <ul className="max-lg:hidden links flex justify-center items-center gap-[40px] max-xl:gap-[25px] font-[500]">
        {link.map((item) => (
          <li
            key={item.id}
            onClick={() => {

              scrollPage(item?.link_nav);
              setActiveLink(item?.link_nav);
            }}
            className={`${activeLink === item?.link_nav ? "active-link" : ""} cursor-pointer`}
          >
            {item?.title}
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-[34px]">
        <button
          onClick={() => setLengOpen(!lengOpen)}
          className="max-sm:hidden relative flex justify-center items-center gap-[8px] rounded-[26px] border-[1px] border-solid border-[#262626] p-[8px]"
        >
          <img
            className="w-[24px] h-[24px]"
            src={selectedLanguage?.icon}
            alt=""
          />
          <h1>{selectedLanguage?.name}</h1>
          <img className="w-[20px] h-[20px]" src={frame} alt="" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: lengOpen ? 1 : 0 }}
            className="w-[130px] top-[50px] gap-[7px] flex flex-col justify-start right-0 absolute rounded-[10px] border-[1px] border-solid border-[#262626] bg-[#0A090C]  py-[17px]"
          >
            {defaultLanguage.map((item) => (
              <div
                onClick={() => {
                  setSelectedLanguage(item);
                  setLengOpen(false);
                  i18next.changeLanguage(item.code);
                }}
                className="flex justify-start items-center gap-[8px] mx-[10px] px-[7px] py-[7px] hover:rounded-[8px] hover:bg-[#184399]"
                key={item.code}
              >
                <img className="w-[24px] h-[24px]" src={item.icon} alt="" />
                <h1>{item.name}</h1>
              </div>
            ))}
          </motion.div>
        </button>
        <button
          onClick={() => navigate(`/contact/${id}`)}
          className="msg-btn flex max-lg:hidden "
        >
          {t("msg_btn_text")}
        </button>
        <div className="menu lg:hidden flex justify-center items-center gap-[18px]">
          <button
            onClick={() => {
              navigate(`/contact/${id}`)
              setIsOpen(false);
              setActiveLink("");
            }}
            className="msg-btn  max-sm:h-[30px] flex max-lg:hidden max-sm:flex w-full max-sm:text-[14px]"
          >
            {t("msg_btn_text")}
          </button>
          <img
            onClick={handleActive}
            className={`${isOpen ? "hidden" : "block"
              } w-[28px] h-[28px] max-sm:w-[24px] max-sm:h-[24px]`}
            src={menu}
            alt="menu"
          />
          <img
            onClick={handleActive}
            className={`${isOpen ? "block" : "hidden"
              } w-[28px] h-[28px] max-sm:w-[24px] max-sm:h-[24px]`}
            src={close}
            alt="menu"
          />
        </div>
      </div>
      <motion.section
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: isOpen ? 0 : "100%" }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`lg:hidden flex navbar2  flex-col absolute px-[20px] gap-[72px] right-0 top-[80px] bg-[#0a090c] w-full max-sm:w-[70%] h-screen`}
      >
        <ul className="text-[23px] max-sm:text-[16px] font-[600] links flex flex-col text-end items-end gap-[40px] max-sm:gap-[24px] pt-[52px] max-sm:pt-[44px]">
          <button
            onClick={() => setLengOpen(!lengOpen)}
            className="sm:hidden relative flex justify-center items-center gap-[8px] rounded-[26px] border-[1px] border-solid border-[#262626] p-[8px]"
          >
            <img
              className="w-[24px] h-[24px]"
              src={selectedLanguage?.icon}
              alt=""
            />
            <h1>{selectedLanguage?.name}</h1>
            <img className="w-[20px] h-[20px]" src={frame} alt="" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: lengOpen ? 1 : 0 }}
              className="w-[130px] top-[50px] gap-[7px] flex flex-col justify-start right-0 absolute rounded-[10px] border-[1px] border-solid border-[#262626] bg-[#0A090C]  py-[17px]"
            >
              {defaultLanguage.map((item) => (
                <div
                  onClick={() => {
                    setSelectedLanguage(item);
                    setLengOpen(false);
                    i18next.changeLanguage(item.code);
                  }}
                  className="flex justify-start items-center gap-[8px] mx-[7px] px-[7px] py-[7px] hover:rounded-[8px] hover:bg-[#184399]"
                  key={item.code}
                >
                  <img className="w-[24px] h-[24px]" src={item.icon} alt="" />
                  <h1>{item.name}</h1>
                </div>
              ))}
            </motion.div>
          </button>
          {link.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                scrollPage(item?.link_nav);
                setActiveLink(item?.link_nav);
                setIsOpen(false)
              }}
              className={`${activeLink === item?.link_nav ? "active-link" : ""} cursor-pointer`}
            >
              {item?.title}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            navigate(`/contact`);
            setIsOpen(false);
          }}
          className="msg-btn flex  w-full max-sm:hidden"
        >
          {t("msg_btn_text")}
        </button>
      </motion.section>
    </nav>
  );
};

export default Navbar;
