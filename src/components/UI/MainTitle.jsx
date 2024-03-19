import React from "react";
const MainTitle = ({ tagTitle, children, fontSize, fontWeight,marginBottom }) => {
  const Tag = tagTitle || "div";
  return (
    <Tag className={`text-[${fontSize}rem] ${fontWeight} mb-[${marginBottom}]`}>{children}</Tag>
  );
};
export default MainTitle;
