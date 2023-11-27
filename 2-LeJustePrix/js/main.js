
const game = {};


// Le nombre max
game.max = 500;
game.min = 0;
// scores est un tableau, qui va héberger chaque score des joueurs
game.scores = [];

function generateRandomNumber(min, max) {
    // une fonction peut renvoyer une valeur, ici on souhaite renoyer la valeur du nombre aléatoire généré
    return Math.round(Math.random() * (max - min) + min);
}

function play() {

    // Le nombre cherché
    game.searchedNumber = generateRandomNumber(game.min, game.max);
    console.log(game.searchedNumber);
    // Le nombre saisi
    let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

    // Le nombre d'essais
    game.attempts = 1;

    // Tant que le nombre saisi n'est pas bon on redemande un nombre
    while (enteredNumber !== game.searchedNumber) {
        // on vérifie que l'utilisateur a répondu, sinon on sort de la boucle
        if(!enteredNumber){
            break;
        }
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (enteredNumber < game.searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        game.attempts += 1;
    }

    // on est sorti de la boucle, c'est soit que le nombre saisi est bien le nombre cherché
    // soit que le joueur n'a pas répondu et que enteredNumber est 'falsy'
    // ici on vérifie juste l'existence de enteredNumber, si cette variable existe, elle a été utilisée dans la boucle d'au dessus, et donc le jeu a été lancé
    // if(enteredNumber) ===> équivalent de   if (eteredNumber === true)
    if(enteredNumber){
        // on affiche un message de victoire
        alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attempts);
        // on a récupéré le score de l'utilisateur, on lui a mentionné son score, on peut maintenant le sauvegarder
        // game.attempts représente le score du joueur
        game.scores.push(game.attempts);
        // affichage des scores
        // on prépare le message
        let scoreMessage = '';
        // pour chaque score ... 
        for (let count = 0; count < game.scores.length; count++) {
            scoreMessage += 'Partie ' + (count + 1) + ' : ' + game.scores[count] + ' tentatives \n';
        }
        
        // on affiche le message
        alert(scoreMessage)

    } else {
        // on affiche un message d'abandon
        alert('Vous abandonnez ? Dommage...');
    }
    // confirm renvoie true ou false, si le joueur veut rejouer, confirm renverra true, et on lancera la fonction play();
    if (confirm("voulez-vous rejouer?") === true) {
        // on appelle play dans play, c'est du RECURSIF
        play();
    }
}

play();








