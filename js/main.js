import {sendMessage,formSend} from "./tempalte.js";
const openButton = document.getElementById('open-dialog');
const dialog = document.getElementById('open-settings-window');
const closeButton = document.getElementById('settings-window__button-cloce');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});


formSend.addEventListener('submit', sendMessage);

