//START Zepto
;(function($){

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType.CAMERA;
    destinationType=navigator.camera.DestinationType;
    window.plugins.orientationLock.lock("landscape");
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
    $(".pics").css("background-image", "url(data:image/jpeg;base64," + imageData + ")");
}

function onFail(message) {
    alert('Failed because: ' + message);
}

$("#takePic").tap(function(){

	if (!navigator.camera) {
        alert("Camera API not supported", "Error");
        return;
    }
    
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL
	});
});
	




})(Zepto)

