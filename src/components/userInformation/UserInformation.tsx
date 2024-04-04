import { signOut } from "next-auth/react";
import MainTitle from "../UI/MainTitle";
import css from "./UserInformation.module.css";
import { useSelector } from "react-redux";

const UserInformation= () => {
  const authorizedUser = useSelector((state:any) => state.user.user);
  return (
    <div className={css.userdata__container}>
      <MainTitle
        tagTitle="h2"
        fontSize="text-[2.5rem]"
        fontWeight="font-semibold"
        marginBottom="2.4rem"
      >
        Your data
      </MainTitle>
      <p className={css.userdata__text}>Email: {authorizedUser.email}</p>
      <p className={css.userdata__text}>Firstname: {authorizedUser.firstname}</p>
      <p className={css.userdata__text}>Firstname: {authorizedUser.lastname}</p>
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
