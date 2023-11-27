function handleUpdateButton(evt) {
    // toute méthode handler reçoit en premier paramètre toutes les informations
    // sur l'évènement qui vient de se produire
    // cela nous permet par exemple de savoir quel élément du DOM est à l'origine 
    // de l'évènement
    console.log('évènement qui vient de se produire :', evt);

    // Attention : evt.target peut retourner une des sous-éléments
    // de l'élément sur lequel on avait ajouté l'évènement :
    // - par exemple, si on clique précisément sur le span qui contient
    // le compteur, evt.target correspondra à l'élément span
    // - si on clique sur le bouton mais en dehors de l'élément span,
    // on récupère bien l'élément bouton
    console.log('evt.target :', evt.target);
    console.log('evt.currentTarget :', evt.currentTarget);

    // evt.currentTarget permet de récupérer l'élément sur lequel l'écouteur
    // d'évènement avait été ajouté
    const clickedButton = evt.currentTarget;

    console.log('id du clickedButton :', clickedButton.id);

    if (clickedButton.id == 'yes') {
        console.log('tu as cliqué sur OUI');
        // on récupère le span du yes
        const yesSpan = document.getElementById('counter-yes');
        // on met à jour le contenu du span en incrémentant le compteur
        // on utilise Number pour convertir le textContent en nombre
        // on aurait pu aussi utiliser parseInt
        yesSpan.textContent = Number(yesSpan.textContent) + 1;
    } else {
        console.log('tu as cliqué sur NON');
        // on récupère le span du no
        const noSpan = document.getElementById('counter-no');
        // on met à jour le contenu du span en incrémentant le compteur
        noSpan.textContent = Number(noSpan.textContent) + 1;
    }
}


// On sélectionne nos 2 boutons
const buttonYes = document.getElementById('yes');
// const buttonYes = document.querySelector('#yes');
const buttonNo = document.getElementById('no');

// On ajoute nos écouteurs d'évènements sur nos boutons
buttonYes.addEventListener('click', handleUpdateButton);
buttonNo.addEventListener('click', handleUpdateButton);