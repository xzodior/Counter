const display = document.querySelector('#display');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');

let count = 0;

subtract.addEventListener('click', () => {
    count--;
    updateDisplay();
})

add.addEventListener('click', ()=>{
    count++;
    updateDisplay();
})

function updateDisplay(){
    display.innerHTML = count;
    const displayColor = document.getElementById('display')
    if (count > 0) {
        displayColor.style.color = '#22c55e';
    } else if (count < 0) {
        displayColor.style.color = '#7f1d1d';
    } else {
        displayColor.style.color = 'white';
    }
}

updateDisplay();