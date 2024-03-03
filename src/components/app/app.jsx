import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./app.scss";
import Home from "../home/home";
import Clients from "../clients/clients";
import Features from "../features/features";
import Comments from "../comments/comments";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import Contact from "../contact/contact";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "uz", "ru"],
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/{{lng}}/translation.json",
    },
  });


const App = () => {
  return (
    <div className="app relative">
      <div className=" top-0 left-0 fixed w-full z-[999] bg-[#0a090c]">
        <Navbar />
      </div>
      <div id="blur-effect" className="">
        <Routes>
          <Route
            path={'/:id'}
            element={
              <>
                <div className="w-full relative overflow-hidden">
                  <Home />
                </div>
                <Clients />
                <Features />
                <div id="comments" className="pt-[88px]">
                  <Comments />
                </div>
                <Faq />
              </>
            }
          />
          <Route path={"/contact/:id"} element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
