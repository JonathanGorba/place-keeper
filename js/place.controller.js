'use strict';


function init() {
    setSettings();
}

function initIndex() {
    showHoursToBirthday();

}


function onSubmit() {
    const color = document.querySelector('#textcolor').value;
    const backGroundColor = document.querySelector('#backgroundcolor').value;
    const email = document.querySelector('#email').value;
    const age = document.querySelector('#age').value;
    const gender = document.querySelector('#gender').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    const settings = {
        time,
        date,
        gender,
        age,
        email,
        color,
        backGroundColor
    };
    saveSettings(settings);
    setSettings();
}

function setSettings() {
    const settings = getSettings()
    const elform = document.querySelector('.my-form');
    elform.style.backgroundColor = settings.backGroundColor;
    elform.style.color = settings.color;
    console.log(settings);
}

function onAgeChange(elAge) {
    document.querySelector('.age-display').innerText = elAge;
}

function showHoursToBirthday() {
    console.log('i try');
    document.querySelector('.hours-to-birthday').innerText = getHoursForBirthday();
}

function sendToSettings() {
    window.location= 'login-page.html';
}