import React from "react";

function Textinput({name, register,  inputType="text"}){
    return(
        <>
            <label htmlFor={name}>
            {name}
            <br/>
            <input
                type={inputType}
                id={name}
                {...register}
            />
            </label>
            <br/>
        </>
    )
}
export default Textinput;