import {ReactNode} from "react";
import css from './MainButton.module.css'
interface MainButtonProps{
children:ReactNode,
onClick:()=>void
}
const MainButton:React.FC<MainButtonProps> = ({ children,onClick }) => {
  return <button onClick={onClick} className={css.main__button}>{children}</button>;
};
export default MainButton;
