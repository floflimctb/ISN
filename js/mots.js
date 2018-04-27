var mot = {
    init: function (mot, x) {
        this.mot = mot;
        this.x = x;
        this.y = 20;
    }
}
var mot1 = Object.create(mot);
mot1.init("Dune", 20);
var mot2 = Object.create(mot);
mot2.init("Jeton", 120);
var mot3 = Object.create(mot);
mot3.init("Lutin", 220);
var mot4 = Object.create(mot);
mot4.init("Mensonge", 320);
var mot5 = Object.create(mot);
mot5.init("Tintement", 420);
var mot6 = Object.create(mot);
mot6.init("Tondu", 520);

function setup () {
    createCanvas(710, 400);
}

function draw () {
    textSize(20);
    //text(mot1.mot, mot1.x, mot1.y, 100, 30);
    rect(mot1.x, mot1.y, 100, 30)
    text(mot2.mot, mot2.x, mot2.y);
    text(mot3.mot, mot3.x, mot3.y);
    text(mot4.mot, mot4.x, mot4.y);
    text(mot5.mot, mot5.x, mot5.y);
    text(mot6.mot, mot6.x, mot6.y);
    
    if ((mousIsPressed) && (textInBox())) {
        
    }
}

function testInBox () {
    if ((mouseX )) {
        
    }
    else {
        
    }
}