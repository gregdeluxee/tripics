//START Zepto
;(function($){


$("#test1").tap(function(){
	$(".connexion").addClass("hidden");
	$(".inscription").removeClass("hidden");
});

$("#test2").tap(function(){
	$(".inscription").addClass("hidden");
	$(".connexion").removeClass("hidden");
});


})(Zepto)


