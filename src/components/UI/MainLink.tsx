import { ReactNode } from "react";
import Link from "next/link";
import css from "./MainLink.module.scss";
interface MainLinkProps {
  children: ReactNode;
  href: string;
  onClick: () => void;
}
const MainLink: React.FC<MainLinkProps> = ({ children, href, onClick }) => {
  return (
    <Link href={href} className={css.mainLink} onClick={onClick}>
      {children}
    </Link>
  );
};
export default MainLink;
