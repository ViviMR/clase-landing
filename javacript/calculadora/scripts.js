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
    let buttonBorrar = document.querySelector('#borrar')
    let buttonResta = document.querySelector('#resta')
    let buttonSuma = document.querySelector('#suma')
    let buttonDivision = document.querySelector('#division')
    let buttonMultiplicacion = document.querySelector('#multiplicacion')
    let buttonIgual = document.querySelector('#igual')

    let valorAnterior = 0
    let valorNuevo = 0
    let signoNumerico = ''

    let espacioDeLosNumeros = document.querySelector('#campo')

    buttonOne.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('1') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 1
    })
    buttonTwo.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 2
    })
    buttonThree.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 3
    })
    buttonFour.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 4
    })

    buttonFive.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 5
    })
    buttonSix.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 6
    })
    buttonSeven.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 7
    })
    buttonEight.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 8
    })
    buttonNine.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 9
    })
    buttonZero.addEventListener('click', function () {
        let valorDeLosNumeros = document.querySelector('#campo').value
        /* console.log('2') */
        espacioDeLosNumeros.value = valorDeLosNumeros + 0
    })

    buttonBorrar.addEventListener('click', function () {
        let valorCampo = document.querySelector('#campo')
        valorCampo.value = ''
    })
    buttonResta.addEventListener('click', function () {
        let valorActual = document.querySelector('#campo').value
        valorAnterior = valorActual
        document.querySelector('#campo').value = ''
        signoNumerico = 'restar'
    })

    buttonSuma.addEventListener('click', function () {
        let valorActual = document.querySelector('#campo').value
        valorAnterior = valorActual
        document.querySelector('#campo').value = ''
        signoNumerico = 'sumar'
    })


    buttonDivision.addEventListener('click', function () {
        let valorActual = document.querySelector('#campo').value
        valorAnterior = valorActual
        document.querySelector('#campo').value = ''
        signoNumerico = 'division'

    })
    buttonMultiplicacion.addEventListener('click', function (){
        let valorActual = document.querySelector('#campo').value
        valorAnterior = valorActual
        document.querySelector ('#campo').value = ''
        signoNumerico = 'multiplicacion'
    })
    

    buttonIgual.addEventListener('click', function () {
        let valorActual = document.querySelector('#campo').value
        valorNuevo = valorActual
        console.log(typeof valorAnterior, typeof valorNuevo)
        if (signoNumerico == 'restar') {
            document.querySelector('#campo').value = valorAnterior - valorNuevo
        }
        if (signoNumerico == 'sumar') {
            document.querySelector('#campo').value = parseInt(valorAnterior) + parseInt (valorNuevo)
        }
        if (signoNumerico == 'division'){
            document.querySelector('#campo').value = valorAnterior / valorNuevo
        }
        if (signoNumerico == 'multiplicacion'){
            document.querySelector('#campo').value = valorAnterior * valorNuevo
        }
    })

})