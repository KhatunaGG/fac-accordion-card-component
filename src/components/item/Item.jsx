import style from "./item.module.css";
import React, { useState } from "react";

const Item = ({ answer, question }) => {
  const [show, setShow] = useState(1);

  return (
    <div className={style.item}>
      <div className={style.questionItem}>
        {show !== 1 ? (
          <h2 className={style.h2Bold}>{question}</h2>
        ) : (
          <h2 className={style.question}>{question}</h2>
        )}

        <button
          onClick={() => {
            setShow(show === 1 ? null : 1);
          }}
          className={style.arrowBtn}
        >
          {show !== 1 ? (
            <img src="/assets/arrow.png" alt="" className={style.arrowRotate} />
          ) : (
            <img src="/assets/arrow.png" alt="" className={style.arrow} />
          )}
        </button>
      </div>

      {show !== 1 ? (
        <div className={style.answerItem}>
          <p className={style.answerText}>{answer}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
