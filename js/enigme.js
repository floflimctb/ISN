document.getElementById("formPage2").addEventListener("submit", function (e) { //On écoute l'événement du formulaire ayant l'id "formPage2", quand on envoie le formulaire (appuye sur le bouton submit), on applique la fonction qui suit :
    var value = document.getElementById("result").value;  //Valeur rentré dans l'input ayant l'id "result" 
    
    if (value == 9) { //Si ce résultat équivaut à 9, le résultat attendu
        document.location.href = '../html/chemins.html'; //Il a REUSSI, il peut passer à la suite
    }
    else {
        alert("Mauvaise reponse"); 
    }
});