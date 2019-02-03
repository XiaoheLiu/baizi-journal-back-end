import React from "react";
import "./Baizi.css";
import { formatDate } from "../../utils/date";
import { formatJSX } from "../../utils/formatBaizi";

const Baizi = ({ date, content, weather, title }) => {
  return (
    <div className="baiziDisplay">
      <div className="ui huge message">
        <h2 className="ui left floated header  baiziTitle">{title}</h2>
        <h2 className="ui right aligned header">
          {`${formatDate(date)} ${weather}`}
        </h2>
        <p>{formatJSX(content)}</p>
      </div>
    </div>
  );
};

export default Baizi;
