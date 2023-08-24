import React from "react";
import "./page.scss";
import mainImg from "../../files/insurance.webp";

export const TopicSix = () => {
  return (
    <div className="page">
      <h3>VI BOB. SUG‘URTA BIZNESIDA MOLIYAVIY FAOLIYATNI BYUDJETLASHTIRISH</h3>
      <h4>
        6.1 Sug‘urta tashkilotlarida moliyaviy resurslarni joylashtirishning
        o‘ziga xos xususiyatlari
      </h4>
      <img src={mainImg} className="mainTopic" alt="insurance" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
        perspiciatis ea excepturi dolorem animi saepe qui quaerat sequi,
        necessitatibus ex hic ipsum, quis aut nulla distinctio exercitationem
        ut? Explicabo exercitationem nam dolores. Quidem dolorem molestias
        expedita ab a, doloremque nam dolor ipsa reprehenderit laborum magni
        cumque ut temporibus provident voluptate.
      </p>
    </div>
  );
};
