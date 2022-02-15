window.addEventListener("load", function () {
    console.log('Calculadora activada');

    let buttonOne = document.querySelector('#one')
    let buttonTwo = document.querySelector('#two')
    let buttonThree = document.querySelector('#three')
    let buttonFour = document.querySelector('#four')
    let buttonFive = document.querySelector('#five')
    let buttonSix = document.querySelector('#six')
    let buttonSeven = document.querySelector('#seven')
    let buttonEight = document.querySelector('#eight')
    let buttonNine = document.querySelector('#nine')
    let buttonZero = document.querySelector('#zero')
    let opSuma = document.querySelector('#suma')
    let espacioDeLosNumeros = document.querySelector('#campo')

    buttonOne.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('1') */
        espacioDeLosNumeros.value = valorDeLosNumeros+1
    })
    buttonTwo.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+2
    })
    buttonThree.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+3
    })
    buttonFour.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+4
    })
    
    buttonFive.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+5
    })
    buttonSix.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+6
    })
    buttonSeven.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+7
    })
    buttonEight.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+8
    })
    buttonNine.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+9
    })
    buttonZero.addEventListener('click',function(){
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros+0
    })

})