/*A.Regalado_Homework_Week-5*/


$(document).ready(function() {
// Great job using the $(document).ready function! I would recommend indenting your code that's within it, just to make sure it's clear what is contained.

	function readmoreevent(e) {
		e.preventDefault();
		// I love that you passed the "e" argument through your function and are preventing default that way! It shows that you understand what's happening here and it's something you will see in the real world all the time.
		$(".readmore").hide(),
		$(".readless").show(),
		$("#show-this-on-click").slideDown("slow").show();
	}
	$(".readmore").click(readmoreevent);



	function readlessevent(e) {
		e.preventDefault();
		$(".readless").hide(),
		$(".readmore").show(),

		// Great job adding and removing the .readmore and .readless elements! I would recomment putting your .readmore element below the hidden .show-this-on-click element, because then when you click the "readless" element, it will be displayed below the element that is scrolling up. It looks a bit cleaner that way!
		$("#show-this-on-click").slideUp("slow").hide(200);
	}
	$(".readless").click(readlessevent);



	function learnmoreevent(e) {
		e.preventDefault();
		$(".learnmore").hide(),
		$("#learnmoretext").slideDown("slow").show();
	}
	$(".learnmore").click(learnmoreevent);

	// I absolutely LOVE that you used named callback functions instead of anonymous functions! It's my personal preference and I think it makes a lot more sense. I would probably structure your code so you have all the click events at the top of the page and then the functions defined below, but that is personal preference.

});


/*********** Using Different Method*********
********************************************/
/*

$(document).ready(function() {
$(".readmore").click(function(e) {
	e.preventDefault();
	$("#show-this-on-click").slideDown("slow").show(),
	$(".readmore").hide();
	$(".readless").show();
});

$(".readless").click(function(e) {
	e.preventDefault();
	$("#show-this-on-click").slideUp("slow").hide(),
	$(".readless").hide();
	$(".readmore").show();

});

$(".learnmore").click(function(e) {
	e.preventDefault();
	$("#learnmoretext").slideDown("slow").show();
	$(".learnmore").hide();
});

});

*/
/***********************************************
***********************************************/
