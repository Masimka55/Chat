export const formSend = document.querySelector('.form-chat');
const inputChat = document.querySelector('.form-chat__input');
const listMessages = document.querySelector('.display-chat');
const template = document.getElementById('template-message');
const myNameInChat = document.getElementById('my-name-in-chat');

export function sendMessage(event) {
    event.preventDefault();

    const messageInputField = inputChat.value;
    const templateContent = template.content.cloneNode(true);

    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    templateContent.querySelector('.chat-message__my-messages').textContent = myNameInChat.textContent + ' ' + messageInputField;
    templateContent.querySelector('.chat-message__time').textContent = timeString;

    listMessages.prepend(templateContent);
    inputChat.value = '';
}


