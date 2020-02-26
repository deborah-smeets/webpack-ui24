import Axios from "axios"; //import de la librairie axios

let urlApi ='https://api.punkapi.com/v2/beers'

let beerListUl = document.querySelector('ul.beers-list')

if (beerListUl) { // si beerlist existe, alors on va lancer la requète
  Axios.get(urlApi)
  .then( response => { //quand il a la réponse
    //console.log(response.data.length)
    let arrayBeers = response.data
    arrayBeers.forEach(beer => {
      let template = `
      <li>
        <a class="list-item">
          ${beer.name}
        </a>
      </li>
    `
    beerListUl.innerHTML += template
    })
  })
  .catch(function() { //si il y a une erreur
    alert('erreur ajax') //alors il y a une alerte
  })
}
