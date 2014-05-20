//START Zepto
;(function($){


var searchMenu = document.querySelector("#menu input[type=text]");
searchMenu.onfocus=function(){
	this.className = "search";
	document.querySelector("#menu input[type=submit]").className = "search";
}
searchMenu.onblur=function(){
	this.className = "";
	document.querySelector("#menu input[type=submit]").className = "";
}


function onSuccess(imageData) {
    var image = document.getElementById('pictureTest');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

$("#spanTest").tap(function(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL
	});
});
	




})(Zepto)

