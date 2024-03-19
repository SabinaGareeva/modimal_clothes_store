
import RegisterForm from "../../registerForm/RegisterForm";
import Image from "next/image";

const RegisterLayout = () => {

  return (
  
    <section className="mt-5">
      <div className="container">
        <div className="flex justify-evenly mb-12 items-center">
          <Image
            src="/registration-2.png"
            width={600}
            height={837}
            alt="registration-image"
            className="w-[600px] h-[837px] object-cover"
          ></Image>
          <div>
          <RegisterForm/>
          </div>
        </div>
      </div>
    </section>

  );
};

export default RegisterLayout;