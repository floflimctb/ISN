function RedirectionJavascript() {
	document.location.href = '../html/fin.html'; 
}

function tester(choix)// une fonction que l'on appellera pour tester le formulaire
{
 if (choix[1].checked)
 { 
    RedirectionJavascript();
     
 }else if (choix[0].checked || choix[2].checked || choix[3].checked )
 {
     alert("Mauvaise réponse");
     
 }else {
    alert("Le QCM est mal rempli");
 };
 return false;
}