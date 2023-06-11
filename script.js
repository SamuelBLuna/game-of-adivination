const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

const screenOne =   document.querySelector('.screen1')
const screenTwo =   document.querySelector('.screen2')

let input = document.querySelector('#inputNumber')


// Função Callback

function handleTryClick(event) {
    event.preventDefault()

    if(Number(input.value) == randomNumber) {
        screenOne.classList.add('hide')
        screenTwo.classList.remove('hide')

        document.querySelector('h2 span').innerText = xAttempts
    }

    input.value = ''
    
    xAttempts++;
}

/*Evetos*/

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screenOne.classList.remove('hide')
    screenTwo.classList.add('hide')

    input.value = '';
    xAttempts = 1;
});

