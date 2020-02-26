import './main.scss';
import Jquery from 'jquery';
//import 'bulma'; car importer via sass
import './js/alert';
import './js/control-form'

let texte = "Hello"

setTimeout(() => {
    console.log("je teste pour vérifier que ma arrow function aura disparu au terme du processus de compilation de webpack." + texte);

    //alert('test');
    }, 500);

    //document.querySelector('.header').innerHTML = 'Yahoo'
    Jquery(".header").html('jquerry')
