let arrayNumeros = [1, 20, 33, 22, 31, 1, 0, 222, 33, 22, 535, 73];
let pares = arrayNumeros.filter(function(num){
    return num % 2 == 0;
  });
  console.log(pares);

  let arrayNumeros = [1, 20, 33, 22, 31, 1, 0, 222, 33, 22, 535, 73];
  let impares = arrayNumeros.filter(function(num){
      return num % 2 === 1;
  }); 
  console.log(impares);
/*const resultArrayNumerosPares = array.find(element => element )*/