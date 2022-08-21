// list of buttons 
const buttons = document.getElementsByClassName('btn');

// empty array for count player number 
const playerArray = [];

// set evetnt listener on every button 
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const playerName = findPlayerName(event);
        
        playerArray.push(playerName)
        
        const orderList = document.getElementById('player-list');

        const li = document.createElement('li');
        li.innerText = playerName;
        li.setAttribute('class', 'mt-3');
        li.style.background = 'linear-gradient(to right, #4ca1af, #c4e0e5)';

        // // create table row 
        // const tr = document.createElement('tr');
        // const td1 = document.createElement('th');
        // const td2 = document.createElement('th');

        // // set row value with number and name 
        // td1.innerText = playerArray.length;
        // td2.innerText = playerName;

        // // append child 
        // tr.appendChild(td1);
        // tr.appendChild(td2);

        // condition for bonus mark 
        if (playerArray.length > 5) {
            Swal.fire({
                icon: 'error',
                title: 'Sorry...',
                text: 'You cannot select more than 5 players!',
            })
            playerArray.pop();
        }
        else {
            orderList.appendChild(li);
            // button disable for bonus mark 
            event.target.setAttribute('disabled', 'true');
        }
    })
}

// event listener on calculate button 
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = getInputValueById('per-player');
    
    // calculate player expenss 
    const newExpenss = perPlayer * playerArray.length;
    
    // condition for negetive value 
    if (perPlayer < 0) {
        // sweet alert 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a positive input!',
        })
    }
    // conditon for NaN type 
    else if (isNaN(perPlayer) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a valid input!',
        })
    }
    else {
        // set new value 
        setValueById("player-expenss", newExpenss);
    }
})

// add event listener on calculate total button 
document.getElementById('calculate-total').addEventListener('click', function () {
    // manager input value 
    const manager = getInputValueById('manager');
    // coach input value 
    const coach = getInputValueById('coach');
    // playerexpenss value 
    const playerExpenss = getElementValueById('player-expenss');

    // new value 
    const newTotalExpenss = playerExpenss + manager + coach;

    // conditon for negetive value 
    if (manager < 0 || coach < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a positive input!',
        })
    }
    // condition for NaN 
    else if (isNaN(manager) == true || isNaN(coach) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a valid input!',
        })
    }
    else {
        // set value 
        setValueById('expenss-total', newTotalExpenss);
        
    }
})