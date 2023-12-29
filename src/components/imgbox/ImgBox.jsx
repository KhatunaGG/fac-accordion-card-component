import React from "react";
import style from "./imgbox.module.css";

const ImgBox = () => {
  return (
    <div className={style.imgBox}>
      <img className={style.mainImg} src="/assets/main-img.png" alt="" />
      <img className={style.shadowImg} src="/assets/shadow-mobile.svg" alt="" />
      <img className={style.squareImg} src="/assets/sq-img.png" alt="" />

      <img
        className={style.mainImgDesktop}
        src="/assets/main-img-desktop.png"
        alt=""
      />
      <img
        className={style.shadowImgDesktop}
        src="/assets/shadow-desktop.svg"
        alt=""
      />
      <img
        className={style.squareImgDesktop}
        src="/assets/sq-img-desktop.svg"
        alt=""
      />
    </div>
  );
};

export default ImgBox;
