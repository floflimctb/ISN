/* Teste la réponse par le formulaire "choix" */ 
function tester (choix) {
    if (choix[1].checked) { 
        document.location.href = '../html/fin.html'; 
    } 
    else if (choix[0].checked 
               || choix[2].checked 
               || choix[3].checked) {
        alert("Mauvaise réponse");
    } 
    else {
        alert("Le QCM est mal rempli");
    }
    
    return false;
}