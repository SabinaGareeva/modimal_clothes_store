import React from "react";
import InputForRegister from "./InputForRegister";
const nameInputs=['First name','Last name','Email','Password']

const RegisterForm = () => {
  return (
    <div>
      <h2>Create Account</h2>
      <form action='#'>
        I<InputForRegister></InputForRegister>
        <button>Register Now</button>
      </form>
    </div>
  );
};
export default RegisterForm;
