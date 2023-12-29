import React from "react";
import style from "./card.module.css";
import ImgBox from "../imgbox/ImgBox";
import Title from "../title/Title";
import Accordion from "../accordion/Accordion";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.cardItem}>
        <ImgBox />
        <div className={style.text}>
          <Title />
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Card;
