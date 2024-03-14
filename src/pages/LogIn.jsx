import React from "react";
import Footer from "../components/layout/Footer/Footer";
import RegisterForm from "../components/registerForm/RegisterForm";
import Image from "next/image";
import InputForRegister from "../components/registerForm/InputForRegister";

const CreateAccount = () => {
  const logInInput = ["Email", "Password"];
  return (
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

          {/* <RegisterForm></RegisterForm> */}

          <div>
            <h2 className="main-title text-center">Create Account</h2>

            <form action="#" className="w-[392px]">
              {logInInput.map((input) => (
                <InputForRegister name={input} key={input}></InputForRegister>
              ))}

              <button className="main-button">Register Now</button>
            </form>
            <div>
              <div className="flex">
                <p className="text-[1.4rem]">Already have an account?</p>
                <button className="text-[1.4rem] text-[#748C70]">
                  Log In
                </button>
              </div>
            </div>
            <div>
              <p>or</p>
            </div>
            <div className="form-icons flex w-[12rem] justify-between">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 17.5C35 27.16 27.1687 35 17.5 35C7.83125 35 0 27.16 0 17.5C0 7.83125 7.83125 0 17.5 0C27.1687 0 35 7.83125 35 17.5Z"
                  fill="#202020"
                />
                <path
                  d="M25.4996 13.0717C25.4122 13.1274 23.3338 14.3031 23.3338 16.9098C23.4318 19.8826 25.9567 20.9252 26 20.9252C25.9567 20.9809 25.6188 22.3454 24.6179 23.7757C23.8236 25.0078 22.942 26.25 21.6032 26.25C20.3297 26.25 19.8726 25.4289 18.4032 25.4289C16.8252 25.4289 16.3787 26.25 15.1705 26.25C13.8317 26.25 12.8848 24.9412 12.0472 23.7207C10.959 22.1233 10.034 19.6164 10.0014 17.2093C9.97937 15.9338 10.2193 14.68 10.8284 13.6151C11.688 12.1283 13.2227 11.1191 14.8986 11.0858C16.1828 11.0416 17.3256 11.9843 18.1093 11.9843C18.8603 11.9843 20.2644 11.0858 21.853 11.0858C22.5388 11.0865 24.3673 11.297 25.4996 13.0717ZM18.0007 10.8311C17.7721 9.66629 18.4032 8.50148 18.9909 7.75847C19.742 6.8599 20.9281 6.25 21.951 6.25C22.0163 7.41481 21.6025 8.55719 20.8628 9.3892C20.1991 10.2878 19.0562 10.9642 18.0007 10.8311Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <rect width="35" height="35" fill="white" />
                <path
                  d="M17.8569 14.3164V21.0937H27.4674C27.0454 23.2732 25.779 25.1187 23.8796 26.3596L29.6751 30.7665C33.0518 27.712 34.9999 23.2256 34.9999 17.8961C34.9999 16.6552 34.8863 15.4619 34.6752 14.3166L17.8569 14.3164Z"
                  fill="#4285F4"
                />
                <path
                  d="M7.84938 20.832L6.54227 21.8126L1.91553 25.3443C4.85386 31.0556 10.8762 35.0011 17.8567 35.0011C22.6781 35.0011 26.7203 33.442 29.6749 30.7694L23.8794 26.3625C22.2885 27.4125 20.2593 28.049 17.8567 28.049C13.2139 28.049 9.26913 24.9785 7.85668 20.8421L7.84938 20.832Z"
                  fill="#34A853"
                />
                <path
                  d="M1.91546 9.65625C0.697986 12.0107 0 14.6675 0 17.4993C0 20.3311 0.697986 22.9879 1.91546 25.3424C1.91546 25.3582 7.85718 20.8242 7.85718 20.8242C7.50004 19.7742 7.28894 18.6606 7.28894 17.4991C7.28894 16.3376 7.50004 15.2241 7.85718 14.1741L1.91546 9.65625Z"
                  fill="#FBBC05"
                />
                <path
                  d="M17.8571 6.96816C20.487 6.96816 22.8247 7.85905 24.6916 9.57725L29.8052 4.56596C26.7045 1.7342 22.6786 0 17.8571 0C10.8766 0 4.85386 3.92953 1.91553 9.65681L7.85707 14.175C9.26933 10.0386 13.2142 6.96816 17.8571 6.96816Z"
                  fill="#EA4335"
                />
              </svg>

              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="35" rx="17.5" fill="#1877F2" />
                <path
                  d="M24.312 22.5586L25.0879 17.5H20.2344V14.2188C20.2344 12.8345 20.9111 11.4844 23.085 11.4844H25.293V7.17773C25.293 7.17773 23.29 6.83594 21.376 6.83594C17.377 6.83594 14.7656 9.25928 14.7656 13.6445V17.5H10.3223V22.5586H14.7656V34.7881C15.6577 34.9282 16.5703 35 17.5 35C18.4297 35 19.3423 34.9282 20.2344 34.7881V22.5586H24.312Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default CreateAccount;
