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

function redirection () {
	document.location.href = '../html/chemins.html'; 
}

changeDescription(); 

document.getElementById("form").addEventListener("submit", function (e) {
    
    var value = document.getElementById("result").value; 
    var result = numbers[0] + numbers[1]; 
    
    if (value == result) {
        redirection(); 
    }
    else {
        alert("Mauvaise reponse");
    }
})