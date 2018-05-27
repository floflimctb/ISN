document.getElementById("formPage2").addEventListener("submit", function (e) { // on récupère les données du formulaire ayant l'id "formPage2" et on appllique la fonction (e) lorsque l'utilisateur a appuyé sur le bouton de type submit 
    
    var value = document.getElementById("result").value;  // on crée une variable value qui prend la valeur de l'élément ayant l'id "result" 
    
    if (value == 9) { 
        document.location.href = '../html/chemins.html'; 
    }
    else {
        alert("Mauvaise reponse"); 
    }
})