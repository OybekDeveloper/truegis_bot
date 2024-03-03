import React, { useEffect, useState } from "react";
import { dog, loc, phone } from "./contact-img";
import "./contact.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Bounce, toast } from "react-toastify";

const Contact = () => {
  const { t } = useTranslation()
  useEffect(() => {
    const scrollPage = (targetId) => {
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
    scrollPage('contact')
  }, [])
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    message: "",
    status: true
  });
  const [errorMessage, setErrorMessage] = useState()
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9+]/g, "");
    e.target.value = inputValue;
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const dataF = JSON.stringify(formData)
        const res = await axios({
          method: "POST",
          url: "https://admin13.uz/api/message/",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken":
              "fbNVA9GldYIriuoEzoY2wJ8adX8zZMTNdsppRlilMledGfp6dw1K9dfQbsyn9UAG",
          },
          data: dataF
        });
        toast.success(t("success_msg"), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        setFormData({
          full_name: "",
          phone: "",
          message: "",
          status: true
        })
        setErrorMessage(null)
        console.log(res)
      } catch (err) {
        console.log(err?.response?.data, 'err')
        setErrorMessage(err?.response?.data);
      }
    };
    fetchData();
  };
  return (
    <div
      id="contact"
      className="contact pt-[150px] max-w-[1440px] w-10/12 mx-auto flex flex-col items-center mb-[200px] max-sm:mb-[100px]"
    >
      <h1 className="text-[32px] font-[600] max-sm:font-[500] max-sm:text-[29px] max-sm:text-center">
        {t("contact")}
      </h1>
      <p className="text-[18px] font-[400] opacity-[0.7] pt-[16px] max-sm:text-center">
        {t('contact_p')}
      </p>
      <section className="flex max-lg:flex-col-reverse pt-[72px]  max-lg:gap-[96px] justify-between     w-full">
        <div className="contact-me flex flex-col gap-[40px] w-[310px]">
          <h1 className="text-[23px] font-[500]">{t("connect_text")}</h1>
          <div className="flex justify-start items-center gap-[12px]">
            <img src={phone} alt="phone" />
            <p>+998 (88) 100 36 31</p>
          </div>
          <div className="flex justify-start items-center gap-[12px]">
            <img src={dog} alt="phone" />
            <p>@truegis_bot</p>
          </div>
          <div className="flex justify-start items-center gap-[12px]">
            <img src={loc} alt="phone" />
            <p>Chulpon MFI, Pakhlavon Mahmud ul, 2 proezd,</p>
          </div>
        </div>
        <div className="contact-you w-1/2 max-lg:w-full">
          <form className="contact-form flex flex-col items-center max-lg:items-start gap-[42px]">
            <div className="w-[70%] max-lg:w-full flex flex-col gap-2">
              <input
                className={`${errorMessage?.full_name ? " border-red-400" : "border-[#fdfdfd4d]"} border-[1px] border-solid contact-input input-style  p-[10px] bg-transparent text-[16px] font-[400] input-form`}
                type="text"
                placeholder={t("input_1")}
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
              <label className="text-[red]" htmlFor="text">{errorMessage?.full_name && t("error_msg")}</label>
            </div>
            <div className="w-[70%] max-lg:w-full flex flex-col gap-2">
              <input
                className={`${errorMessage?.phone ? "border-red-400" : "border-[#fdfdfd4d]"} border-[1px] border-solid contact-input input-style  p-[10px] bg-transparent text-[16px] font-[400] input-form`}
                type="text"
                value={formData.phone}
                placeholder="+998 (88) 123 45 67"
                name="phone"
                onChange={handleInputChange} // Add onChange event
              />
              <label className="text-[red]" htmlFor="text">{errorMessage?.phone && t("error_msg")}</label>
            </div>
            <div className="w-[70%] max-lg:w-full flex flex-col gap-2">
              <div className="">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  rows="4"
                  className={`${errorMessage?.message ? "border-red-400" : "border-[#fdfdfd4d]"} border-[1px] border-solid contact-input  input-style  p-[10px] bg-transparent text-[16px] font-[400] input-form`}
                  placeholder={t("input_2")}
                ></textarea>
                <label className="text-[red]" htmlFor="message">{errorMessage?.message && t("error_msg")}</label>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="msg-btn flex w-[70%] max-lg:w-full"
            >
              {t("send_form")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
