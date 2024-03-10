
// Исправить компонент, не срабатывает fontSize
import React from "react";
const MainTitle = ({ tagTitle, children, fontSize, fontWeight,marginBottom }) => {
  const Tag = tagTitle || "div";
  console.log(fontSize)
  return (
    <Tag className={`text-[${fontSize}rem] ${fontWeight} mb-[${marginBottom}]`}>{children}</Tag>
  );
};
export default MainTitle;
