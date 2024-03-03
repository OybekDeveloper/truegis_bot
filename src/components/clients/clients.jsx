import React from "react";
import {
  MasterCard,
  Gillette,
  LouisVuitton,
  McDonald,
  Starbucks,
  card1,
  card2,
  card3,
  card4,
  clientback,
  lukoil,
  irish,
  costa,
  fayz,
  bek,
  med24,
} from "./client-img";
import "./clients.scss";
import { useTranslation } from "react-i18next";


const clients = [
  {
    id: 1,
    title: "Lukoil",
    url: lukoil,
  },
  {
    id: 2,
    title: "Irish Pub Restaurant",
    url: irish,
  },
  {
    id: 3,
    title: "Costa Coffee",
    url: costa,
  },
  {
    id: 4,
    title: "Fayz Mount Restorani",
    url: fayz,
  },
  {
    id: 5,
    title: "Bek Restorani",
    url: bek,
  },
  {
    id: 6,
    title: "",
    url: med24,
  },

];

const Clients = () => {
  const { t } = useTranslation()
  const cards = [
    {
      id: 1,
      title: t('what_1'),
      url: card1,
    },
    {
      id: 2,
      title: t("what_2"),
      url: card2,
    },
    {
      id: 3,
      title: t("what_3"),
      url: card3,
    },
    {
      id: 4,
      title: t("what_4"),
      url: card4,
    },
  ];
  return (
    <div
      id="clients"
      className="clients  max-lg:w-11/12   mx-auto pt-[100px] flex flex-col items-center mb-[100px] overflow-hidden"
    >
      <h1 className="text-[32px] font-[600]">{t("our_clients")}</h1>
      <div className="cards pt-[64px]">
        <div className="card-slide">
          {clients.map((item) => (
            <div key={item.id} className="inline-flex pl-[112px]">
              <div className="flex flex-row justify-center items-center gap-[12px]">
                <img
                  className="h-[40px] object-cover"
                  src={item.url}
                  alt={item.title}
                />
                <h1 className="text-[23px] font-[500]">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="card-slide">
          {clients.map((item) => (
            <div key={item.id} className="inline-flex pl-[112px]">
              <div className="flex flex-row justify-center items-center gap-[12px]">
                <img
                  className="h-[40px] object-cover"
                  src={item.url}
                  alt={item.title}
                />
                <h1 className="text-[23px] font-[500]">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="card-slide">
          {clients.map((item) => (
            <div key={item.id} className="inline-flex pl-[112px]">
              <div className="flex flex-row justify-center items-center gap-[12px]">
                <img
                  className="w-[40px] h-[40px]"
                  src={item.url}
                  alt={item.title}
                />
                <h1 className="text-[23px] font-[500]">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <article className="relative w-full max-w-[1440px] max-auto flex flex-col items-center mt-[200px] gap-[64px]">
        <div className="absolute top-10 lg:left-24 max-lg:top-[160px] max-sm:top-[600px]">
          <img className="w-[440px]" src={clientback} alt="back" />
        </div>
        <h1 className="text-[32px] font-[600] text-center">
          {t("what_clients")}
        </h1>
        <div className="card-container grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-[24px] max-sm:gap-[40px]">
          {cards.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="card mx-auto flex flex-col gap-[32px] p-[32px] max-xl:p-[16px] max-sm:p-[32px] w-[300px] max-sm:h-[280px]  max-xl:w-[230px] max-lg:w-full"
            >
              <img
                className="w-[56px] h-[56px]"
                src={item.url}
                alt={item.title}
              />
              <h1 className="text-[20px] font-[500] max-lg:w-[70%] max-md:w-[90%]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Clients;
