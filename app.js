'use strict';
const year = document.querySelector('.year');
const day = document.querySelector('.day');
const clock = document.querySelector('.clock');
const dateTime = new Date();
const hr = `${dateTime.getHours()}`.padStart(2,0);
const min = `${dateTime.getMinutes()}`.padStart(2,0);
const sec = `${dateTime.getSeconds()}`.padStart(2,0);

const options = {
day: 'numeric',
month: 'short',
year: 'numeric'
};
day.innerHTML =new Intl.DateTimeFormat('en-UK', options).format(dateTime);

setInterval(()=>{
    const now = new Date();
const hr = `${now.getHours()}`.padStart(2,0);
const min = `${now.getMinutes()}`.padStart(2,0);
const sec = `${now.getSeconds()}`.padStart(2,0);
clock.textContent = `${hr}:${min}:${sec}`},1
);
