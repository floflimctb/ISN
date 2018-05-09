
#Projet ISN :

**Présentation du projet:**
Année scolaire: 2017-2018
Classe: TS1
Intitulé du projet: 
Participants: BROTONS Florent, LECUYER Alison, SIDIBE Olivia

**Description du projet:**
Programmation d'un jeu web éducatif déstiné aux enfants, leur permettant de développer leur logique, leur sens de l'observation et des mathématiques. Utilisation des langages web (html, css, js). 

**Présentation de l'équipe:** 
Eleve 1: SIDIBE Olivia
Compétences particulière: 
Eleve 2: LECUYER Alison
Compétences particulière: 
Eleve 3: BROTONS Florent
Compétences particulière: 

**Activié lors de la séance du 6/4/18:** 
Choix des énigmes en groupe. Plan des diapositives par Olivia et Alison. Recherche de la structure js sur p5.js par Florent. Design des personnages par Olivia. Rédaction du carnet de bord par Alison. 
Questions: Comment se répartir les tâches? Comment fonction canvas et comment peut-on l'utiliser pour notre projet ? 

**Activié lors de la séance du 13/4/18:** 
Commencé les pages pour tout le groupe :

 - Oliva : Page 3 et design des personnages 
 - Alison : Page 1 (d'accueil) en HTML et style de page 1 en CSS
 - Florent : Page 2 (énigme) en HTML et page 2 (si énigme passée) en HTML



**Activité lors de la séance du 20/04/18:** 
Nous allons devoir gérer les réponses aux énigmes de l'utilisateur. Nous accéderont à ces réponses par le biai de formulaires ou de la librairie p5.js. Nous utiliserons du JavaScript pour traîter ces données.


### Répartitions des tâches
HTML
	index.html //Accueil
		Alison
	addition.html //1ere enigme : addition
		Florent
	chemins.html //Choisir le chemin en appuyant sur la touche gauche ou droite
		Olivia
	mots.html //Enigme de gauche: mettre en l'ordre les mots
		Florent
	images.html //Enigme de droite: choisir entre certaines images en les survolant
		Alison
	qcm.html //Enigme (pareil pour gauche ou droite) : qcm
		Alison
	escaped.html //Page finale
		Olivia

CSS
	main.css //Definit le style global
		Alison && Olivia
    index.css //Style pour index.html
        Olivia

JS
	addition.js //Teste la reponse de l'utilisateur rentree dans le formulaire grave a un eventlistener
		Alison && Florent
	mots.js //Teste la reponse de l'utilisateur, si l'ordre des mots est juste en canvas
		Florent
	images.js //Teste l'image choisie de l'utilisateur grace a un eventlistener de sa souris
		Olivia
	chemins.js //Teste le choix de l'utilisateur avec un eventlistener keypressed
		Olivia || Alison
	qcm.js //Teste la reponse de l'utilisateur avec un eventlistener
		Alison

##Code :
https://github.com/floflimctb/ISN
ou :
index.html (Alison) :
```
<!doctype html>
<html> 
	<head>
		<meta charset="utf-8" /><!--Type de caractères à lire par la page, utf-8 très complet-->
        <link rel="stylesheet" href="../css/main.css" /><!--Lien vers le fichier de style css general : main.css-->
        <link rel="stylesheet" href="../css/index.css" />
		<title>Enigme</title><!--Titre à apparaître dans le navigateur-->
	</head>
    
	<body>
        <section class="question">
            <div class="overlay">
                <h1 class="text">Vous vous retrouvez perdu au beau milieu de la forêt...Mais ne vous en faites pas, les animaux vont vous aider à retrouver le chemin ! Cliquez sur le passage pour commencer votre aventure.</h1>
            </div>
            <div class="button">
                <a href="addition.html">
                    <button></button>
                </a>
            </div>
        </section>
	</body>
</html>
```
main.css (Alison) :
```
/* Cadre du texte */ 

.overlay {
    text-align: center;
    position: relative;
    top: 90px;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 190px; /* Marge extérieure */ 
    margin-bottom: 0px; 
    width: auto; 
    border-radius: 30px; /* Coins du cadre arrondis */ 
    height: auto;
    padding-bottom: 1px; /* Marge intérieure */ 
}

/* Texte */

.text {
  font-size: 25px; 
  color: #5F4444; 
  font-family: Comic sans MS, Comic Sans, cursive; 
} 

body {
    overflow: hidden; /* Permet d'enlever la barre de scroll */ 
}
```
index.css (Olivia) :
```
/* Background */ 

body {
    width: 100%; 
    height: 100%; 
    background-size: cover; 
    background-position: bottom;
    background-image: url(../images/index.jpg);
    position: absolute; 
    top: 0; 
    left: 0; 
}

/* Bouton */

.question button {
    width: 100%; 
    height: 500px; 
    opacity: 0; 
}

.question button:hover { /* Quand la souris est sur le boutton */ 
    cursor: pointer; /* Le curseur devient une main */ 
}
```
addition.html (Florent) :
```
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
        <link rel="stylesheet" href="../css/main.css" />
        <link rel="stylesheet" href="../css/addition.css" />
		<title>Enigme</title>
	</head>

	<body>
        <section class="question">
            <div class="overlay">
                <img src="../images/nanachi.png" alt="Nanachi" />
                <div class="text">
                    <p>Vous marchez et rencontrez quelqu'un sur votre chemin.</p>
                    <p>"Si tu réponds bien à mon énigme, je t'accompagnerai le long de ton parcours !"</p>
                    <p>"Monique aime collectionner les petits animaux en peluche. Elle a <strong id="v1"></strong> chiens et <strong id="v2"></strong> canards. Combien d'animaux en peluche a-t-elle dans sa collection ?"</p>
                </div>
                <form id="form" onsubmit="return false;">
                        <input type="number" name="result" id="result" autofocus />
                        <input type="submit" />
                </form> 
                <script src="../js/addition.js"></script>
            </div>
        </section>
	</body>
</html>
```
addition.js (Alison et Florent) :
```
var numbers = generateNumber(); 

function generateNumber () { 
    return [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]; 
}

function changeDescription () {                           
    for (var i = 1; i <= 2; i++) {
        var v = document.getElementById('v' + i); 
        v.innerHTML = numbers[i - 1];
    }
}

function RedirectionJavascript () {
	document.location.href = 'chemins.html'; 
}

changeDescription(); 

document.getElementById("form").addEventListener("submit", function (e) {
    
    var value = document.getElementById("result").value; 
    var result = numbers[0] + numbers[1]; 
    
    if (value == result) {
        RedirectionJavascript(); 
    }
    else {
        alert("Mauvaise reponse");
    }
})
```
chemins.html (Olivia, en cours) :
```
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Enigme</title>
	</head>

	<body>
        <p>Bravo ! <strong>Nom du premier personnage</strong> va maintenant vous venir en aide.</p>
	</body>
</html>
```
mots.html (Florent, en cours) : 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Enigme</title>
        <script src="../libraries/p5.js" type="text/javascript"></script>
        <script src="../libraries/p5.dom.js" type="text/javascript"></script>
        <script src="../libraries/p5.sound.js" type="text/javascript"></script>
        <script src="../js/mots.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../css/main.css" />
        <link rel="stylesheet" href="../css/mots.css" />
    </head>
    
    <body>
        <div class="text">
            <p>Aide le lutin à former une chaîne de mots avec celle de la liste, sachant que la dernière syllabe d'un mot est la première du suivant en phonétique</p>
        </div>
    </body>
</html>
```
mots.js (Florent, en cours) :
```
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
```

