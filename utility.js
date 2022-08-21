function findPlayerName(event) {
    const playerName = event.target.parentNode.parentNode.children[0].innerText;
    return playerName;
}

function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const value = parseFloat(inputString);
    return value;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setValueById(id, newvalue) {
    const getId = document.getElementById(id);
    getId.innerText = newvalue;
}