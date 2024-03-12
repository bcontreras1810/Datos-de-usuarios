//creo una constante, la cual tendra la IIFE como valor asignado /* const userData = (() => {} ) (); */
const userData = (() => {
  //creo la constante container que selecciona un contenedor en el DOM con el id Super-data 
  const container = document.querySelector("#user-data");
  //se retorna un objeto con un metodo show que utiliza async/await para hacer una solicitus a la api
  return {
    show: async () => {
      let response = await fetch("https://randomuser.me/api/?results=10");
      let data = await response.json();
      //dentro del metodo show creamos una constante que almacena los datos de los usuarios, usamos el metodo map para iterar y creae las tarjetas HTML que tenga la informacion solicitada 
      const userInfo = data.results
        .map(
          (i) =>  `
            <div class="row">
            <div class="col">
              <div class="card">
                <img src="${i.picture.large}" class="img-fluid rounded-start" alt="">
                <div class="card-body">
                  <h2 class="card-text">${i.name.first} ${i.name.last}</h2>
                  <p class="card-text">${i.email}</p>
                  <p class="card-text"><small class="text-body-secondary">${i.cell}</small></p>
                </div>
              </div>
            </div>
            `
        )
        //concatena todos estos elementos en una sola cadena.
        .join("");
      //en el contenedor del DOM inserto en el HTML la informacion de la tarjeta 
      container.innerHTML = userInfo;
    },
  };
})();
//se llama al metodo show en la instancia userData lo que hace que muestre los datos de la api en la pagina web
userData.show();
