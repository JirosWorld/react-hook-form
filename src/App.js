import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({
        mode: 'onChange',
    });

    const selectedFrequency = watch('delivery-frequency');

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="firstname-field">Voornaam:</label>
            <input
                type="text"
                id="firstname-field"
                {...register("firstname", {
                    required: "Voornaam is verplicht",
                })}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}

            <label htmlFor="lastname-field">Achternaam:</label>
            <input
                type="text"
                id="lastname-field"
                {...register("lastname", {
                    required: "Achternaam is verplicht",
                })}
            />
            {errors.lastname && <p>{errors.lastname.message}</p>}

            <label htmlFor="age-field">Leeftijd:</label>
            <input
                type="number"
                id="age-field"
                {...register("age", {
                    required: "Leeftijd is verplicht",
                    min: {
                        value: 18,
                        message: "Minimale leeftijd is 18",
                    }
                })}
            />
            {errors.age && <p>{errors.age.message}</p>}

            <label htmlFor="zipcode-field">Postcode:</label>
            <input
                type="text"
                {...register("zipcode", {
                    required: "Postcode is verplicht",
                    pattern: {
                        value: /^[0-9]{4}[a-zA-Z]{2}$/,
                        message: "Ongeldige postcode",
                    }
                })}
            />
            {errors.zipcode && <p>{errors.zipcode.message}</p>}

            <label htmlFor="frequency-field">Bezorgfrequentie:</label>
            <select {...register("delivery-frequency")}>
                <option value="week">Iedere week</option>
                <option value="two-week">Om de week</option>
                <option value="month">Iedere maand</option>
                <option value="other">Anders</option>
            </select>
            {selectedFrequency === "other" &&
            <>
                <label htmlFor="other-field">Specificeer:</label>
                <input
                    type="text"
                    id="other-field"
                    {...register("other")}
                />
            </>
            }
            <label htmlFor="comments-field">Opmerkingen:</label>
            <textarea {...register("comments")} id="comments-field" cols="30" rows="10"></textarea>

            <label htmlFor="terms-and-conditions-field">
                <input
                    type="checkbox"
                    id="terms-and-conditions-field"
                    {...register("terms-and-conditions")}
                />
                Ik ga akkoord met de algemene voorwaarden
            </label>

            <button type="submit">
                Verzenden
            </button>
        </form>
    );
}

export default App;