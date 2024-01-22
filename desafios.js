/*let altura = 1.75;
let peso =  82;
function calculaIMC(p,a){
    var imc = peso / (altura * altura);
    return  imc;
    
}
calculaIMC(altura,peso)
console.log(calculaIMC(altura,peso));*/


/////////////
/*
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);*/
  


/*function convertirDolaresAReales(dolares){
    var cotizacionDolar =  17.9;
    var pesos = dolares * cotizacionDolar;
    return pesos;
}

let valorEnDolar = 40;
let valorPesos = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dolares en Pesos son: $${valorPesos}`);*/

/*function calcularAreaYPerimetrorectangular(altura,anchura){
    var area = altura * anchura;
    var perimetro =2* (altura + anchura);
    console.log("Area: " + area);
    console.log("Anchura: " + perimetro)


}

let altura = 3;
let anchura = 5;
calcularAreaYPerimetrorectangular(altura,anchura);*/

/*function mostrartablaMultiplicar(numero){
    for(var i = 1; i <= 10; i++){
        var resultado = numero * i;
        console.log(numero + "x" + i + "=" + resultado);
    }
}

let numero = 7;
mostrartablaMultiplicar(numero);*/

/*let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2

let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

////////////////
*/
/*let ciudades = ["paris","italia","Londres","Argentina"];
console.log(ciudades);
//let ultimo = ciudades.pop();
//console.log(ultimo);

ciudades.unshift("CDMX");
let ciudadesUpdate  = ciudades.slice();
console.log(ciudadesUpdate);

ciudades.push("tokio");
let ciudadesUpdate2 = ciudades.slice();
console.log(ciudadesUpdate2);
/*let frutas = ["Manzana", "Banana"];

console.log(frutas.length);*/
// 2*/

//let listaGenerica[];
/*let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostrarLenguagesReversoSeparadamente();*/

/*function calcularMedia(lista){
  let suma = 0;
  for(let i = 0; i <lista.length; i++){
    suma += lista[i];
  }
  return suma / lista.length;
}  
  let numeros =[10,20,30,40];
  let media = calcularMedia(numeros);
  console.log('Media', media);*/


/*function encontrarMayorMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];
  for (let i = 1; i < lista.length; i++){
    if(lista[i] > mayor){
      mayor = lista[i];
    }
    if (lista[i] < menor){
      menor = lista[i];      
    }    
  }

  console.log('Mayor', mayor);
  console.log('Menor', menor);


}
let numeroa = [15,8,25,12,32,78,1];
encontrarMayorMenor(numeroa);*/

function calcularSuma(lista){
  let suma = 0;
  for(let i = 0; i < lista.length; i++){
    suma += lista[i];
  }
  return suma; 

}
let numeros = [15,8,25,5,12];
let suma = calcularSuma(numeros);
console.log('Suma: ', suma)
