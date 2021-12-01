import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import InputElement from './components/inputElement/InputElement';
import Button from './components/button/Button';
import MultiSelectElement from './components/multiSelectElement/MultiSelectElement';
import SingleSelectElement from './components/singleSelectElement/SingleSelectElement';

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
            <InputElement
                errors={errors}
                register={register}
                name="firstname"
                label="Voornaam"
                inputType="text"
                validationRules={{
                    required: "Voornaam is verplicht",
                }}
            />

            <InputElement
                errors={errors}
                register={register}
                name="lastname"
                label="Achternaam"
                inputType="text"
                validationRules={{
                    required: "Achternaam is verplicht",
                }}
            />

            <InputElement
                errors={errors}
                register={register}
                name="age"
                label="Leeftijd"
                inputType="number"
                validationRules={{
                    required: "Leeftijd is verplicht",
                    min: {
                        value: 18,
                        message: "Minimale leeftijd is 18",
                    }
                }}
            />

            <InputElement
                errors={errors}
                register={register}
                name="zipcode"
                label="Postcode"
                inputType="text"
                validationRules={{
                    required: "Postcode is verplicht",
                    pattern: {
                        value: /^[0-9]{4}[a-zA-Z]{2}$/,
                        message: "Ongeldige postcode",
                    }
                }}
            />

            <SingleSelectElement errors={errors} register={register} name="delivery-frequency" label="Bezorgfrequentie">
                <option value="week">Iedere week</option>
                <option value="two-week">Om de week</option>
                <option value="month">Iedere maand</option>
                <option value="other">Anders</option>
            </SingleSelectElement>

            {selectedFrequency === "other" &&
            <InputElement
                errors={errors}
                register={register}
                name="other"
                label="Specificeer"
                inputType="text"
            />
            }

            <InputElement
                errors={errors}
                register={register}
                name="comments"
                label="Opmerkingen"
                inputType="textarea"
            />

            <MultiSelectElement
                errors={errors}
                register={register}
                name="terms-and-conditions"
                label="Ik ga akkoord met de algemene voorwaarden"
                selectType="checkbox"
            />

            <Button type="submit">
                Verzenden
            </Button>
        </form>
    );
}

export default App;