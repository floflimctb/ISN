var numbers = generateNumber(); //Valeur renvoyée par la fonction generateNumber

/*Fonction qui renvoie un tableau contenant deux nombres aléatoires entre 0 et 10*/

function generateNumber () {
    return [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)];
}

/*Fonction qui change le label de l'input de l'html*/

function changeDescription () {       
    for (var i = 1; i <= 2; i++) {
        var v = document.getElementById('v' + i); 
        v.innerHTML = numbers[i - 1];
    }
}

changeDescription();

document.getElementById("form").addEventListener("submit", function () { //Quand on soumet le formulaire, on applique la fonction :
    var value = document.getElementById("result").value; //Résultat rentré par l'utilisateur
    var result = numbers[0] + numbers[1]; //Résultat attendu
    
    if (value == result) { //Si le résultat rentré par l'utilisateur est juste :
        document.location.href = '../html/enigme.html'; //Il peut passer à la suite
    }
    else { //Si le résultat rentré est faux :
        alert("Mauvaise reponse");
    }
})