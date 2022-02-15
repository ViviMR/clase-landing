window.addEventListener("load", function () {
    console.log('Calculadora activada');

    let buttonOne = document.querySelector('#one')
    let buttonTwo = document.querySelector('#two')
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
})