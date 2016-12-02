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

//Generate variables
var Wins = 0;
var Losses = 0; 

//Instructions
// alert("Instructions: 1.Click on Wand  2.Pick Sailor Moon and her friends 3.Match the Magic Number!"); 

//Prepare for take off; Generate a random Magic number (btw 19 - 120) after clicking wand image 
$(document).ready(function() {

//Add pointers for all images
$(".images").css("cursor", "pointer");

	//When wand is clicked: 
	$("#Wand").on("click", function() {
		var MagicNumber = ""; 

		for (var i = 0; i < 2; i++) {
		MagicNumber = MagicNumber + Math.floor((Math.random() * 9) + 1);
		
		}

		$("#MNumber").prepend(MagicNumber + "<br>"); 

	}); 
		//Fade numbers after click to make new numbers appear
		// $("#MNumber").fadeOut(function() {
		// 	$(this).text(MagicNumber).fadeIn();
			
		// });
	//Generate random number with click on Sailor Moon character 
	$(".SM,.SMer,.SV,.SMars").on("click", function() {
		var MagicNumber = ""; 

		for (var i = 0; i < 2; i++) {
		MagicNumber = MagicNumber + Math.floor((Math.random() * 9) + 1);
		
		}

		$("#MOutput").prepend(MagicNumber + "<br>"); 

	}); 
}); 




//Associate image with number-done in html

/*var SailorMoon = 7;
var SailorMercury = 30;
var SailorVenus = 10;
var SailorMars = 20; */ 

// Retrieve number with click of character image (1 - 12)

function Sailor(moon, mercury, venus, mars) {
	this.name = name; 
	this.number = [];
	this.onClick = function() {
			//function for random number goes here 
	}; 
}

var SailorMoon = new Sailor('Moon', 27)

 
