import React from "react";
import { ReactNode } from "react";
interface MainTitleProps {
  tagTitle: keyof JSX.IntrinsicElements;
  children: ReactNode;
  fontSize: number;
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
    <Tag className={`text-[${fontSize}rem] ${fontWeight} mb-[${marginBottom}]`}>
      {children}
    </Tag>
  );
};
export default MainTitle;
