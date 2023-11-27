

const app = {

    styles: [
        'plain', 'empty', 'light', 'highlight'
    ],
    paletteElem: '',
    choosenColor: 'plain',
    init: function() {
        app.createForm();
        app.createPalette();
        app.createPixelBoard(10);     
    },

    // callbacks
    // cette fonction est appellée lorsqu'on clique sur un pixel, cette fonction étant liée à un eventListener, on récuoère une "boite noire", un historique et des détails sur l'évènement qui a eu lieu
    handleClickOnPixel: function (event) {
        // dans le cas où on écouterait tout le DOM, on aurait besoin de vérifier l'élément sur lequel on clique
        // if (event.target.classList.contains('pixel') === true){
        //     event.target.style.backgroundColor = 'white';
        // }

        // on peut récupérer le pixel sur lequel l'utilisateur a cliqué
        console.log(event.target);
        // event.target.setAttribute('style', "background-color:white");
        // alternative :
        // toggle permet de réaliser un choix binaire, un peu comme un interrupteur, il enlève ou ajoute une classe à un élément selon sa présence
        // BONUS :
        // on enlève les autres classes du pixel
        event.target.classList.remove('pixel--empty', 'pixel--plain', 'pixel--light', 'pixel--highlight');
        // alternative : 
        //event.target.className = 'pixel';
        
        // Anciennement avant que le choix de la couleur se fasse via choosenColor on avait 2 couleurs, le fait qu'il y ait 2 choix permet de faire un toggle : 
        // toggle va ajouter la classe pixel black si elle n'est pas présente ou l'enlever si elle est déjà là
        event.target.classList.toggle('pixel--black');

        
        event.target.classList.add('pixel--' + app.choosenColor);
    },

    handleSubmitForm: function (event) {
        event.preventDefault();
        // on récupère les inputs du formulaire
        console.log(event);
        console.log(event.target[0].valueAsNumber);
        console.log(event.target[1].valueAsNumber);

        // entre les parenthèses, on passe la valeur numérique du premier champ du formulaire AKA la taille de la grille
        // en 2eme paramètre on va passer la taille des pixels
        const gridSize = event.target[0].valueAsNumber;
        const pixelSize = event.target[1].valueAsNumber;
        // avant de créer la grille, on va effacer l'ancienne
        document.querySelector('#invader').innerHTML = '';
        app.createPixelBoard(gridSize, pixelSize);
    },

    handleColorClick: function(event) {

        console.log('handling color');
        // on récupère l'ancienne couleur selectionnée (pour pouvoir lui enlever la classe 'selectionnée')
        const oldColorSelected = document.querySelector('.palette-color--active');
        oldColorSelected.classList.remove('palette-color--active');

        // on récupère la nouvelle couleur
        event.target.classList.add('palette-color--active');
        app.choosenColor =  event.target.dataset.colorName;
    },


    // méthodes de création

    // BONUS : créer la palette de couleurs
    createPalette: function(){
        // on crée l'élément qui récupère la palette
        app.paletteElem = document.createElement('div');
        // ci dessous la classe pour la palette
        app.paletteElem.classList.add('bourg')

        // on ajoute l'élément au DOM
        document.body.appendChild(app.paletteElem);

        // on crée les couleurs
        for (const color of app.styles ) {
            app.addColorToPalette(color);
        }
    },

    addColorToPalette: function(color) {
        // on crée un élément cliquable
        const colorElem = document.createElement('a');
        colorElem.classList.add('pixel--' + color);

        // on gère le fait qu'une couleur soit selectionnée
        if (color === app.choosenColor) {
            colorElem.classList.add('palette-color--active');
        }

        // on ajoute le nom de la couleur dans l'élément HTML via DATASET
        colorElem.dataset.colorName = color;
        // on ajoute un écouteur de clic sur la couleur
        colorElem.addEventListener('click', app.handleColorClick);
        app.paletteElem.appendChild(colorElem);
    },


    // création de la configuration
    // ici on a donné une valeur par défaut à isRequired, si on exécute la fonction sans 3eme paramètre, isRequired prendra la valeur false, sinon isRequired prendra la valeur passée en paramètree
    createConfiguration: function (placeHolderTitle, type, isRequired = false) {
        const inputElem = document.createElement('input');
        inputElem.type = type;
        if (type === 'number') {
            inputElem.placeholder = placeHolderTitle;
        } else {
            inputElem.value = placeHolderTitle;
        }
        if (isRequired) {
            inputElem.setAttribute('required', 'require');
        }
        // on récupère l'élément parent
        let configElem = document.querySelector('.configuration');
        // on ajoute l'enfant au parent
        configElem.appendChild(inputElem);
    },


    createForm: function () {
        app.createConfiguration('Taille de la grille', 'number', true);
        app.createConfiguration('Taille des pixels', 'number', false);
        app.createConfiguration('Valider', 'submit', false);


        // on ajoute un écouteur d'évènements sur notre formulaire
        // 1 : on récupère le formulaire :
        let configElem = document.querySelector('.configuration');
        // 2 : on ajoute un écouteur d'évènements
        configElem.addEventListener('submit', app.handleSubmitForm);
    },

    // on crée le tableau de pixels
    createPixelBoard: function (gridSize, pixelSize) {
        // on récupère l'élément qui hébèrge le tableau avant de rentrer dans la double boucle (pour éviter de le récupérer plusieurs fois)
        let invaderElem = document.querySelector('#invader');
        // option 1 pour écouter le tableau : placer un écouteur sur TOUT le tableau
        // document.addEventListener('click', handleClickOnPixel);

        // boucle pour créer les lignes
        // y = ordonnée, on travaille à la verticale avec cet index

        for (let y = 0; y < gridSize; y++) {
            // on crée une ligne
            let lineElem = document.createElement('div');
            // on ajoute des propriétés à cette ligne
            // avec classList.add, on ajoute une classe supplémentaire à l'ensemble des classes déjà présentes sur lineElem
            lineElem.classList.add('line');

            // alternative : ici lineElem va remplacer toutes les classes qu'il pouvait avoir jusqu'à présent par la classe ajoutée à droite du '='
            //lineElem.className = 'line';

            // x = abscisse, on travaille à l'horizontale avec cet index
            // boucle pour créer les pixels
            for (let x = 0; x < gridSize; x++) {
                // on crée un pixel
                let pixelElem = document.createElement('span');
                // on ajoute des propriétés au pixel
                pixelElem.classList.add('pixel');

                //option 2 pour écouter le tableau : placer un écouteur sur chaque pixel
                // on ajoute un écouteur d'évènement de type clic
                pixelElem.addEventListener('click', app.handleClickOnPixel);


                if (pixelSize !== NaN) {
                    // on modifie la taille du pixel
                    pixelElem.style.width = pixelSize + 'px';
                    pixelElem.style.height = pixelSize + 'px';
                }
                // on ajoute le pixel à la ligne
                lineElem.appendChild(pixelElem);
            }
            // on ajoute cette ligne à l'élément parent
            invaderElem.appendChild(lineElem);
        }
    }
};


app.init();
