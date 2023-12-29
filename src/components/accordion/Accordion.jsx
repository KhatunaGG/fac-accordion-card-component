import React from "react";
import style from "./accordion.module.css";
import Item from "../item/Item";
import { data } from "../../data";

const Accordion = () => {
  console.log(data);

  return (
    <div className={style.accordion}>
      {data.map((el, i) => (
        <Item key={i} question={el.question} answer={el.answer} />
      ))}
    </div>
  );
};

export default Accordion;
