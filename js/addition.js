var numbers = generateNumber(); //Valeur renvoyée par la fonction generateNumber ()

function generateNumber () { //Fonction qui renvoie un tableau contenant deux nombres aléatoires entre 1 et 10
    return [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)];
}

/* Change l'énoncé de l'énigme pour afficher les deux nombres aléatoires de numbers */
function changeDescription () {     
    for (var i = 1; i <= 2; i++) {
        var v = document.getElementById('v' + i); 
        v.innerHTML = numbers[i - 1];
    }
}

changeDescription();

document.getElementById("form").addEventListener("submit", function () { //On écoute l'événement du formulaire ayant l'id "formPage1", quand on envoie le formulaire (appuye sur entrer), on applique la fonction qui suit :
    var value = document.getElementById("result").value; //Résultat rentré par l'utilisateur : valeur rentrée dans l'élément html qui a pour id "result"
    var result = numbers[0] + numbers[1]; //Résultat attendu, c'est à dire à l'addition des deux chiffres 
    
    if (value == result) { //Si le résultat rentré par l'utilisateur correspond à la valeur attendue :
        document.location.href = '../html/enigme.html'; //Il a REUSSI, il peut passer à la suite
    }
    else {
        alert("Mauvaise reponse");
    }
});