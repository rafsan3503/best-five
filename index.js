const buttons = document.getElementsByClassName('btn');
const playerArray = [];

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // const plyerName = event.target.parentNode.parentNode.children[0].innerText;
        const playerName = findPlayerName(event);
        playerArray.push(playerName);
        
        
        const orderList = document.getElementById('player-list');

        // const li = document.createElement('li');
        // li.innerText = playerName;

        const tr = document.createElement('tr');
        const td1 = document.createElement('th');
        const td2 = document.createElement('th');
        td1.innerText = playerArray.length;
        td2.innerText = playerName;
        tr.appendChild(td1);
        tr.appendChild(td2);


        if (playerArray.length > 5) {
            alert('You cannot select more than 5 player')
        }
        else {
            orderList.appendChild(tr);
            event.target.setAttribute('disabled', 'true');
        }
    })
}

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = getInputValueById('per-player');
    
    const newExpenss = perPlayer * playerArray.length;
    

    if (perPlayer < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a positive input!',
        })
    }
    else if (isNaN(perPlayer) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a valid input!',
        })
    }
    else {
        setValueById("player-expenss", newExpenss);
    }
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const manager = getInputValueById('manager');
    const coach = getInputValueById('coach');
    const playerExpenss = getElementValueById('player-expenss');

    const newTotalExpenss = playerExpenss + manager + coach;
    if (manager < 0 || coach < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a positive input!',
        })
    }
    else if (isNaN(manager) == true || isNaN(coach) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a valid input!',
        })
    }
    else {
        setValueById('expenss-total', newTotalExpenss);
        
    }
})