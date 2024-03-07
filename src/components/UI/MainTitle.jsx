import React from "react";
const MainTitle = ({ tagTitle, children, fontSize, fontWeight,marginBottom }) => {
  const Tag = tagTitle || "div";
  console.log(fontWeight)
  return (
    <Tag className={`text-[${fontSize}] ${fontWeight} mb-[${marginBottom}]`}>{children}</Tag>
  );
};
export default MainTitle;
