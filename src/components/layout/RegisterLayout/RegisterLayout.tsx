import RegisterForm from "../../registerForm/RegisterForm";
import Image from "next/image";
import { useSession } from "next-auth/react";
import UserInformation from "../../userInformation/UserInformation"


const RegisterLayout = () => {
  const session = useSession();
  return (
    <section className="mt-5">
      <div className="container">
        <div className="flex justify-evenly mb-12 items-center">
          <Image
            src="/registration-3.png"
            width={600}
            height={837}
            alt="registration-image"
            className="w-[600px] h-[837px] object-cover"
          ></Image>
          <div>
            {/* @ts-ignore */}
          {session.data?<UserInformation user={session?.data?.user}/>:<RegisterForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterLayout;
