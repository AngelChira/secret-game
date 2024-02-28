let numeroSecreto = 0;
let intentos = 0;
let listNumerosSorteados = [];
let numeroMaximo = 10;
// let numeroIntentos = 3;  //Reto

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acercaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroSecreto > numeroUsuario){
      asignarTextoElemento('p', 'El número secreto es mayor');
    } else {
      asignarTextoElemento('p', 'El número secreto es menor');
    }
    intentos++;
    limpiarNumero();
  }
  return;
}

function limpiarNumero() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listNumerosSorteados);
  if(listNumerosSorteados.length == numeroMaximo) {
  // if(listNumerosSorteados.length > numeroIntentos) {   // Reto
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  } else {
    if (listNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    } else {
      listNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function inicioJuego() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Escriba un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto(); 
  intentos = 1; 
}

function reiniciarJuego() {
  limpiarNumero();
  inicioJuego();
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

inicioJuego();
