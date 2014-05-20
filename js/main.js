//START Zepto
;(function($){

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}



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

$("#takePic").tap(function(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL
	});
});
	




})(Zepto)

