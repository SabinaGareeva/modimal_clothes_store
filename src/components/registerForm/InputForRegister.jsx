import React from "react";


const InputForRegister = (props) => {
  return (
    <div>
       <label htmlFor={props.name}></label>
				<input className="input-for-register" type="text" id="firstName" required name={props.name} placeholder={props.name}/>         
    </div>
    );
};
export default InputForRegister;