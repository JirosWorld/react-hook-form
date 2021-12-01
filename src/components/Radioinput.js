import React from "react";

export default function Radioinput({name, register}){
    return(
    <label htmlFor={name}>
        <input type="radio"
               id={name}
               value={name}
               {...register}/>
        Overdag
    </label>
    )
}