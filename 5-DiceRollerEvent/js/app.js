// ------------------------------------------------------------------------
// Fonctions
// ------------------------------------------------------------------------

function generateRandomNumber(min, max) {
    const newRandomNumber = Math.round(Math.random() * (max - min) + min);

    // Si on oublie le return, la fonction retourne 'undefined'
    return newRandomNumber;
}

function createDice(targetId) {
    const dice = document.createElement('div');
    // Ajout d'une classe avec classList
    dice.classList.add('dice');
    // console.log('dice : ', dice);

    // positionnement de l'image de fond du dé
    const diceValue = generateRandomNumber(1, 6);
    // pour afficher 1 : background-position-x doit valoir 0
    // pour afficher 2 : background-position-x doit valoir -100px
    // pour afficher 3 : background-position-x doit valoir -200px
    // pour afficher 4 : background-position-x doit valoir -300px
    // pour afficher 5 : background-position-x doit valoir -400px
    // pour afficher 6 : background-position-x doit valoir -500px
    dice.style.backgroundPositionX = ((diceValue - 1) * -100) + 'px';
    // Autre posibilité, plutôt que de modifier les styles directement sur l'élément,
    // on aurait pu faire 6 classes CSS différentes avec des valeurs de background-position-x
    // correspondant aux 6 emplacements de l'image .dice-1, .dice-2 etc... et gérer
    // l'ajout de la bonne classe en fonction de valeur du nombre aléatoire
    // dice.classList.add('dice-' + diceValue);

    // Récupération du div avec l'id player
    const targetContainer = document.getElementById(targetId);

    // On ajoute le dice dans le targetContainer
    targetContainer.append(dice);
}

function resetBoards() {
    document.getElementById('player').innerHTML = '';
    document.getElementById('dealer').innerHTML = '';
}

function handleDiceNumberFormSubmit(evt) {
    // on bloque l'envoi du formulaire
    evt.preventDefault();

    // on récupère la valeur de l'input
    const nbDices = Number(document.getElementById('dice-number-input').value);
    // console.log('Nombre de dés souhaité :', nbDices);

    // on vide les 2 boards
    resetBoards();

    // On crée autant de dés que le nombre saisi par l'utilisateur
    // createDices(nbDices, 'player');
    // createDices(nbDices, 'dealer');

    // setTimeout permet d'exécuter une action en différé :
    // en premier on fournit le nom de la fonction à exécuter
    // en deuxième le délai en millisecondes
    // ensuite les arguments à fournir à la fonction s'il y en a
    setTimeout(createDices, 500, nbDices, 'player');
    setTimeout(createDices, 1500, nbDices, 'dealer');
}

// Je veux faire une fonction qui crée le nombre de dés que je veux
// et dans le container que je veux
function createDices(nbDicesToCreate, targetContainerId) {
    // On crée autant de dés que le nombre saisi par l'utilisateur
    for (let i = 1 ; i <= nbDicesToCreate ; i++) {
        createDice(targetContainerId);
    }
}

// ------------------------------------------------------------------------
// Application Dice Roller
// ------------------------------------------------------------------------

// On récupère l'élément formulaire
const formEl = document.getElementById('dice-number-form');
// On ajoute l'écouteur d'évènement sur le formulaire
formEl.addEventListener('submit', handleDiceNumberFormSubmit);