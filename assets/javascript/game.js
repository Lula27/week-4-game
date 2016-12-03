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
var MagicNumber = Math.floor((Math.random() * 9) + 1);
var MNumber = Math.floor((Math.random() * 9) + 1);

//Instructions
alert("Instructions: 1.Click on Wand  2.Pick Sailor Moon and her friends 3.Match the Magic Number!"); 

//Prepare for take off; Generate a random Magic number (btw 19 - 120) after clicking wand image 
$(document).ready(function() {

//Add pointers for all images
$('.images').css('cursor', 'pointer');

	//When wand is clicked: 
	$('#Wand').on('click', function() {
		var MagicNumber = ""; 

		for (var i = 0; i < 2; i++) {
		MagicNumber = MagicNumber + Math.floor((Math.random() * 9) + 1);
		
		}

		$('#MNumber').html(MagicNumber + '<br>'); 
	
	}) 
		//Fade numbers after click to make new numbers appear
		// $("#MNumber").fadeOut(function() {
		// 	$(this).text(MagicNumber).fadeIn()
	// $('#MNumber').fadeOut(MagicNumber + '<br>'); ;
			
		// });

	//Generate random number (btw 1-12) with click on Sailor Moon character -How do I get them to add up? 
	$('.SM,.SMer,.SV,.SMars').on('click', function() {
		var MNumber = ""; 

		for (var i = 0; i < 2; i++) {
		MNumber = MNumber + Math.floor((Math.random() * 3) + 1);
		
		}

		$('#MOutput').html(MNumber + '<br>'); 

	})

	   // Responsive for winning/losing game:insert media clips
		// if (MagicNumber == MNumber) {  //Not working as expected. Losses alert keeps popping up and automatically adding... 
	 // 	Wins++;
	 // 	$('#wins').html(Wins); 
	 // 	alert('Moon Prism Power!');
		// }else {
	 // 	Losses++; 
	 // 	$('#losses').html(Losses); 
	 // 	alert('In the name of the moon, I will punish you!');
	// }

}); 




// Retrieve number with click of character image (1 - 12)

// function Sailor(moon, mercury, venus, mars) {
// 	this.name = name; 
// 	this.number = [];
// 	this.onClick = function() {
		
// 	}; 
// }

// var SailorMoon = new Sailor('Moon', 27)

 
