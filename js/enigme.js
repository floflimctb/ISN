function RedirectionJavascript() {
	document.location.href = '../html/chemins.html'; 
}

document.getElementById("formPage2").addEventListener("submit", function (e) {
    
    var value = document.getElementById("result").value; 
    
    if (value == 9) {
        RedirectionJavascript(); 
    }
    else {
        alert("Mauvaise reponse"); 
    }
})