window.addEventListener('load', () => {
    console.log('Document load')
    let options = [0, 1, 2, 3, 4, 5, 6, 90, 40]
    let optionsNumbers = document.querySelector('#numbers')

    options.map((option) => {
        optionsNumbers.innerHTML += `<option value="${option}">${option}</option>`
    })

    let buttonCalcular = document.querySelector('#calcular')
    let buttonCalcularCopy = document.querySelector('#calcularCopy')

    /*   let numeroDigitado = 2 */
    let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    buttonCalcular.addEventListener('click', () => Calcular('verde'))
    buttonCalcularCopy.addEventListener('click', () => Calcular('rojo'))

    const Calcular = (color) => {
        let valorSelect = document.querySelector('#numbers').value
        document.querySelector(".table_container_content").innerHTML = ''

        arrayNumbers.map((numeroDelArray) => {
            document.querySelector(".table_container_content").innerHTML += `<div class="numero${color}">${valorSelect} x ${numeroDelArray} = ${numeroDelArray * valorSelect}</div>`
            console.log('numero del Array', numeroDelArray * valorSelect)
        })

    }
})