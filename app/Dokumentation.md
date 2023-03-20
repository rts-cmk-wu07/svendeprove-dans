# Dokumentation for Landrup Dans
Svendeprøve, Adam Chatila
forår 2023

## Landrup Dans
bLandrup Dans er en lille danseskole, der har igangsat en større ekspansion. De ønsker at tilbyde deres kunder en digital platform, der kan øge antallet af tilmeldinger til deres danseaktiviteter. Derfor har de bestilt en mobil web-app, som giver brugerne mulighed for at finde og tilmelde sig forskellige aktiviteter, som afholdes på skolen. Web-app'en vil gøre det lettere for brugerne at se de forskellige dansehold og tilmelde sig deres foretrukne hold online.

En mobil web-app er en applikation, der fungerer som en hjemmeside, men som kan åbnes og bruges direkte fra en mobiltelefon eller tablet. Det betyder, at brugerne ikke behøver at downloade eller installere noget på deres enheder for at bruge app'en. I stedet kan de blot åbne den via en webbrowser og få adgang til dens funktioner og indhold.

## Tech-stack
- **React** Hvorfor React.js?
Fleksibilitet: React kan bruges sammen med en række andre teknologier, herunder andre biblioteker og frameworks, hvilket gør det til et fleksibelt valg for udviklere.
Jeg har valgt react fordi - stor community, god dokumentation, stor efterspørgsel på arbejdsmarkedet.


- **Tailwind** hvad er Tailwind ?
Tailwind CSS er et CSS-framework, der giver en række foruddefinerede klasser for at hjælpe udviklere med nemt at style deres webapplikationer. Det tillader hurtig og effektiv udvikling ved at fremme konsistens og reducere behovet for brugerdefineret CSS. Det er et populært valg for udviklere, der ønsker at skabe komplekse brugergrænseflader med minimal CSS-kode.
hurtigere end normal css, overskuelighed, kompatibilitet, standardisering
- **Packages**
- **'sweetalert'** hvad er sweetalert?
SweetAlert er en metode til at tilpasse alarmer i, websteder. Det giver webudvikler mulighed for at ændre det med en standard JavaScript-knap. Og man kan altid tilføje en ny knap til den, ændre knappens baggrundsfarve, ændre knappens tekst og tilføje yderligere advarsler, der afhænger af brugerens klik
## Perspektivering

## Kode-ekempel
Jeg har valgt axios fordi Det gør det nemmere at sende asynkrone HTTP Requests til REST-endpoints og hjælper  med at udføre CRUD-operationer. Dette REST-enddpoints/API kan være en ekstern API som Google API, GitHub API og så videre – eller det kan være din egen backend-node. js server.


 Nedestående er et stykke kode,hvor vi bruger get method i axios, for  En GET request er en måde, hvor du kan hente data fra en data source  ved hjælp af internettet. Det gøres ved hjælp af GET Request Method, som er en meget almindelig HTTP Request (som POST, PUT eller DELETE).

```javascript

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'; //importing axios after you installed it by running npm i axios in your terminal
import { Link, useNavigate } from 'react-router-dom';
import UseScrollAlert from '../UseScrollAlert';
import { TokenContext } from '../TokenProvider';
import { Fade } from 'react-reveal';
import 'animate.css/animate.min.css';



const AktiviteterCard = () => {
  const [activities, setActivities] = useState([]);
  const [showAlert, setShowAlert] = UseScrollAlert();
  const { isLoggedIn, user } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/activities') //calling for the  data
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

```

Jeg har flytte min opgave fra repository til den rigtig reposotory 