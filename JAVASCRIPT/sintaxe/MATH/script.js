// let num = prompt("numero:")
// let numero = num
// document.body.innerHTML += `Seu numero é ${num} <br />`;
// document.body.innerHTML += `Raiz quadrada é ${num  = num ** 0.5}<br />`;
// document.body.innerHTML += `${num} é NaN? ${Number.isNaN(num)}<br />`
// document.body.innerHTML += `Arredondamento para baixo ${Math.floor(numero)}<br />`
// document.body.innerHTML += `Arrendodamento para cima ${Math.ceil(numero)}<br />`
// document.body.innerHTML += `com duas cassas decimais ${num.tofixed(2)}<br />`

let num = Number(prompt("informe um numero"));
// 55.1987555

let numero = document.getElementById('numero');

texto.innerHTML = '';
texto.innerHTML += `<p>O seu numero é ${num} </p>`;
texto.innerHTML += `<p>Raiz quadrada: ${num ** 0.5}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>Arredondamento para baixo:  ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondamento para cima:  ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casa decimais:${num.toFixed(2)}</p>`;


    


// numeros max e min em uma sequencia

// console.log(Math.max(1,2,3,4,5,6))
// console.log(Math.min(1,2,3,4,5,6))

