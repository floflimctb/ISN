/*--------------------------------------------------------------------------------*/
/*-----------------------------Principe mots.js-----------------------------------*/
/*----L'utilisateur est confronté à plusieurs boîtes de mots qu'il doit placer----*/
/*----dans un certain ordre dans les boîtes à réponse. Ce programme,--------------*/
/*----dessine ces boîtes et teste la réponse de l'utilisateur.--------------------*/
/*--------------------------------------------------------------------------------*/
  


var Mot = { //Objet prototype Mot qui sert de modèle pour toutes les boîtes de mots
    init: function (mot, x) { //Propriété d'initialisation avec :
        this.mot = mot; //Mot que l'on pourra rentrer
        this.x = x; //Valeur en x que l'on pourra renseigner également
        this.y = 20; //Valeur en y fixée à 20
    }
}

var Box = { //Objet prototype Box qui sert de modèle pour toutes les boîtes de réponse
    init: function (x, y) {
        this.x = x;
        this.y = y;
    }
}

var mots = []; //Tableau qui contiendra tous les mots

for (var i = 0; i < 6; i++) {
    mots.push(Object.create(Mot)); //Création de 6 mots à partir du prototype Mot et mis dans la tableau mots
}

mots[0].init("Dune", 20);
mots[1].init("Jeton", 140);
mots[2].init("Lutin", 260);
mots[3].init("Mensonge", 380);
mots[4].init("Tintement", 500);
mots[5].init("Tondu", 620);

var boxes = [];

for (var i = 0; i < 6; i++) {
    boxes.push(Object.create(Box));
    boxes[i].init(mots[i].x, 220);
}

var button; //Pour créer le bouton d'envoi

/* Fonction propre à p5.js : constitue les paramètres d'initialisation de la zone canvas */
function setup () {
    createCanvas(740, 400); //Crée une zone canvas dans laquelle on pourra travailler de longueur 710 et de largeur 400
    background(255); //Le background de cette zone de canvas est blanc
}

/* Fonction propre à p5.js : on y dessine nos figures */
function draw () {
    background(255);
    textSize(20);
    for (var i = 0; i < mots.length ; i++) {
        var mot = mots[i]; //Question de practicité, cela évite de marquer mots[i] à chaque fois
        var box = boxes[i];

        fill(0);
        text(mot.mot, mot.x, mot.y, 100, 30); //Boîte de texte
        
        noFill();
        rect(mot.x - 5, mot.y - 5, 100, 30); //Délimitation de la boîte de texte
        rect(box.x, box.y, 110, 40); //Boîte de réponse
    }
    
    /* Bouton "envoyer" */
    button = createButton('Envoyer');
    button.position(20, 390);
    button.mousePressed(sent); //Appelle la fonction sent() lorsque on appuye dessus
}

var word = null; //Variable globale : correspondra au mot sur lequel on clique

/* Fonction propre à p5.js : appelée à chaque fois que l'on clique avec la souris */
function mousePressed () {
    for (var i = 0; i < mots.length; i++) {
        var mot = mots[i]; //Question de practicité, cela évite de marquer mots[i] à chaque fois
        
        if((mouseX > mot.x - 5) && (mouseY > mot.y - 5) && (mouseX < mot.x + 100) && (mouseY < mot.y + 30)){ //Si la souris est dans la boîte de texte
          word = mot; //La variable globale word correspond alors au mot sur lequel on clique
          break;
        }
    }
}

/* Fonction propre à p5.js : à chaque fois que l'on déplace la souris */
function mouseDragged () {
    if (word !== null) { //Si on clique sur un mot
        /* Le mot suit la position de la souris */
        word.x = mouseX;
        word.y = mouseY;
    }
}

/* Fonction propre à p5.js : à chaque fois que l'on relâche le bouton de la souris */
function mouseReleased () {
    word = null; //On ne clique plus sur un mot : on réinitialise donc word à null
}

/* Fonction centre de ce programme : teste la réponse de l'auteur (appelée lorsque l'on appuye sur le bouton envoyer) */
function sent () {
    var testErreur = allInBox(); /*Valeur renvoyée par la fonction allInBox() : tableau :
    -1ère valeur : booléen si tous les mots sont placés dans une boîte de réponse */
    var ordre = testErreur[1]; //-2ème valeur : tableau correspondant à l'ordre de ces mots dans les boîtes de réponse que l'on place dans la variable ordre
    
    if (testErreur[0] === true) { //Si tous les mots sont placés dans une boîte de réponse
        var result = inOrder(ordre); //Booléen renvoyé par la fonction inOrder() avec pour paramètre l'ordre

        if (result === true) { //Si l'ordre est bon
            document.location.href = '../html/qcm.html'; //L'utilisateur a REUSSI, il passe à la suite
        }
        else {
            alert("Tu t'es trompé d'ordre, essaie encore !");
        }
    }
    else {
        alert("Mets tous les mots dans les rectangles pour valider");
    }
}

/* Teste la présence de tous les mots dans les boîtes de réponse et leur ordre */
function allInBox() {
    var test = true;
    var result = [];
    var ordres = [];
    
    for (var i = 0; i < mots.length; i++) {
        var mot = mots[i];
        var testBox = inBox(mot.x, mot.y); /*Valeur renvoyée par la fonction inBox() :  
        -1ère valeur : booléen si le mot est bien dans une boîte de réponse
        -2ème valeur : le rang de cette boîte */

        if (testBox[0] === true) {
            test = true;
            ordres.push(testBox[1]);
        }
        else {
            test = false;
            break;
        }
    }
    result.push(test);

    if (test === true) {
        result[0] = true;
        result.push(ordres);
        return result;
    }
    else {
        result[0] = false;
        return result;
    }
}

/* Teste la présence d'un mot dans une boîte de réponse, et le rand de cette boîte de réponse */
function inBox (x, y) {
    for (var j = 0; j < boxes.length; j++) {
        var box = boxes[j];
        var result = [false];

        if ((x - 5 > box.x) && (y - 5 > box.y) && (x + 95 < box.x + 110) && (y + 25 < box.y + 40)) { //Si la boîte de mot est bien dans la boîte de réponse
            result[0] = true;
            result.push(j);
            break;
        }
    }
    return result;
}

/* Teste l'ordre des mots */
function inOrder (ordre) {
    if ((ordre[0] == 5) && (ordre[1] == 3) && (ordre[2] == 0) && (ordre[3] == 2) && (ordre[4] == 1) && (ordre[5] == 4)) { //Si l'ordre des mtos attendu est respecté
        return true;
    }
    else {
        return false;
    }
}