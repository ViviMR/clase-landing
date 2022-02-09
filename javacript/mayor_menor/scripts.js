/* obtener el boton completo del html */
/* NO EL VALOR DE CADA UNO */
let inputCalcular = document.querySelector('#calcular')

/*
 addEventListener de click al elemento inputCalcular = al boton calcular
inputCalcular.addEventListener('click',function(){
    console.log('le di click al boton calcular');
}) 
*/

/* al darle click ejecutamos una function, y esa funcion se llama callback 'function ()'*/
inputCalcular.addEventListener('click', function () {
    /* aqui estamos obteniendo el input del html */
    let inputNumero1 = document.querySelector('#numero1').value
    let inputNumero2 = document.querySelector('#numero2').value
    let inputOption = document.querySelector('#options').value

    console.log('le di click al boton Calcular');

    /*
    prueba de suma con los valores string convertidos a numeros
    usando el metodo parseInt("string a cambiar")
    console.log('suma de prueba',parseInt(inputNumero1) + parseInt(inputNumero2));
    */
    let resultado = mayorMenor(parseInt(inputNumero1), parseInt(inputNumero2), inputOption)
    document.querySelector('#resultado').value = resultado
    console.log('RESULTADO', resultado);
})

/* function mayorMenor() {} */
/* 
Funcion inicial de mayor, menor o igual
function mayorMenor(num1, num2) {

    console.log('numero 1 en la funcion', num1)
    console.log('numero 2 en la funcion', num2)

    let resultado

    if (num1 > num2) {
        resultado = 'true'
    }

    else if (num1 < num2) {
        resultado = 'false'
    }

    else if (num1 = num2) {
        resultado = 'igual'
    }

    return console.log('Resultado final', resultado)
} */

function mayorMenor(num1, num2, option) {
    switch (option) {
        case "mayor": {
            if (num1 > num2) {
                return 'Si es mayor'
            }
            else {
                return 'No es mayor'
            }
        }
        case "menor": {
            if (num1 < num2) {
                return 'Si el numerito es Menor'
            }
            else {
                return 'estas equivocado es Mayor'
            }
        }
        case "igual": {
            /* console.log('ENTRO A IGUAL'); */
            if (num1 == num2) {
                return `si los numeros ${num1} y ${num2} son iguales`
            }
            else {
                return 'super equivocado es diferente'
            }
        }
        default: {
            return ''
        }
    }
}
