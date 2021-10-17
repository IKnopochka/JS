		var names = ["Mishka", "Kathryn", "Irina", "Alina"];
		$("h1").text("My friends");

		for (var i = 0; i < names.length; i++) {
			$("body").append("<p>" + names[i] + "</p>");
		}

		$("p").append(" is the best!!!");

		$("h1").fadeTo(2000, 0.2);
		var timeUp = function () {
			alert("Timeout!");
		}
		setTimeout(timeUp, 3000);

		var clickHadler = function(event) {
			console.log("Click!!" + event.pageX + " " + event.pageY);
		}