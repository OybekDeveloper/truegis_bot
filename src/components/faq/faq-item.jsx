import React, { useEffect, useRef, useState } from "react";
import { plus } from "./faq-img";

const FaqItem = ({ props }) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = active ? `${contentHeight}px` : "0";
    }
  }, [active]);

  const modifiedDescription = props.discription.replace(
    /@TrueGis_bot/g,
    "<a href='https://t.me/TrueGis' style='color:#2970ff'>@TrueGis</a>"
  );

  return (
    <div className="faqbtn">
      <div
        onClick={() => setActive(!active)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-[18px] max-sm:text-[16px] font-[500] py-[24px]">
          {props?.title}
        </h1>
        <img
          className={`faqbtn__img ${active && "active"} w-[32px] h-[32px]`}
          src={plus}
          alt=""
        />
      </div>
      <p
        ref={contentRef}
        className={`faqbtn__content ${active ? "transition-height active" : ""
          } text-[16px] font-[400]`}
        dangerouslySetInnerHTML={{ __html: modifiedDescription }}
      />
      <div className="py-[12px]">
        <hr className="opacity-[0.7]" />
      </div>
    </div>
  );
};

export default FaqItem;
