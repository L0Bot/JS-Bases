/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* BONUS */
let score = 0;



/* Exo 1 */
// Ton code ici...

const question1 = "Quelle mer borde la ville de Sébastopol ?";
const solution1 = "la mer Noire";


/* Exo 2 */
// Ton code ici...
const reponse1 = prompt(question1);

if (reponse1 === solution1) {
    alert('Gagné');
    // entre ces accolades, on est dans le cas de figure où la réponse est la bonne, ce qui fait de cet endroit l'endroit le plus adapté pour augmenter (ou plutôt incrémenter) le score de l'utilisateur
    score = score + 1;
    // incrémentation alternative
    // score++;
    //score += 1;  

} else {
    alert('Perdu...');
}

/* Exo 3 */
// Ton code ici...
const question2 = "Quel est l'âge du capitaine ?";
const solution2 = 63;

const reponse2 = prompt(question2);

// pour comparer reponse2 et solution2 avec un triple "=", on a besoin que les 2 variables soient du même type
// pour se faire, on va utiliser parseInt qui a pour objectif de convertir ce qu'on lui passe entre parenthèses dans la base donnée, et de renvoyer le résultat converti en valeur de retour


const reponseConvertie = Number(reponse2);
/* alternative à Number
    const reponseConvertie = parseInt(reponse2, 10);
*/


// maintenant que la réponse a été convertie, on va l'utiliser dans le if pour vérifier si elle est égale à solution2

if (reponseConvertie === solution2) {
    alert('Gagné');
    score = score + 1;
} else {
    alert('Perdu...');
}

if (score <= 0) {
    alert("pas de bonnes réponses :/")
} else if (score === 1) {
    alert('Bravo ! vous avez 1 bonne réponse')
} else {
    alert("Bravo ! Vous avez " + score + " bonnes réponses!")
}
