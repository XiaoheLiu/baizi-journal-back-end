import React from "react";

const InfoMessage = ({ onClose }) => (
  <div className="ui brown message">
    <i className="close icon" onClick={onClose} />
    <div className="header"> 百字计数规则 </div>
    <ul>
      <li>每个汉字占1格，标点符号不占格。</li>
      <li>
        其他语言文字或数字可按照自己的标准来计数，并将你认为占一格的内容用英文中括号"[]"括起来，例如"[word]"、"[あ]"。
      </li>
      <li>题目、天气可不填，并且不会被计入字数。</li>
    </ul>
  </div>
);

export default InfoMessage;
