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
		const houseAnimPosition = $("#block3")[0].getBoundingClientRect().top;
		const pumpkinsBodyAnimPosition = $("#block5")[0].getBoundingClientRect().top;

		if (houseAnimPosition >= 50 && houseAnimPosition <= 200) {
			if (!animStart.house) {
				$("#houseAnim")[0].beginElement();
				animStart.house = true;
			}
		} 
		else if (pumpkinsBodyAnimPosition >= 100 && pumpkinsBodyAnimPosition <= 300) {
			if (!animStart.pumpkins) {
				$("#pumpkinsBodyAnim")[0].beginElement();
				animStart.pumpkins = true;
			}
		} 
		else if ($(document).scrollTop() >= document.body.scrollHeight - 800) {
			if (!animStart.cat) {
				$("#catAnim")[0].beginElement();
				animStart.cat = true;
			}
		}

	});

});
