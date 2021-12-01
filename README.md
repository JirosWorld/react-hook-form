# Opdrachtbeschrijving

## origineel: https://github.com/hogeschoolnovi/frontend-react-hook-form 
Je gaat een formulier met validatieregels bouwen in React Hook Form, dat er uiteindelijk zo uit zal zien:

![screenshot](./src/assets/screenshot.png)

## Applicatie starten

Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de `node_modules` door het volgende
commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. Begin met
het maken van wijzigingen in `src/App.js`: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op
de webpagina.

## Opdracht 1 - Formulier met validatieregels bouwen

### Randvoorwaarden formulier

* Het formulier bevat de volgende velden:
    * Voornaam (verplicht)
    * Achternaam (verplicht)
    * Leeftijd (verplicht, minimaal 18)
    * Postcode (verplicht, validatie op patroon _getal-getal-getal-getal-letter-letter_)
    * Bezorgfrequentie als selectbox (verplicht, met _opties_: iedere week, om de week, iedere maand, anders)
    * Andere frequentie als tekstveld (alleen tonen indien "anders" geselecteerd wordt)
    * Opmerkingen
    * Akkoord met de voorwaarden als checkbox
    * Verzendbutton

* Alle velden worden gevalideerd _tijdens_ het typen, nog voor de gebruiker op submit heeft gedrukt
* Alle validatieregels bevatten foutmeldingen die dynamisch worden getoond aan de gebruiker
* Als de gebruiker op versturen drukt, worden alle waardes gelogd. 

## Opdracht 2 - Componenten maken

Maak eigen componenten van input-elementen die je vaak hebt hergebruikt. Zorg ervoor dat je in het overkoepelende
component het formulier één keer initialiseerd (met `useForm`) en de benodigdheden doorgeeft als properties aan de
componenten.

## Bonus opdrachten
* Maak er een mooie gestylde pagina van!