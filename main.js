function testFunction(){
			document.getElementById("test").innerHTML = "funkcija izvrsena";
}


var x = 4;

function MyTest(){
	console.log("Vrednost x = " + x);
	
	console.log("Avion: " + avion.ime + " " + avion.prezime);
	
	avion.printInfo();
}


var avion = {
	ime: 	 "Boeing",
	prezime: "747"
	printInfo: function() {
		document.write("ovo je avion");
	}
	
}



function Datum() {
	var datum = new Date();
	document.getElementById("datumiID").innerHTML = datum.toLocaleTimeString();
}


