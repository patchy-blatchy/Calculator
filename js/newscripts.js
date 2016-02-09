
$( document ).ready(function() {

	var screen = $(".screen"); // screen calc
	var numberVal = $(".number").html();
	var devided = new RegExp("[\+\-\/\*]"); //regular expression for mathematical symbols


	function FindValues(){

		currVal = $(screen).val();

		plus = currVal.includes("+");
		minus = currVal.includes("-");
		multiplication = currVal.includes("*");
		division = currVal.includes("/");

		massiv2 = currVal.split(devided);// array divided by symbol

		Value1 = massiv2[0];// first number	
		Value2 = massiv2[1]; //second number

		// return currVal;
	}


		$(".number").click(function(){
			var currentNum = $(this).html();
			currentNum.toString();

			FindValues();

			var lastScreen = currVal.charAt(currVal.length-1); //last number

			var Massiv = currVal.split(''); //create array by number

			var allSight = ["*", "+", "/", "-"];
			
			var Special=allSight.includes(lastScreen);
			var NumSpecial=allSight.includes(currentNum);
			var Allspecial= allSight.includes(currVal);
			var FirstSpecial= allSight.includes(Massiv[0]);


			if (FirstSpecial){ //do this code when first element is  mathematical symbol
				 Massiv.shift();
				 var replarray= Massiv.join(''); // create string
				 $(screen).val(replarray+currentNum);

			}else if(Special && NumSpecial){  // do this code when it has two mathematical symbols
				Massiv.pop(); //delete last number in array
				Massiv.push(currentNum); // add number in array
				var replnum= Massiv.join(''); // create string

				$(screen).val(replnum);

			}else if(currVal == ""){
				$(screen).val(currentNum);

			}else{
				$(screen).val(currVal+currentNum); //concate numbers
			}

			if (plus && Value2 !=="" && NumSpecial){
				var result = parseFloat(Value1) + parseFloat(Value2);
				$(screen).val(result);
			}
			else if (minus && Value2 !=="" && NumSpecial){
				var result = parseFloat(Value1) - parseFloat(Value2);
				$(screen).val(result);
			}			
			else if (multiplication && Value2 !=="" && NumSpecial){
				var result = parseFloat(Value1) * parseFloat(Value2);
				$(screen).val(result);
			}			
			else if (division && Value2 !=="" && NumSpecial){
				var result = parseFloat(Value1) / parseFloat(Value2);
				$(screen).val(result);
			}
			
		});



		//Calculation

		$(".calcN").click(function(){

			FindValues();

			if (plus){
				var result = parseFloat(Value1) + parseFloat(Value2);
				$(screen).val(result);
			}
			else if (minus){
				var result = parseFloat(Value1) - parseFloat(Value2);
				$(screen).val(result);
			}			
			else if (multiplication){
				var result = parseFloat(Value1) * parseFloat(Value2);
				$(screen).val(result);
			}			
			else if (division){
				var result = parseFloat(Value1) / parseFloat(Value2);
				$(screen).val(result);
			}

		});

		$(".delete").click(function(){
			$(screen).val("");
		});



});