import React from "react";
import "./comments.scss";
import { carditem } from "./comment-img";
import { useTranslation } from "react-i18next";

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
];

const Comments = () => {
  const { t } = useTranslation()
  return (
    <div className="comment w-full mx-auto  pb-[64px]">
      <h1 className=" max-md:w-[70%] md:w-[50%] lg:w-[30%] text-[32px] font-[600] text-center mx-auto pt-[50px]">
        {t("comments")}
      </h1>
      <div className="cards mt-[64px] mb-[180px]">
        <div className="card-slide">
          {data.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="card-wrapper inline-flex mx-[16px]"
            >
              <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                <div className="logo flex justify-start gap-[12px] items-center">
                  <img src={carditem} alt="logo" />
                  <h1 className="text-[20px] font-[500]">{t("comment_h1")}</h1>
                </div>
                <p className="text-[16px] font-[400] opacity-[0.7]">
                  {t("comment_p")}
                </p>
                <div className="user flex flex-col pt-[10px]">
                  <h1 className="text-[18px] font-[500]">{t("comment_user")}</h1>
                  <p className="text-[14px] font-[400] opacity-[0.7]">
                    {t("comment_job")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card-slide">
          {data.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="card-wrapper inline-flex mx-[16px]"
            >
              <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                <div className="logo flex justify-start gap-[12px] items-center">
                  <img src={carditem} alt="logo" />
                  <h1 className="text-[20px] font-[500]">{t("comment_h1")}</h1>
                </div>
                <p className="text-[16px] font-[400] opacity-[0.7]">
                  {t("comment_p")}
                </p>
                <div className="user flex flex-col pt-[10px]">
                  <h1 className="text-[18px] font-[500]">{t("comment_user")}</h1>
                  <p className="text-[14px] font-[400] opacity-[0.7]">
                    {t("comment_job")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
