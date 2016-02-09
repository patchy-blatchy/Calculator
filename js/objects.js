
$( document ).ready(function() {

	var obj ={
		first: "one",
		second: "two"
	}, prop;

	for(prop in obj){
		console.log(prop + ':' + obj[prop]);


	}



	;(function (){
		console.log("Это анонимная самовызывающая функция!");
	}) ();

});