function redirectionLeft() {
	document.location.href = '../html/mots.html'; 
}

function redirectionRight() {
	document.location.href = '../html/images.html'; 
}

function reactKey(evt) {
   if(evt.keyCode== 37) {
      redirectionLeft()
   }   
    if(evt.keyCode== 39) {
      redirectionRight()
   }
}

document.onkeydown= function(key){ reactKey(key); }