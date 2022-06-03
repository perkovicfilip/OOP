/*var avioni = 
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
]*/
var avioni;
var div_avioni = [];
var avioni_src = ["img/avion1.png", "img/avion2.png", "img/avion1.png", 
				  "img/avion2.png", "img/avion1.png", "img/avion2.png"
];


var br_click = 0;

function prikazi_Avione() {
	
	br_click++;

	if(br_click % 2 == 1) {
		document.getElementById("btn_avioni").value = "Zatvori";
		prikaz();
	}
	else {
		document.getElementById("btn_avioni").value = "Prikazi";
		zatvori();

	}
	function prikaz() {

		main_div = document.createElement("div");
		main_div.className = "class_main_div";
		main_div.id ="id_main_div";

		roditelj = document.getElementById("avioni_main");
		btn_div = document.getElementById("btn_avion_display");
		footer_av = document.getElementById("footer_avioni");
		roditelj.appendChild(main_div);
		

		div_avioni[0] = document.createElement("div");
		div_avioni[1] = document.createElement("div");
		div_avioni[2] = document.createElement("div");
		div_avioni[3] = document.createElement("div");
		div_avioni[4] = document.createElement("div");
		div_avioni[5] = document.createElement("div");

		div_avioni[0].className="main_div_sub";
		div_avioni[1].className="main_div_sub";
		div_avioni[2].className="main_div_sub";
		div_avioni[3].className="main_div_sub";
		div_avioni[4].className="main_div_sub";
		div_avioni[5].className="main_div_sub";

		main_div.appendChild(div_avioni[0]);
		main_div.appendChild(div_avioni[1]);
		main_div.appendChild(div_avioni[2]);
		main_div.appendChild(div_avioni[3]);
		main_div.appendChild(div_avioni[4]);
		main_div.appendChild(div_avioni[5]);
		
		document.body.insertBefore(main_div, footer_av);

		for(var i = 0; i < 6; i++) {
			napuni_div(i);
		}
	}	

	function zatvori() {
		roditelj.appendChild(main_div);
		roditelj.removeChild(main_div);
	}
}

function napuni_div(i) {
	
	text = document.createElement("p");
	h3 = document.createElement("h3");	
	img = document.createElement("img");
	img.src = avioni_src[i];	
	
	div_avioni[i].appendChild(img);
	div_avioni[i].appendChild(h3);

	
	h3.innerText = avioni[i].ime;
	text.innerHTML = "\n" + avioni[i].kolicina;	
	text.innerHTML = "\n" + avioni[i].duzina;
	text.innerText += "\n" + avioni[i].raspon_krila;
	text.innerText += "\n" + avioni[i].kapacitet;
	text.innerText += "\n" + avioni[i].brzina;
	text.innerText += "\n" + avioni[i].visina_krstarenja;
	div_avioni[i].appendChild(text);
}

fetch('./data.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {	
	avioni = data['avioni'];   
  })
 

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




