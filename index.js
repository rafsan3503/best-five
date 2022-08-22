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

        // create li by js 
        const li = document.createElement('li');
        li.innerText = playerName;
        li.setAttribute('class', 'mt-3');
        li.setAttribute('class', 'p-3');
        li.style.background = 'linear-gradient(to right, #4ca1af, #c4e0e5)';


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
        setValueById("player-expenss", 0);

    }
    // conditon for NaN type 
    else if (isNaN(perPlayer) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a valid input!',
        })
        setValueById("player-expenss", 0);

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
        setValueById('expenss-total', 0);

    }
    // condition for NaN 
    else if (isNaN(manager) == true || isNaN(coach) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Provide a valid input!',
        })
        setValueById('expenss-total', 0);

    }
    else {
        // set value 
        setValueById('expenss-total', newTotalExpenss);
        
    }
})