var numbers = generateNumber(); //On crée une variable numbers qui correspond à la valeur renvoyée par la fonction generateNumber

function generateNumber () { //Fonction qui renvoie un tableau contenant deux nombres aléatoires entre 0 et 10
    return [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)];
    /*C'est ce que la fonction renvoie :
    Un tableau avec deux valeurs identiques :
    Un nombre aléatoire de 0 à 10 :
    Math.random() donne normalement un nombre à virgule aléatoire de 0 à 0,9..
    C'est pourquoi on le multiplie par 11 : on a maintenant un nombre aléatoire de 0 à 10,9...
    On veut un nombre entier, on utilise donc Math.floor() pour l'arrondir
    Ainsi, on obtient notre nombre aléatoire de 0 à 10*/
}

function changeDescription () { //Fonction ayant pour effet de changer le label du html      
    for (var i = 1; i <= 2; i++) { //Pour i infèrieur à 2 (On doit générer deux nombres) :
        var v = document.getElementById('v' + i); 
        v.innerHTML = numbers[i - 1];
    }
}

function redirection () {
	document.location.href = '../html/enigme.html'; //Redirige vers chemins.html
}

changeDescription(); //On appelle la fonction changeDescription

document.getElementById("form").addEventListener("submit", function () { //On écoute l'événement du formulaire ayant l'id formPage1, quand on envoie le formulaire (Appuyer sur entrer); on applique la fonction qui suit :
    var value = document.getElementById("result").value; //On crée une variable value qui contient le résultat rentré par l'utilisateur, c'est-à-dire, la valeur rentrée dans l'élément html qui a pour id result
    var result = numbers[0] + numbers[1]; //On crée une variable result qui correspond au résultat attendu, c'est à dire à l'addition des deux chiffres 
    
    if (value == result) { //Si le résultat rentré par l'utilisateur est juste :
        redirection(); //On appelle la fonction redirection
    }
    else { //Si le résultat rentré est faux :
        alert("Mauvaise reponse"); //Une affiche un message d'erreur
    }
})