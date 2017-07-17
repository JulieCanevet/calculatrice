var signe = document.getElementsByClassName('si'); // tous les operateurs
var nb = document.getElementsByClassName('ch'); //tous les chiffres
var result= document.getElementById('resultat'); //div resultat

// Selection des nombres
for (let i=0; i < nb.length; i++) {
	nb[i].addEventListener("click", function (){	
		result.innerHTML += nb[i].innerHTML;
	});
}

// Selection du signe de l'operation
for (let j=0; j < signe.length; j++) {
	signe[j].addEventListener("click", function (){
		result.innerHTML += signe[j].innerHTML;
	});
}

// Resultat au click "egal"
	document.getElementById('egal').addEventListener("click", function (){
		parseInt(result.innerHTML);
		var view = eval(result.innerHTML);
		result.innerHTML = view;
	});





















