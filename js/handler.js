$(document).ready(function () {

	$("#heading").css({
		"top" : ($("#title").height() / 2) - $("#heading").height(),
		"left" : ($("#title").width() / 2) - ($("#heading").width() / 2)
	});

	let animStart = {
		house : false,
		pumpkins : false,
		cat : false
	};

	$(document).on("scroll", function () {

		if ($(document).scrollTop() >= 930 && $(document).scrollTop() <= 1004) {
			if (!animStart.house) {
				$("#houseAnim")[0].beginElement();
				animStart.house = true;
			}
		} 
		else if ($(document).scrollTop() >= 1870 && $(document).scrollTop() <= 2050) {
			if (!animStart.pumpkins) {
				$("#pumpkinsBodyAnim")[0].beginElement();
				animStart.pumpkins = true;
			}
		} 
		else if ($(document).scrollTop() >= 2850) {
			if (!animStart.cat) {
				$("#catAnim")[0].beginElement();
				animStart.cat = true;
			}
		}

	});

});
