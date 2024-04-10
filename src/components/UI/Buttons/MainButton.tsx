import {ReactNode} from "react";
import css from './MainButton.module.scss'
interface MainButtonProps{
children:ReactNode,
onClick:()=>void
}
const MainButton:React.FC<MainButtonProps> = ({ children,onClick }) => {
  return <button onClick={onClick} className={css.mainButton}>{children}</button>;
};
export default MainButton;
