var searchMenu = document.querySelector("#menu input[type=text]");
searchMenu.onfocus=function(){
	this.className = "search";
	document.querySelector("#menu input[type=submit]").className = "search";
}
searchMenu.onblur=function(){
	this.className = "";
	document.querySelector("#menu input[type=submit]").className = "";
}