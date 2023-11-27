function rollDice(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function diceCreation(playerName) {
    let divDice = document.createElement('div');
    divDice.classList.add('dice');
    let divPlayer = document.getElementById(playerName);
    divPlayer.appendChild(divDice);
    diceRolled = rollDice(1, 6);
    console.log("DiceValue", diceRolled);
    divDice.style.backgroundPosition = (700 - diceRolled * 100) + "px";
}
function startGame() {
    howManyDice = Number(prompt("Combien de dé voulez-vous lancer ?"));
    for (let diceNumber = 0; diceNumber < howManyDice; diceNumber++) {
        for (player of playerList) {
            diceCreation(player);
        }
    }
}
function createNewPlayer(userID) {
    let divUser = document.createElement('div');
    divUser.classList.add('board');
    divUser.setAttribute('id', userID);
    let randomColor = 'rgb(' + rollDice(0, 255) + ',' + rollDice(0, 255) + ',' + rollDice(0, 255) + ')';
    // divUser.style.backgroundColor = randomColor;
    divUser.setAttribute('style', ("background-color: " + randomColor));
    let appBox = document.getElementById('app');
    appBox.appendChild(divUser);
}
let playerList = [];
const howManyPlayers = Number(prompt('Combien de joueurs?'));
for (let index = 0; index < howManyPlayers; index++) {
    playerList.push('player' + index);
    createNewPlayer(playerList[index]);
}
startGame();