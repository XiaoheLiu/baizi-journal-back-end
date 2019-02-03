import React from "react";

const ErrorMessage = ({ onClose }) => (
  <div className="ui error message">
    <i className="close icon" onClick={onClose} />
    <div className="header"> 提交失败：百字日期重复 </div>
    <ul>
      <li>每天只能写一篇百字！</li>
    </ul>
  </div>
);

export default ErrorMessage;
