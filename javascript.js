const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'div');
    container.appendChild(div);

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'yellow';
    })
}

let numero;
let cantidad = 16; //cantidad de divs, la voy a usar para resetear el tablero

function getNumber() {
     do {
        numero = window.prompt("Enter the number of squares per side (between 1 and 100)");
     }
     while(numero < 1 || numero > 100);
     cantidad = numero;
}


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    getNumber();
    makeSquare(numero);
})

function makeSquare(num) {
    container.innerHTML = '';

    for (let i = 0; i < num * num; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'div');
        container.appendChild(div);
    
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'yellow';
        })
    }

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

const btnReset = document.querySelector("#btnReset");

btnReset.addEventListener('click', () => {
    container.innerHTML = '';

    for (let i = 0; i < cantidad * cantidad; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'div');
        container.appendChild(div);
    
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'yellow';
        })
    }

    container.style.gridTemplateColumns = `repeat(${cantidad}, 1fr)`;
})
