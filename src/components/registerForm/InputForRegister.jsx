import React from "react";


const InputForRegister = () => {
  return (
    <div>
       <label htmlFor="firstName">Your name</label>
				<input className="input" type="text" id="firstName" required name="firstName" placeholder="First Name"/>         
    </div>
    );
};
export default InputForRegister;