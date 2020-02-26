import './main.scss';
import Axios from 'axios'; //import de la librairie axios

import Jquery from 'jquery';
//import 'bulma'; car importer via sass
import './js/alert';
import './js/control-form';
import './js/beers'


let texte = "Hello"

setTimeout(() => {
    console.log("je teste pour vérifier que ma arrow function aura disparu au terme du processus de compilation de webpack." + texte);

    //alert('test');
    }, 500);

    //document.querySelector('.header').innerHTML = 'Yahoo'
    Jquery(".header").html('jquerry')
