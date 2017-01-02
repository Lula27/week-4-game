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

// Make numbers appear 
$('#wand').on('click', function() {
	$('#MNumber').html(magicNumber); 

});

$('.sM').on('click', function() {
	$('#MOutput').html(moon); 
});

$('.sMer').on('click', function() {
	$('#MOutput').html(moon); 
});

$('.sV').on('click', function() {
	$('#MOutput').html(moon); 
});

$('.sMars').on('click', function() {
	$('#MOutput').html(moon); 
});


// Wins & Losses
// if(magicNumber === mNumber) {
// 	alert("Winner"); 
// }








});