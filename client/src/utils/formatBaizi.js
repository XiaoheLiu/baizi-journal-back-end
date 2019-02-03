import React from "react";

export const formatContentWithoutPunctuations = str => {
  const regex = /[\u4e00-\u9fa5]|(\[([^\]]+)\])/g;
  let matched = str.match(regex);
  return matched == null
    ? ""
    : matched
        .join("")
        .replace(/\[/g, " ")
        .replace(/\]/g, " ");
};

export const formatContent = str => {
  const regex = /[\u4e00-\u9fa5\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5~`!@#$%^&*(){};:"'<,.>?/\\|_+=-]|(\[([^\]]+)\])/g;
  let matched = str.match(regex);
  return matched == null ? "" : matched.join("");
};

export const formatJSX = str => {
  const regex = /[\u4e00-\u9fa5\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5~`!@#$%^&*(){};:"'<,.>?/\\|_+=-]|(\[([^\]]+)\])/g;
  const matched = str.match(regex);
  const matchedArr = matched == null ? [] : matched;
  return matchedArr.map((c, i) => (
    <span
      key={i}
      className={
        /[\u4e00-\u9fa5]|(\[([^\]]+)\])/.test(c) ? "character" : "punctuation"
      }
    >
      {/(\[([^\]]+)\])/.test(c) ? c.replace(/[\[\]]/g, "") : c}
    </span>
  ));
};

export const hanziCounter = str => {
  let count = 0;
  const chRegex = /[\u4e00-\u9fa5]/g,
    groupRegex = /\[([^\]]+)\]/g;
  if (str.match(chRegex) != null) {
    count = str.match(chRegex).length;
  }
  if (str.match(groupRegex) != null) {
    count += str.match(groupRegex).length;
  }
  return count;
};
