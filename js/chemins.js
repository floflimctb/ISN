document.onkeydown= function(key){ reactKey(key); } 

/* Fonction pour rediriger à gauche */

function redirectionLeft() { 
	document.location.href = '../html/mots.html'; 
}

/* Fonction pour rediriger à droite */


function redirectionRight() { 
	document.location.href = '../html/images.html'; 
}

/* Fonction "lorsque la touche est appuyée faire" */

function reactKey(evt) { 
   if(evt.keyCode== 37) {
      redirectionLeft()
   }   
    if(evt.keyCode== 39) {
      redirectionRight()
   }
}