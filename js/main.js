var signe = document.getElementsByClassName('si');
var nb = document.getElementsByClassName('ch');
var result= document.getElementById('resultat');;

for (let i=0; i < nb.length; i++) {
	nb[i].addEventListener("click", function (){	
		result.innerHTML += nb[i].innerHTML;
	} );

}

for (let j=0; j < signe.length; j++) {
	signe[j].addEventListener("click", function (){
		result.innerHTML += signe[j].innerHTML;
	} );

}

	document.getElementById('egal').addEventListener("click", function (){
		parseInt(result.innerHTML);
		var view = eval(result.innerHTML);
		result.innerHTML = view;
	} );





















