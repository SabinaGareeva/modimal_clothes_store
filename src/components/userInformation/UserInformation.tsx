import { signOut } from "next-auth/react";
import MainTitle from "../UI/MainTitle";
import css from "./UserInformation.module.css";
interface UserInformationProps {
  user?: { email?: string; name?: string; image?: string };
}
const UserInformation: React.FC<UserInformationProps> = ({ user }) => {
  return (
    <div className={css.userdata__container}>
      <MainTitle
        tagTitle="h2"
        fontSize={3.2}
        fontWeight="font-semibold"
        marginBottom="2.4rem"
      >
        Your data
      </MainTitle>
      <p className={css.userdata__text}>Email: {user?.email}</p>
      <p className={css.userdata__text}>Name: {user?.name}</p>

      <button
        className={`main-button ${css.userdata__button}`}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserInformation;
