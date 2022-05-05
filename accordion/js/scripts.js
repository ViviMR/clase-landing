console.log("te amo mucho mi vida");
//seleccionamos todos los items, con la clase "acordeon-item"
let acordeones = document.querySelectorAll(".acordeon-item");

//mostramos todos los acordeones
console.log(acordeones);

//Dividimos cada item por medio de un forEach, para poder efectuar una funcion cuando le damos click
acordeones.forEach((acordeonItem) => {
  acordeonItem.addEventListener("click", (event) => {
      let informacion_del_elemento_clikeado = event

      let html_seleccionado = informacion_del_elemento_clikeado.target

      let padre_del_html_seleccionado = html_seleccionado.parentElement

    padre_del_html_seleccionado.querySelector('.content').classList.toggle('active')
  });
});
