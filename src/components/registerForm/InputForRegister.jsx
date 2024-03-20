import React from "react";
import {Formik, Form, Field, ErrorMessage } from "formik";
import css from "./InputForRegister.module.css";

const InputForRegister = ({ name,formikProps}) => {
  
  const {getFieldProps,errors}=formikProps;
 
  return (
    <div>
      {/* <label htmlFor={name}></label>
      <input
        className={css.input__for_register}
        type="text"
        id="firstName"
        required
        name={name}
        placeholder={name}
      /> */}

      <label htmlFor={name}>{name}</label>
      <input
        {...getFieldProps(name)} // используем getFieldProps для получения значений полей формы
        className={css.input__for_register}
      />
      {errors[name] && <div className="error-message">{errors[name]}</div>}
      {/* {name === "password" && (
        <button>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2.75c-3.406 0-6.317 2.102-7.468 5.07a.5.5 0 0 0 0 .36c1.15 2.968 4.062 5.07 7.468 5.07 3.406 0 6.318-2.102 7.468-5.07a.5.5 0 0 0 0-.36C14.318 4.851 11.406 2.75 8 2.75Zm0 9.5c-2.916 0-5.412-1.757-6.463-4.25C2.587 5.507 5.084 3.75 8 3.75S13.412 5.507 14.463 8c-1.05 2.493-3.547 4.25-6.463 4.25Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
            ></path>
          </svg>
        </button>
      )} */}
    </div>
  );
};
export default InputForRegister;
