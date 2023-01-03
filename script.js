//Target Date in Milliseconds
const countdownDate = new Date("December 31, 2023 00:00:01").getTime();



let x = setInterval(() => {

//Todays date in milliseconds
const today = new Date().getTime();

//Difference between target and today's date in milliseconds 
let distance = countdownDate - today;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));

let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

let seconds = Math.floor((distance % (1000 * 60 )) / 1000 );


document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

}, 1000);



