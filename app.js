//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Juego del número secreto"

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados= []; 
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

/*function intentoDeusuqario(){
    alert('Clic desde boton')
    console.log('btn 1 aplicado')
}*/

/*function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
}*/

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    ///console.log(parseInt(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    ///console.log(numeroDeUsuario === numeroSecreto);  // === igual en valor y tipo  
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';
}

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10) + 1;
    //return numeroSecreto
    let numeroGenerado = Math.floor(Math.random()*10) +1;
    //return Math.floor(Math.random()*10) +1;   

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearón todos los números posibles.')
    }else{
        //si ya sorteamos todos los numeros
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego del nùmero secreto');
    asignarTextoElemento('p', 'Indica un nùmero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limoar caja
    limpiarCaja();
    //inidcar mensaje de intervalo de numero
    // generar el num aleatorio  
    // reiniciar el num de intentos
    CondicionesIniciales();
    // deshabilidar el norn de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
     
}
CondicionesIniciales();
