var mot = { //Définit un objet mot prototype
    init: function (mot, x) { //Cet objet a pour propriété une initialisation avec :
        this.mot = mot; //Un mot que l'on pourra rentrer
        this.x = x; //Une valeur en x que l'on pourra renseigner également
        this.y = 20; //Une valeur en y fixe à 20
        this.active = false; //Et une valeur fausse pour l'instant correspondant à si l'objet est actif ou non (si on clique dessus)
    }
    /*,
    diagonale: function () {
        return (Math.sqrt((this.x * this.x) + (this.y * this.y))); 
    },
    distance: function () {
        return (dist(mouseX, mouseY, this.x, this.y));
    }*/
}

var mot1 = Object.create(mot); //On crée un objet mot1 dont le prototype est l'objet mot
mot1.init("Dune", 20); //On définit ensuite son initialisation avec "Dune" comme mot et 20 comme valeur en x en paramètres
/*On a donc :
mot1.mot = "Dune"
mot1.x = 20
mot1.y = 20
mot1.active = false*/
var mot2 = Object.create(mot);
mot2.init("Jeton", 120);
/*mot2.mot = "Jeton"
mot2.x = 120
mot2.y = 20
mot2.active = false*/
var mot3 = Object.create(mot);
mot3.init("Lutin", 220);
/*mot3.mot = "Lutin"
mot3.x = 220
mot3.y = 20
mot3.active = false*/
var mot4 = Object.create(mot);
mot4.init("Mensonge", 320);
/*mot4.mot = "Mensonge"
mot4.x = 320
mot4.y = 20
mot4.active = false*/
var mot5 = Object.create(mot);
mot5.init("Tintement", 420);
/*mot5.mot = "Tintement"
mot5.x = 420
mot5.y = 20
mot5.active = false*/
var mot6 = Object.create(mot);
mot6.init("Tondu", 520);
/*mot6.mot = "Tondu"
mot6.x = 520
mot6.y = 20
mot6.active = false*/

var mots = [mot1, mot2, mot3, mot4, mot5, mot6]; //On crée un tableau qui contient tous nos mots

function setup () {
    createCanvas(710, 400); //Crée une zone canvas dans laquelle on pourra travailler de longueur 710 et de largeur 400
    background(255); //Le background de cette zone de canvas est blanc
}

function draw () {
    textSize(20); //Définit la taille du texte
    for (var i = 0; i < mots.length ; i++) { //On parcourt le tableau mots sur l'ensemble de ses valeurs
        var mot = mots[i]; //Question de practicité, cela évite de marquer mots[i] à chaque fois
        text(mot.mot, mot.x, mot.y, 100, 30); //On écrit une boîte de texte qui prend le point de départ de l'objet du terme du tableau ainsi que la longueur et la largeur définies
        noFill(); //Ne remplis pas les figures qui suivent
        stroke(0); //Les trais des figures qui suivent seront noirs
        rect(mot.x, mot.y, 100, 30); //Rectangle correspondant à la délimitation de la boîte de texte
    }
}
        
function mousePressed () {
    for (var i = 0; i < mots.length; i++) {
        var mot = mots[i];
        if((mouseX > mot.x) && (mouseX < mot.x + 100) && (mouseY > mot.y) && (mouseY < mot.y + 30)){ //Si la souris est dans la boîte du mot
            mot.active = true; //Le mot est actif
        } 
        else {
            mot.active = false; //Sinon, il ne l'est pas
        }
    }
}

function mouseDragged () {
    for (var i = 0; i < mots.length; i++) {
        var mot = mots[i];
        if (mot.active) { //Si le mot est actif
            mot.x = mouseX; //La valeur du mot en x correspond à celle de la souris
            mot.y = mouseY; //Et idem pour y
            break; //Pour sortir de la boucle
        }
    }
}