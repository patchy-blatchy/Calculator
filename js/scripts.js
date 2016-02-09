
$( document ).ready(function() {

	var screen = $(".screen"); // screen calc
	var numberVal = $(".number").html();
	var devided = new RegExp("[\+\-\/\*]"); //regular expression for mathematical symbols


		function FindValues(){

        currVal = $(screen).val();
		return currVal;
	}


		$(".number").click(function(){
			var currentNum = $(this).html();
			currentNum.toString();
			var screenN = $(screen).val();// screen val

			var lastScreen = screenN.charAt(screenN.length-1); //last number

			var massiv2 = screenN.split(devided); // array divided by symbol
			var Value1 = massiv2[0];// first number
			var Value2 = massiv2[1]; //second number

			var Massiv = screenN.split(''); //create array by number

			var plus = screenN.includes("+");
			var minus = screenN.includes("-");
			var multiplication = screenN.includes("*");
			var division = screenN.includes("/");

			var allSight = ["*", "+", "/", "-"];
			
			var Special=allSight.includes(lastScreen);
			var NumSpecial=allSight.includes(currentNum);
			var Allspecial= allSight.includes(screenN);
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

			}else if(screenN == ""){
				$(screen).val(currentNum);

			}else{
				$(screen).val(screenN+currentNum); //concate numbers
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
			var ShowRes = $(screen).val();

			var plus = ShowRes.includes("+");
			var minus = ShowRes.includes("-");
			var multiplication = ShowRes.includes("*");
			var division = ShowRes.includes("/");

			var massiv2 = ShowRes.split(devided);
			console.log(massiv2);

			var Value1 = massiv2[0];// first number
			console.log(Value1);
			
			var Value2 = massiv2[1]; //second number
			console.log(Value2);

			

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