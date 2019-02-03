import React from "react";
import BaiziInput from "../BaiziInput";
import "./Landing.css";

const Landing = () => {
  return (
    <div style={{ marginTop: "-1em" }}>
      <div className="jumbotron">
        <h1>百字，是一种生活方式</h1>
        <hr />
        <p>也许不会百炼成钢，但却可从百字之间窥见一个真实的自己。</p>
      </div>
      <h4 className="ui center aligned header">试写百字</h4>
      <BaiziInput onSubmit={s => {}} />
      <p className="ui center aligned sub header">
        注：试写功能不可保存。如想创建自己的百字本，请点击右上角注册账号。
      </p>
    </div>
  );
};

export default Landing;
