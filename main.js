/*const para = document.createElement("p");
const node = document.createTextNode("This is a paragraph.");
var divDole = document.getElementById("div1");
var glavniDiv = document.getElementById("DIV5");

para.appendChild(node);
glavniDiv.appendChild(para);
glavniDiv.appendChild(divDole);

document.body.insertBefore(divDole, para );
*/
function prikazi_Avione() {
	main_div = document.createElement("div");
	main_div.className = "id_main_div";

	roditelj = document.getElementById("avioni_main");
	btn_div = document.getElementById("btn_avion_display");
	footer_av = document.getElementById("footer_avioni");
	roditelj.appendChild(btn_div);
	//roditelj.appendChild(main_div);
	


	div1 = document.createElement("div");
	div2 = document.createElement("div");
	div3 = document.createElement("div");
	div4 = document.createElement("div");
	div5 = document.createElement("div");
	div6 = document.createElement("div");

	div1.className="main_div_sub";
	div2.className="main_div_sub";
	div3.className="main_div_sub";
	div4.className="main_div_sub";
	div5.className="main_div_sub";
	div6.className="main_div_sub";

	main_div.appendChild(div1);
	main_div.appendChild(div2);
	main_div.appendChild(div3);
	main_div.appendChild(div4);
	main_div.appendChild(div5);
	main_div.appendChild(div6);
	
	document.body.insertBefore(main_div, footer_av);

	napuni_div(0);
}

function napuni_div(i) {	
	text = document.createElement("p");	
	text.innerText = avioni[i].ime  + "\n" + "\n" + avioni[i].kolicina + "\n";
	text.innerText += "\n" + avioni[i].kolicina + "\n";
	text.innerText += "\n" + avioni[i].duzina;
	text.innerText += "\n" + avioni[i].raspon_krila;
	text.innerText += "\n" + avioni[i].kapacitet;
	text.innerText += "\n" + avioni[i].brzina;
	text.innerText += "\n" + avioni[i].visina_krstarenja;
	div1.appendChild(text);
}





/*
<div id="DIV5">
        <div id="div1" class="avion_podaci">
            <img src="img/avion.png">
            <h4 id="ime_avion"></h4>
            <p id="kolicina" class="avion_opis">kolicina: </p>            
            <p id="duzina" class="avion_opis">duzina: </p>
            <p id="raspon_krila" class="avion_opis">raspon krila: </p>
            <p id="kapacitet" class="avion_opis">kapacitet: </p>
            <p id="brzina" class="avion_opis">brzina: </p>
            <p id="visina_krstarenja" class="avion_opis">visina krstarenja: </p>
        </div>  
    </div>
*/

var avioni = 
[ 
	{
		ime: "AIRBUS A 330-200",
		kolicina: "1", 
		duzina: "57m",
		raspon_krila: "60m",
		kapacitet: "257",
		brzina: "870 km/h",
		visina_krstarenja: "12.500 m"	
	}, 

	{
		ime: "AIRBUS A 320",
		kolicina: "1", 
		duzina: "37m",
		raspon_krila: "35m",
		kapacitet: "174",
		brzina: "828 km/h",
		visina_krstarenja: "11.887 m"	
	}, 

	{
		ime: "AIRBUS A 319",
		kolicina: "9", 
		duzina: "33m",
		raspon_krila: "35m",
		kapacitet: "144",
		brzina: "828 km/h",
		visina_krstarenja: "11 887 m"	
	},
	
	{
		ime: "ATR 72-600",
		kolicina: "2", 
		duzina: "27m",
		raspon_krila: "27m",
		kapacitet: "72",
		brzina: "510 km/h",
		visina_krstarenja: "7600 m"	
	}, 

	{
		ime: "ATR 72-500",
		kolicina: "1", 
		duzina: "27m",
		raspon_krila: "27m",
		kapacitet: "70",
		brzina: "510 km/h",
		visina_krstarenja: "7600 m"	
	}, 

	{
		ime: "AIRBUS A 319",
		kolicina: "2", 
		duzina: "27m",
		raspon_krila: "27m",
		kapacitet: "66",
		brzina: "510 km/h",
		visina_krstarenja: "7600 m"	
	}, 
]

/*function avionIspisPodaci() {
	for(var i = 0; i < 6; i++) {
		document.getElementById("ime_avion").innerHTML += avioni[i].ime;
		document.getElementById("kolicina").innerHTML += avioni[i].kolicina;
		document.getElementById("duzina").innerHTML += avioni[i].duzina;
		document.getElementById("raspon_krila").innerHTML += avioni[i].raspon_krila;
		document.getElementById("kapacitet").innerHTML += avioni[i].kapacitet;
		document.getElementById("brzina").innerHTML += avioni[i].brzina;
		document.getElementById("visina_krstarenja").innerHTML += avioni[i].visina_krstarenja;
	}	
}*/

/*function napravi_div() {
	const mojDiv = document.createElement("div");
	const newContent = document.createTextNode("Hi there and greetings!");

	
	mojDiv.appendChild(newContent);

	mojDiv.style.width="100px";
	mojDiv.style.height="100px";
	mojDiv.style="background-color: green; ";
	const currentDiv = document.getElementById("div1");
	document.body.insertBefore(mojDiv, currentDiv);
}

napravi_div();
*/
/*
var div = document.createElement("div");

	div.id="div_id";
	div.className="div_class";
	div.style="background-color: green; ";
	div.style.width="100px";
	div.style.height="100px";
	div.innerHTML = "test";
	
	*/

/*avionIspisPodaci();

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}*/




/*var x = 4;

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
}*/




