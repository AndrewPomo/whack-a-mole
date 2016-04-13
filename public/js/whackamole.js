"use strict";
(function() {
			
    $(document).ready(function() {

    	//available biebers
	    var biebers = ['jb1', 'jb2', 'jb3', 'jb4', 'stopwatch'];

	    //available bieber pits
	    var bieberPits = ["#bieberPitOne", "#bieberPitTwo", "#bieberPitThree", "#bieberPitFour", "#bieberPitFive", "#bieberPitSix", "#bieberPitSeven", "#bieberPitEight", "#bieberPitNine"];

	    // the player's score
	    var score = 0;

	    // The player's highest score
	    var highScore = 0;

	    // Time left in round
	    var timer = $('.timer').val();

	    // Show current Bieber
	    function showTheBieber() {
	    	var bieber = biebers[Math.floor(Math.random()*biebers.length)];
	    	var bieberPit = bieberPits[Math.floor(Math.random()*bieberPits.length)];
	    	setTimeout (function() {
		    	$('<img id="' + bieber + '" class="activeBieber center-block" src="/img/' + bieber + '.png">').css('top', '-40px').appendTo(bieberPit).animate({
		    		'top': '-190px'
		    	}, 300);
		    }, 550);
		    setTimeout (function() {
		    	hideTheBieber();
		    }, 1550);
	    }
	    //end show current Bieber

	    // Hide active Bieber
	    function hideTheBieber() {
	    	$('.activeBieber').animate({
		    		'top': '-40px'
		    	}, 500);
		    	setTimeout (function() {
		    		$('.activeBieber').remove();
		    	}, 500);
		    setTimeout (function() {
		    	var timer = $(".timer").val()
		    	if (timer == 0) {
		    		return;
		    		console.log(timer);
		    	} else {
		    		showTheBieber();
		    		console.log(timer);
		    	};
		    }, 1550);
	    }; 
	    //end hide active Bieber

	    // Start button 
	    $('.startBtn').click(function(event) {
	    	//hide any active Biebers & the start button
	    	hideTheBieber();
	    	$('#start').hide();

	    	// set score to zero
	    	var score = 0;
	    	$('.scoreNum').val(0);
	    	
	    	// Put the current bieber in the current bieberPit
	    	showTheBieber();

	    	// Timer stuff
	    	$('.timer').val(30);
	    	var timer = $('.timer').val();
		    var timerGo = setInterval(function() {
		    	// Turn off stopwatch listener
		    	$('.bieberPit').off('click', '#stopwatch');
		    	
		    	// Listen for stopwatch click. Add 5 sec if clicked
		    	$('.bieberPit').on('click', '#stopwatch', function() {
					var timerValue = parseInt($('.timer').val());
					$('.timer').val(timerValue+5);
				});
				var timer = $('.timer').val();
	    		timer--;
			   	$('.timer').val(timer);
	    		if (timer == 0) {
	    			clearInterval(timerGo);
	    			$('#start').show();
	    		}
	    	}, 1000);
	    	//End Timer Stuff
	    });

	    // Bieber click listener
	    $('.bieberPit').on('click', '.activeBieber', function() {
	    	var score = $('.scoreNum').val();
	    	var highScore = $('.highScoreNum').val();
	    	var timer = $('.timer').val();
	    	var bieberPit = ($(this).parent().attr('id'));
	    	var bieberId = ($(this).attr('id'));
	    	if (timer == 0)  {
	    		return
			} else {
				// Punch animation
		    	switch (bieberPit) {
					case "bieberPitOne":
		                $('#topFist').animate ({
		                	right : '320px'
		                }, 300);
		                setTimeout(function(){
		                	$('#topFist').animate ({
			                	right : '-1000px'
			                }, 300);
		                }, 600);
						break;
					case "bieberPitTwo":
		                $('#topFist').animate({
		                	right : '150px'
		                }, 300);
		                setTimeout(function(){
		                	$('#topFist').animate ({
			                	right : '-1000px'
			                }, 300);
		                }, 600);
						break;
					case "bieberPitThree":
		                $('#topFist').animate({
		                	right : '0px'
		                }, 300);
		                setTimeout(function(){
		                	$('#topFist').animate ({
			                	right : '-1000px'
			                }, 300)
		                }, 600);
						break;
					case "bieberPitFour":
		                $('#middleFist').animate({
		                	right : '320px'
		                }, 300);
		                setTimeout(function(){
		                	$('#middleFist').animate({
			                	right : '-1000px'
			                }, 300);
		                }, 600);
						break;
					case "bieberPitFive":
		                $('#middleFist').animate({
		                	right : '150px'
		                }, 300);
		                setTimeout(function(){
		                	$('#middleFist').animate({
			                	right : '-1000px'
			                }, 300);
		                }, 600);
						break;
					case "bieberPitSix":
		                $('#middleFist').animate({
		                	right : '0px'
		                }, 300);
		                setTimeout(function(){
		                	$('#middleFist').animate({
			                	right : '-1000px'
			                }, 300);
		                }, 600);
						break;
					case "bieberPitSeven":
		                $('#bottomFist').animate({
		                	right : '320px'
		                }, 300);
		                setTimeout(function(){
		                	$('#bottomFist').animate({
		                		right : '-1000px'
		                	}, 300);
		                }, 600);
						break;
					case "bieberPitEight":
		                $('#bottomFist').animate({
		                	right : '150px'
		                }, 300);
		                setTimeout(function(){
			                $('#bottomFist').animate({
			                	right : '-1000px'
			                }, 300);
		                }, 600);
						break;
					case "bieberPitNine":
		                $('#bottomFist').animate({
		                	right : '0px'
		                }, 300);
		                setTimeout(function(){
			                $('#bottomFist').animate({
			                	right : '-1000px'
			                }, 300);
		                }, 600);
						break;
				}; 
				//End of Punch Animation

		    	// Punch sound
		    	if (bieberId == 'stopwatch') {
		    		setTimeout(function(){
		    			$('#ching').get(0).play();
		    		}, 180);
		    	} else {
		    		setTimeout(function(){
		    			$('#punch').get(0).play();
		    		}, 180);
		    	}
		    	//End of punch sound

		    	// Update Scores
		    	score++
		    	$('.scoreNum').val(score);
		    	// High score logic
		    	if (score > highScore) {
		    	highScore++
					$('.highScoreNum').val(highScore);
    			};
		    };
	    }); 
	    //End of bieber click listener
    })
})();