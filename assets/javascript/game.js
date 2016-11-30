

//Sailor Moon's Magic Number
/*The objective of this game is to match the magic number.
Magic Number: Randomly generated numbers between (27-77)
Click on the wand to generate a new number  
There are 4 Sailor Moon characters (Moon, Murcury, Venus, Mars) 
Each is associated with a randomly generated number. 
First Round->Sailor Moon: 7 ; Sailor Mercury: 30; Sailor Venus: 10; Sailor Mars: 20 
1. click on wand to start game and generate new random number
2. click on characters to chose a number
3. numbers appear in designated section*/


//Prepare for take off; Generate a random Magic number (btw 27-77) after clicking wand image 
$(document).ready(function() {

	//When wand is clicked: 
	$("#Wand").on("click", function() {
		var MagicNumber = ""; 

		for (var i = 0; i < 2; i++) {
		MagicNumber = MagicNumber + Math.floor((Math.random() * 9) + 1);
		
		}

		$("#MNumber").prepend(MagicNumber + "<br>"); 

	}); 

}); 


//Add pointers for all images
$(".images").css("cursor", "pointer");


//Associate image with number-done in html

/*var SailorMoon = 7;
var SailorMercury = 30;
var SailorVenus = 10;
var SailorMars = 20; */ 

// Retrieve number with click of character image

function Sailor(moon, mercury, venus, mars) {
	this.name = name; 
	this.number = [];
	this.onClick = function() {
			//function for random number goes here 
	}; 
}

var SailorMoon = new Sailor('Moon', 27)

 
