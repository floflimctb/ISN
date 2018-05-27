var Mot = { //Définit un objet prototype mot
    init: function (mot, x) { //Cet objet a pour propriété une initialisation avec :
        this.mot = mot; //Un mot que l'on pourra rentrer
        this.x = x; //Une valeur en x que l'on pourra renseigner également
        this.y = 20; //Une valeur en y fixe à 20
    }
}

var Box = {
    init: function (x, y) {
        this.x = x;
        this.y = y;
    }
}

var mots = []; //On crée un tableau qui contient tous nos mots

for (var i = 0; i < 6; i++) {
    mots.push(Object.create(Mot));
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

var button;

function setup () {
    createCanvas(740, 400); //Crée une zone canvas dans laquelle on pourra travailler de longueur 710 et de largeur 400
    background(255); //Le background de cette zone de canvas est blanc
}

function draw () {
    background(255);
    textSize(20); //Définit la taille du texte
    for (var i = 0; i < mots.length ; i++) { //On parcourt le tableau mots sur l'ensemble de ses valeurs
        var mot = mots[i]; //Question de practicité, cela évite de marquer mots[i] à chaque fois
        var box = boxes[i];

        fill(0);
        text(mot.mot, mot.x, mot.y, 100, 30); //On écrit une boîte de texte qui prend le point de départ de l'objet du terme du tableau ainsi que la longueur et la largeur définies
        
        noFill(); //Ne remplis pas les figures qui suivent
        rect(mot.x - 5, mot.y - 5, 100, 30); //Rectangle correspondant à la délimitation de la boîte de texte
        rect(box.x, box.y, 110, 40);
    }
    button = createButton('Envoyer');
    button.position(20, 390);
    button.mousePressed(sent);
}

var word = null;

function mousePressed () {
    for (var i = 0; i < mots.length; i++) {
        var mot = mots[i];
        if((mouseX > mot.x - 5) && (mouseY > mot.y - 5) && (mouseX < mot.x + 100) && (mouseY < mot.y + 30)){ //Si la souris est dans la boîte du mot
          word = mot;
          break;
        }
    }
}

function mouseDragged () {
    if (word !== null) {
        word.x = mouseX;
        word.y = mouseY;
    }
}

function mouseReleased () {
    word = null;
}

function redirection () {
    document.location.href = '../html/qcm.html'; 
}

function sent () {
    var testErreur = allInBox();
    var ordre = testErreur[1];
    
    if (testErreur[0] === true) {
        var result = inOrder(ordre);

        if (result === true) {
            redirection();
        }
        else {
            alert("Tu t'es trompé d'ordre, essaie encore !");
        }
    }
    else {
        alert("Mets tous les mots dans les rectangles pour valider");
    }
}

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

function inBox (x, y) {
    for (var j = 0; j < boxes.length; j++) {
        var box = boxes[j];
        var result = [false];

        if ((x - 5 > box.x) && (y - 5 > box.y) && (x + 95 < box.x + 110) && (y + 25 < box.y + 40)) {
            result[0] = true;
            result.push(j);
            break;
        }
    }
    return result;
}

function inOrder (ordre) {
    if ((ordre[0] == 5) && (ordre[1] == 3) && (ordre[2] == 0) && (ordre[3] == 2) && (ordre[4] == 1) && (ordre[5] == 4)) {
        return true;
    }
    else {
        return false;
    }
}