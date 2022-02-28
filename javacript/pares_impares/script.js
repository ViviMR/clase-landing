window.addEventListener('load', () => {
  console.log('Document load')
})
let numbers = document.querySelector('#numbers')

let buttonPares = document.querySelector('#button_pares')
let buttonImpares = document.querySelector('#button_impares')

let arrayNumbers = [1, 20, 33, 22, 31, 1, 0, 222, 33, 22, 535, 73];

buttonPares.addEventListener('click', () => ('button_pares') )
buttonImpares.addEventListener('click', () => ('button_impares') )


/*
let pares = arrayNumeros.filter(function(num){
    return num % 2 == 0;
  });
  console.log(pares);

  let arrayNumeros = [1, 20, 33, 22, 31, 1, 0, 222, 33, 22, 535, 73];
  let impares = arrayNumeros.filter(function(num){
      return num % 2 === 1;
  }); 
  console.log(impares);*/