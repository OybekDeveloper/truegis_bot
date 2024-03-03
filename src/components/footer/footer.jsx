import React, { useState } from "react";
import "./footer.scss";
import { truegis } from "../imgs";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { qr } from "./footer-img";
const Footer = () => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = localStorage.getItem("id")
  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(`/${id}`);
    setActiveLink("");
  };
  const { t } = useTranslation();
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
    <div className="footer w-10/12 max-lg:w-11/12 mx-auto pt-[100px] mb-[48px] max-w-[1440px]">
      <footer>
        <div className="flex justify-between max-sm:flex-col items-start pb-[40px] max-sm:gap-[56px]">
          <div className="flex flex-col justify-start items-start gap-[12px]">
            <div>
              <img className="w-[40px] h-[40px]" src={truegis} alt="logo" />
              <h1 className="text-[29px] font-[500]">TrueGis</h1>
            </div>
            <div className="flex flex-col gap-2 max-lg:w-[80%]">
              <h1>{t("qr")}</h1>
              <img className="w-[80px]" src={qr} alt="" />
            </div>
          </div>
          <div className="links flex gap-[90px] max-sm:gap-0 max-sm:justify-between max-sm:w-full mr-20 max-lg:mr-0">
            <div className="flex flex-col gap-[32px]">
              <h1 className="text-[20px] font-[500]">{t("footer")}</h1>
              <ul className="flex flex-col gap-[16px] text-[16px] font-[500] opacity-[0.7]">
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
            </div>
            <div className="flex flex-col gap-[32px]">
              <h1 className="text-[20px] font-[500]">{t('footer2')}</h1>
              <ul className="flex flex-col gap-[16px] text-[16px] font-[500] opacity-[0.7]">
                <li>
                  <a
                    href="https://t.me/TrueGis_bot"
                    onClick={() => handleLinkClick("bot_features")}
                  >
                    @TrueGis_bot
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/TrueGis"
                    onClick={() => handleLinkClick("clients")}
                  >
                    @TrueGis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="opacity-[0.6]" />
        <p className="text-[16px] font-[400] pt-[16px]">2024 Cosinus LLC</p>
      </footer>
    </div>
  );
};

export default Footer;
