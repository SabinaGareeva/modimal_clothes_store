import React from "react";
import Footer from "../components/Navigation/Footer";
import RegisterForm from "../components/registerForm/RegisterForm";
import Image from "next/image";


const Registration = () => {
  return (
    <section className="collection">
      <div className="container">
      <Image   src="/registration-1.jpg"
          width={600}
          height={837}
          alt="registration-image"
          className="w-[600px] h-[837px] object-cover"></Image>
          <RegisterForm></RegisterForm>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Registration;