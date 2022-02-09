'use strict';
const SETTINGS_STORAGE= 'settingsDB'

function getSettings(){
    return loadFromStorage(SETTINGS_STORAGE)
}

function saveSettings(val){
    saveToStorage(SETTINGS_STORAGE, val)
}

function getHoursForBirthday(){
    const settings = loadFromStorage(SETTINGS_STORAGE);
    const date = settings.date;
    const time = settings.time;
     return((31556952000-(new Date()-new Date((date+'T'+time+':00'))))/3600000);
}