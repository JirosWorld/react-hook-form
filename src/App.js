import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './App.css';
import Textinput from "./components/Textinput";
import Radioinput from "./components/Radioinput";

function App() {
    // const {register, handleSubmit, formState: {errors}} = useForm( {mode: "onChange"});
    const { handleSubmit, formState: { errors }, register, watch } = useForm();

    const selectedReferrer = watch('bezorgFrequentie');

    function onFormSubmit(data){
        console.log(data);
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit(onFormSubmit)}
              id="mainform">
            <Textinput name="Voornaam" register={register("Voornaam", {required: true})}/>
            <Textinput name="Achternaam" register={register("Achternaam", {required: true})}/>
            <Textinput name="Leeftijd" register={register("Leeftijd", {required: true})}/>
            <Textinput name="Postcode" register={register("Postcode", {required: true})}/>

            <label htmlFor="frequentie">
                Bezorgfrequentie <br/>
                <select id="frequentie" {...register("bezorgFrequentie", {required: true})}>
                    <option value="iedere week">iedere week</option>
                    <option value="om de week">om de week</option>
                    <option value="iedere maand">iedere maand</option>
                    <option value="other">Anders</option>
                </select>
            </label>

            {/*conditineel veld, voeg 'watch' toe aan const*/}
            {selectedReferrer === "other" &&  <input
                type="text"
                {...register("specificeer")}
            />}


            <label htmlFor="opmerkingen">
                Opmerkingen <br/>
                <textarea
                    id="opmerkingen"
                    rows="4"
                    cols="30"
                    {...register("opmerkingen")}
                />
            </label>
            <label>
                <br />
                <input type="checkbox"
                       {...register("checkbox", {required: true})}/>
                Ik ga akkoord met de voorwaarden
            </label>
            <input type="submit"
                //className={(errors.Achternaam && errors.Voornaam && errors.Leeftijd && errors.Postcode && errors.bezorgFrequentie && errors.radio && errors.checkbox) ? "none" : "redButton"}
            />
            {errors.Voornaam && <p>geen voornaam</p>}
        </form>
    </div>
  );
}

export default App;
