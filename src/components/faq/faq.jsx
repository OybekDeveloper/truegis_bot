import React from "react";
import "./faq.scss";
import FaqItem from "./faq-item";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const id = localStorage.getItem('id')
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t("faq1_h1"),
      discription: t('faq1_p')
    },
    {
      id: 2,
      title: t('faq2_h1'),
      discription: t("faq2_p")
    },
    {
      id: 3,
      title: t("faq3_h1"),
      discription: t("faq3_p")
    },
    {
      id: 4,
      title: t("faq4_h1"),
      discription: t("faq4_p")
    }
  ];
  const navigate = useNavigate();
  return (
    <div
      id="faq"
      className="faq max-w-[1440px] flex flex-col w-10/12 max-sm:w-11/12 mx-auto pt-[100px]  mb-[100px] max-sm:mb-0"
    >
      <div className="flex max-lg:flex-col mb-[100px]  max-lg:gap-[88px] max-sm:gap-[64px]">
        <article className="w-1/2 max-lg:w-full flex flex-col items-start gap-[16px]">
          <h1 className="w-[70%] text-[32px] font-[600]">{t("faq")}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: t("faq_title").replace(
                /@truegis_bot/g,
                "<a href='https://t.me/truegis_bot' style='color:#2970ff'>@truegis_bot</a>"
              )
            }}
            className="text-[16px] font-[400] opacity-[0.7] w-[60%] max-sm:w-full">

          </p>
          <a href="https://t.me/Shavkat_088" className="max-sm:hidden mt-[20px]">
            <div className="shimmer-btn2 w-[200px] h-[42px]">
              <button className="msg-btn  flex font-[400] mas-sm:font-[500]">
                {t("btn_tg_text")}
              </button>
            </div>
          </a>
        </article>
        <section className="w-1/2 max-lg:w-full">
          {data.map((item) => (
            <FaqItem key={crypto.randomUUID()} props={item} />
          ))}
        </section>
      </div>
      <article className="w-full flex flex-col gap-[50px] justify-center items-center pt-[100px] max-sm:pt-0">
        <h1 className="text-[32px] font-[600] text-center">
          {t("faq2")}
        </h1>
        <div className="shimmer-btn max-sm:w-full w-[200px] h-[40px] max-sm:h-[46px]">
          <button
            onClick={() => navigate(`/contact/${id}`)}
            className="msg-btn w-full"
          >
            {t("msg_btn_text")}
          </button>
        </div>
      </article>
    </div>
  );
};

export default Faq;
