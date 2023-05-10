import React from "react";
import "./page.scss";
import mainImg from "../../files/insurance.webp";

export const TopicEight = () => {
  return (
    <div className="page">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <img
        className="mainTopic"
        src={mainImg}
        alt="insurance"
      />
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
