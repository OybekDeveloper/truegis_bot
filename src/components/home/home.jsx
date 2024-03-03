import { homeimg, homebackimg } from "../imgs";
import { useNavigate, useParams } from "react-router-dom";
import "./home.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";
import i18next from "i18next";
import { useDispatch } from "react-redux";
import { setDefLang } from "../../reducer/redux";

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { id } = useParams()
  const idUser = localStorage.getItem("id")
  const scrollPage = (targetId) => {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
  localStorage.setItem("id", id)
  useEffect(() => {
    console.log(idUser);

    const fetchData = async () => {

      try {
        const res = await axios({
          method: "GET",
          url: `https://admin13.uz/api/users/${idUser}/`,
          headers: {
            accept: "application/json",
            "X-CSRFToken": "7DI9Q7uLDTXGywwg8ZtSDZrBsTxTSjYj5UkD7j6LcgtsWhxIM7wAgtyhqoXH2rFc"
          }
        })
        console.log(res);
        i18next.changeLanguage(res?.data?.lang);
        dispatch(setDefLang(res?.data?.lang));
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [id])
  return (
    <div
      id="home"
      className="home w-10/12 max-lg:w-11/12 max-sm:w-full mx-auto max-w-[1440px] flex flex-col  pt-[120px] "
    >
      <section className="flex max-lg:flex-col justify-between items-center">
        <article className="w-full flex flex-col max-lg:items-center gap-[24px]  items-start max-lg:text-center max-lg:w-2/3 max-sm:w-11/12">
          <h1 className="text-[32px] font-[600] max-sm:text-[29px]">
            <span className="span">TrueGis:</span>{t("home_h1")}
          </h1>
          <p className="text-[18px] opacity-[0.7] font-[400] ">
            {t("home_p")}
          </p>
          <button
            onClick={() => navigate(`/contact/${id}`)}
            className="pt-[20px] max-sm:w-11/12 max-lg:w-1/2 msg-btn flex h-[42px] "
          >
            {t("msg_btn_text")}
          </button>
        </article>
        <div className="relative w-full flex justify-center items-center max-lg:pt-[104px]">
          <div className="w-[1000px] h-[1000px] absolute z-[-1] max-sm:hidden">
            <img src={homebackimg} alt="img" />
          </div>
          <div className="relative">

            <button onClick={() => scrollPage("bot_features")} className="flex msg-btn1 top-[570px] w-[85%] h-[30px] sm:h-[34px] sm:left-[23px] left-[20px] max-sm:top-[513px] text-[14px]">
              Start
            </button>

            <img
              className="w-[300px] max-sm:w-[270px] z-10 "
              src={homeimg}
              alt="img"
            />
          </div>
        </div>
      </section>
      <section className="pt-[150px]  grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-y-[63px]">
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            15,000 +
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">{t("statitic_1")}</p>
        </div>
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            10,000 +
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">{t("statitic_2")}</p>
        </div>
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            900 +
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">{t("statitic_3")}</p>
        </div>
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            500 mln +
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">{t("statitic_4")}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
