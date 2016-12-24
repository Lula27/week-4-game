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
// Wins and Losses Count
var wins = 0;
var losses = 0; 

// Scores 
var magicNumber = 0;
var mNumber = 0;

// Values for individual Sailor Scouts 
var moon = 0; 
var murcury = 0; 
var venus = 0;  
var mars = 0;  


//Instructions
// alert("Instructions: 1.Click on Wand  2.Pick Sailor Moon and her friends 3.Match the Magic Number!"); 

//Prepare for take off; Generate a random Magic number (btw 19 - 120) after clicking wand image 
$(document).ready(function() {

//Add pointers for all images
$('.images').css('cursor', 'pointer');

// Helper Function for generating random number
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); 
};

// console.log(getRandom);

// Update values of variables 
magicNumber += getRandom(19, 120);
mNumber += (moon + murcury + venus + mars);  
// console.log(mNumber); 


// Give value to images/Sailor Scouts (api use)
moon += getRandom(1, 12); 
// console.log(moon); 
murcury += getRandom(1, 12); 
// console.log(murcury); 
venus += getRandom(1, 12);
mars += getRandom(1, 12);
// console.log(venus); 
// console.log(mars); 

	// Start & Restart Game-flesh this out!
	// var startGame = function() {};

	// set new set Magic number to specified range


	//When wand is clicked: 
	$('#Wand').on('click', function() {
		var magicNumber = ""; 

		for (var i = 0; i < 2; i++) {
		magicNumber = getRandom(19, 120);
		
		}

		$('#MNumber').html(magicNumber + '<br>'); 
	
	}) 
		//Fade numbers after click to make new numbers appear
		// $("#MNumber").fadeOut(function() {
		// 	$(this).text(MagicNumber).fadeIn()
	// $('#MNumber').fadeOut(MagicNumber + '<br>'); ;
			
		// });

	//Generate random number (btw 1-12) with click on Sailor Moon character -How do I get them to add up? 
	$('.SM,.SMer,.SV,.SMars').on('click', function() {
		var mNumber = ""; 

		for (var i = 0; i < 2; i++) {
		mNumber = mNumber + Math.floor((Math.random() * 3) + 1);
		
		}

		$('#MOutput').html(mNumber + '<br>'); 

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


	// Scores Count
	if (magicNumber === mNumber) {
		alert("You win!");
		Wins++; 
	}








}); 




// Retrieve number with click of character image (1 - 12)

// function Sailor(moon, mercury, venus, mars) {
// 	this.name = name; 
// 	this.number = [];
// 	this.onClick = function() {
		
// 	}; 
// }

// var SailorMoon = new Sailor('Moon', 27)

 
