// Link to index.html
// try to add values with Sailor Moon icons 

//Generate variables
// Wins and Losses Count
var wins = 0;
var losses = 0; 

// Scores 
var magicNumber = 7;
var mNumber = 0;

// Values for individual Sailor Scouts 
var moon = 4; 
var murcury = 1; 
var venus = 1;  
var mars = 1;  


$(document).ready(function() {

// Add pointers for all images
$('.images').css('cursor', 'pointer'); 

// console.log(venus); 

mNumber = moon + murcury + venus + mars;

// console.log(mNumber);


// Generate random numbers 
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); 
};

// update moon value
moon += getRandom(1, 12); 

// Make numbers appear 
$('#wand').on('click', function() {
	$('#MNumber').html(magicNumber); 

});

$('.sM').on('click', function() {

	// give data value  
	var mvalue = $('.sM').data('moon',getRandom(1, 12)); 

	console.log(mvalue); 
	// $('#MOutput').html(mvalue); 
});

$('.sMer').on('click', function() {
	$('#MOutput').html(murcury); 
});

$('.sV').on('click', function() {
	$('#MOutput').html(venus); 
});

$('.sMars').on('click', function() {
	$('#MOutput').html(mars); 
});


// Wins & Losses
// if(magicNumber === mNumber) {
// 	alert("Winner"); 
// }








});