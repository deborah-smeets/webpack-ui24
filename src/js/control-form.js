let allRequireds = document.querySelectorAll("[required]")
let btn = document.querySelector('button[disabled]')
console.log(allRequireds)
let test = true // par défaut ils sont tous sur faux car ils sont vides

allRequireds.forEach(required => {
  required.addEventListener("change", function () {
    //alert('test')
    /*//test du champ modifié
    if ( this.value == '') {test = false}
    else { test = true}*/

    //test des autres champs
    for (let i = 0; i < allRequireds.length; i++) {
      let theField = allRequireds[i]
      console.log(theField)
      if (theField.value == '') {
        test = false
        theField.classList.add('is-danger') //ajout la class is-danger de Bulma
        break
      }
      else {
        test = true
        theField.classList.remove('is-danger') //retire la class is-danger de Bulma
      }
    }

    if (test == true) {
      btn.removeAttribute('disabled')
    }
    else {
      btn.setAttribute('disabled', true)
    }
  }
  )
})
