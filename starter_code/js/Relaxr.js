/*A.Regalado_Homework_Week-5*/


$(document).ready(function() {
function readmoreevent(e) {
	e.preventDefault();
	$(".readmore").hide(),
	$(".readless").show(),
	$("#show-this-on-click").slideDown("slow").show();
}
$(".readmore").click(readmoreevent);



function readlessevent(e) {
	e.preventDefault();
	$(".readless").hide(),
	$(".readmore").show(),
	$("#show-this-on-click").slideUp("slow").hide(200);
}
$(".readless").click(readlessevent);



function learnmoreevent(e) {
	e.preventDefault();
	$(".learnmore").hide(),
	$("#learnmoretext").slideDown("slow").show();
}
$(".learnmore").click(learnmoreevent);

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




