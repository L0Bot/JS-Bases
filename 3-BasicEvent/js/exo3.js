// la fonction handleFormSubmit sera déclenchée à chaque soumission du formulaire
function handleFormSubmit(evt) {
    // par défaut, quand un formulaire est soumis, il envoie toutes les données
    // sur la même page ou sur une autre page
    // Cela provoque un rechargement de la page
    // => ce n'est pas ce qu'on veut car nous on veut intercepter les données
    // pour s'en servir et aller créer une nouvelle entrée dans notre liste de courses
    // Pour bloquer ce fonctionnement par défaut, on va utiliser :
    evt.preventDefault();
    // console.log('Je passe dans handleFormSubmit');

    // On récupère le champ input
    const inputEl = document.querySelector('#shop-item-input');
    console.log('inputEl :', inputEl);

    // On récupère la valeur saisie par l'utilisateur
    const inputValue = inputEl.value;
    console.log('inputValue :', inputValue);

    // On veut désormais ajouter le produit dans la liste de courses shop-items
    const shopItemsList = document.querySelector('#shop-items');
    // console.log('shopItemsList :', shopItemsList);
    // le += permet de ne pas écraser le contenu précédent
    // shopItemsList.innerHTML += '<li>' + inputValue + '</li>';

    // on pouvait également créer l'élément li avec createElement
    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputValue;
    shopItemsList.append(newLiElement);

    // Ergonomie => on vide le champ texte une fois le produit ajouté
    inputEl.value = '';
}

// On veut ajouter un écouteur d'évènement au submit sur le formulaire
// On récupère d'abord l'élément formulaire
const formEl = document.querySelector('#shop-item-form');
// console.log('formEl :', formEl);

// On ajoute l'écouteur d'évènement
formEl.addEventListener('submit', handleFormSubmit);