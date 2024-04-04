import React from "react";
import { ReactNode } from "react";
interface MainTitleProps {
  tagTitle: keyof JSX.IntrinsicElements;
  children: ReactNode;
  fontSize: string ;
  fontWeight: string;
  marginBottom: string;
}
const MainTitle:React.FC<MainTitleProps> = ({
  tagTitle,
  children,
  fontSize,
  fontWeight,
  marginBottom,
}) => {
  const Tag = tagTitle || "div";
  return (
    <Tag className={`${fontSize} ${fontWeight} mb-[${marginBottom}]`}>
      {children}
    </Tag>
  );
};
export default MainTitle;
