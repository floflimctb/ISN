document.onkeydown = function (evt) { //Lorsque l'utilisateur appuye sur une touche, on applique la fonction qui suit :
    if (evt.keyCode== 37) { //Si l'utilisateur appuye sur la touche gauche du clavier
        document.location.href = '../html/mots.html';
    }   
    if (evt.keyCode== 39) { //Touche droite
      document.location.href = '../html/images.html';
    } 
};