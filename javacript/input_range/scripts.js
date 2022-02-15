
window.addEventListener("load", function () {
    let inputRange = document.querySelector('#inputRange')
    let valorInput = document.querySelector('.valorInput')

    valorInput.textContent = inputRange.value

   /*  inputRange.addEventListener("change", function () {
        let inputRangeValue = document.querySelector('#inputRange').value
        let valorInput = document.querySelector('.valorInput')
        valorInput.textContent = inputRangeValue
    }) */

    inputRange.addEventListener("input", function () {
        let inputRangeValue = document.querySelector('#inputRange').value
        let valorInput = document.querySelector('.valorInput')

        /* console.log('el numero es:', inputRangeValue) */
        valorInput.textContent = inputRangeValue
    })
    
});