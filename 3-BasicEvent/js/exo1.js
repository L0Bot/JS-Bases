// ---------------------------------------------------------
// Gestion compteur de clics
// ---------------------------------------------------------

let counter = 0;

function handleUpdateCounter() {
    console.log('Je passe dans handleUpdateCounter');

    // On incrémente le compteur
    counter++;
    // console.log('valeur de counter : ', counter);

    // On récupère l'élément qui contient le compteur dans la page HTML
    const counterEl = document.querySelector('#counter');
    // console.log('counterEl :', counterEl);

    // On met à jour le contenu du counterEl
    counterEl.textContent = counter;
}


// On sélectionne l'élément sur lequel on veut surveiller les clics
const buttonEl = document.querySelector('#button');

// On ajoute un écouteur d'évènement sur l'élément
buttonEl.addEventListener('click', handleUpdateCounter);
// il ne faut jamais mettre des parenthèses après le nom de la fonction :
// => buttonEl.addEventListener('click', handleUpdateCounter());
// si on met des parenthèses cela exécute la fonction immédiatement lors de 
// l'ajout de l'écouteur d'évènement mais cela n'associe aucune action
// à déclencher lorsque l'évènement se produit