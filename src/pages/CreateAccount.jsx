import React from "react";
import RegisterForm from "../components/registerForm/RegisterForm";
import Image from "next/image";
import PageLayout from "../components/layout/Product/PageLayout";
const CreateAccount = () => {

  return (
    <PageLayout>
    <section className="collection mt-5">
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
          <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </section>
    </PageLayout>
  );
};

export default CreateAccount;
