function testFunction(){
			document.getElementById("test").innerHTML = "funkcija izvrsena";
}

var datum = new Date();
document.getElementById("datumID").innerHTML = datum.toLocaleDateString();
document.getElementById("vremeID").innerHTML = datum.toLocaleTimeString();
var x = 4;

function MyTest(){
	console.log("Vrednost x = " + x);
	
	console.log("Avion: " + avion.ime + " " + avion.prezime);
	
	avion.printInfo();
}


var avion = {
	ime: 	 "Boeing",
	prezime: "747"
	
	
}



function Datum() {
	
}


