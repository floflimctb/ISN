/*--------------------------------*/
/*-----Principe de mots.js :------*/
/*Proposer des boîtes une énigme dans laquelle l'utilisateur déplacerait des boîtes de mots pour les mettre dans un certain ordre dans des boîtes à réponse.*/
/*--------------------------------*/



/*Objet prototype pour les boîtes de mots*/
var Mot = {
    init: function (mot, x) {
        this.mot = mot;
        this.x = x;
        this.y = 20;
    }
}

/*Objet prototype pour les boîtes de réponse*/
var Box = { 
    init: function (x, y) {
        this.x = x;
        this.y = y;
    }
}

var mots = []; //Tableau qui contiendra tous les mots

/*Création de 6 boîtes de mots à partir du prototype Mot que l'on met dans le tableau mots*/
for (var i = 0; i < 6; i++) {
    mots.push(Object.create(Mot));
}

//Initialisation des 6 mots
mots[0].init("Dune", 20);
mots[1].init("Jeton", 140);
mots[2].init("Lutin", 260);
mots[3].init("Mensonge", 380);
mots[4].init("Tintement", 500);
mots[5].init("Tondu", 620);

/*Par exemple ce 6ème mot a maintenant pour valeur :
-mot = "Tondu",
-x = 620,
y = 20*/

var boxes = [];

for (var i = 0; i < 6; i++) {
    boxes.push(Object.create(Box));
    boxes[i].init(mots[i].x, 220);
}

var button; //Variable globale pour faire le bouton de validation

/*Fonction propre à p5.js : initialisation de la fenêtre canvas*/

function setup () {
    createCanvas(740, 400);
    background(255);
}

/*Fonction propre à p5.js : "Dessin" des figures*/

function draw () {
    textSize(20); //Texte qui suit de taille 20
    
    for (var i = 0; i < mots.length ; i++) {
        var mot = mots[i]; //Cela évite de marquer mots[i] à chaque fois
        var box = boxes[i];

        fill(0); //Figures qui suivent remplies de noir
        text(mot.mot, mot.x, mot.y, 100, 30); //Boîte de texte qui prend le point de départ de l'objet du terme du tableau ainsi que la longueur et la largeur définies
        
        noFill(); //Ne remplis pas les figures qui suivent
        rect(mot.x - 5, mot.y - 5, 100, 30); //Rectangle correspondant à la délimitation de la boîte de texte
        rect(box.x, box.y, 110, 40);
    }
    
    button = createButton('Envoyer');
    button.position(20, 390);
    button.mousePressed(sent);
}

var word = null; //Variable globale initialement nulle

/*Fonction propre à p5.js, à chaque fois que la souris est appuyée dans la zone canvas, on applique cette fonction*/

function mousePressed () {
    for (var i = 0; i < mots.length; i++) {
        var mot = mots[i];
        
        if((mouseX > mot.x - 5) && 
           (mouseY > mot.y - 5) && 
           (mouseX < mot.x + 100) && 
           (mouseY < mot.y + 30)) { //Si la souris est dans la boîte du mot
          word = mot; //La variable globale word (nulle) est changée pour le mot correspondant à celui sur lequelle on clique
          break;
        }
    }
}

/*Fonction propre à p5.js : appelée à chaque fois que l'on déplace la souris*/

function mouseDragged () {
    if (word !== null) { //Si la variable n'est pas nulle, c'est à dire qu'on a cliqué sur un mot :
        //Le mot suit la position de la souris
        word.x = mouseX;
        word.y = mouseY;
    }
}

/*Fonction propre à p5.js : appelé quand on relâche la souris*/

function mouseReleased () { 
    word = null;
}

/*Fonction appelée lorsqu'on clique sur le bouton envoyer : teste la réponse, erreurs éventuelles de l'utilisateur*/

function sent () { 
    var testErreur = allInBox();
    var ordre = testErreur[1];
    
    if (testErreur[0] === true) {
    	var result = inOrder(ordre);

        if (result === true) {
            document.location.href = '../html/qcm.html'; //L'utilisateur a réussi l'énigme il passe donc à la suite
        }
        else {
            alert("Tu t'es trompé d'ordre, essaie encore !");
        }
    }
    else { //Si pas tous les mots sont dans une boîte
        alert("Mets tous les mots dans les rectangles pour valider");
    }
}

/*Fonction appelée par la fonction sent() : */

function allInBox() { 
    var test = true;
    var result = [];
    var ordres = [];
    
    for (var i = 0; i < mots.length; i++) {
        var mot = mots[i];
        var testBox = inBox(mot.x, mot.y);

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

/*Fonction*/

function inBox (x, y) {
    for (var j = 0; j < boxes.length; j++) {
        var box = boxes[j];
        var result = [false]; //Résultat à renvoyer

        if ((x - 5 > box.x) && 
            (y - 5 > box.y) && 
            (x + 95 < box.x + 110) && 
            (y + 25 < box.y + 40)) { //Si la boîte de mot est dans la boîte de réponse
            result[0] = true; //Le résultat à renvoyer est vérifié
            result.push(j); //On rajoute le terme de la boîte de réponse dans le résultat à renvoyer
            break;
        }
    }
    
    return result;
}

/*Fonction */

function inOrder (ordre) {
    if ((ordre[0] == 5) && 
        (ordre[1] == 3) && 
        (ordre[2] == 0) && 
        (ordre[3] == 2) && 
        (ordre[4] == 1) && 
        (ordre[5] == 4)) { //Si l'ordre des mots soumlis par l'utilsateur est bon :
        return true;
    }
    else {
        return false;
    }
}