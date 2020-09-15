$(document).ready(function () {

	// night sky: moon, stars, comet, 
	// where stars moving by mouse move, 
	// comet moving by event mouseenter on heading

	function SetRandNumber (min, max) {
		return (Math.floor(Math.random() * ((max + 1) - min)) + min);
	}

	let container = $("#title");

	// moon

	let moonTime = 50000;

	function MoonAnim () {
		
		let moonOffset = 10;

		$("<div class='moon'></div>").appendTo(container).css({
			"top" : (moonOffset + "px"),
			"left" : (moonOffset + "px")
		});

		let directionLeft = parseInt($(container).css("width")) - parseInt($(".moon").css("width")) - moonOffset;

		$(".moon").animate({
			left : (directionLeft + "px")
		}, moonTime, "linear", function () {
			$(this).remove();
		});	

	}
	MoonAnim();

	setInterval(MoonAnim, moonTime + 2000);

	// stars

	class SetStars {

		constructor () {
			this.numberStars = SetRandNumber(20,40);
			this.starSize = 2;
			this.checkPosMouse = true;
			this.changeOffset = true;
			this.xMouse = 0;
			this.yMouse = 0;
			this.starOffset = 0;
			this.stepMouse = 50;
			this.movementTime = 4000;	// ms
		}

		CreateStars (propertiesStar) {

			for (let i = 0; i < this.numberStars; i++) {
					
				let starMaxTopPos = parseInt($(container).css("height")) - this.starSize;
				let starMaxLeftPos = parseInt($(container).css("width")) - this.starSize;

				$("<div class='star'></div>").appendTo(container).css({
					"top" : (SetRandNumber(this.starSize, starMaxTopPos) + "px"),
					"left" : (SetRandNumber(this.starSize, starMaxLeftPos) + "px"),
					"width" : (this.starSize + "px"),
					"height" : (this.starSize + "px")
				}).show(500);

			}

		}

		MovingStars (event) {

			if (this.checkPosMouse) {
				this.xMouse = event.pageX;
				this.yMouse = event.pageY;
				this.checkPosMouse = false;
				this.changeOffset = true;
			}

			if ((this.xMouse >= (event.pageX + this.stepMouse)) || (event.pageX >= (this.xMouse + this.stepMouse))) {
				// direction horizontal

				if (this.changeOffset) {

					this.changeOffset = false;
					
					for (let i = 0, maxOffset; i < this.numberStars; i++) {
					
						maxOffset = parseInt($(container).css("width")) - this.starSize;
						this.starOffset = SetRandNumber(0, maxOffset);

						$(".star:eq(" + i + ")").animate({
							left : (this.starOffset + "px")
						}, this.movementTime);

					}

					setTimeout(function () {
						this.checkPosMouse = true;
					}.bind(this), this.movementTime + 500);	

				}

			}
			else if ((this.yMouse >= (event.pageY + this.stepMouse)) || (event.pageY >= (this.yMouse + this.stepMouse))) {
				// direction vertical
				
				if (this.changeOffset) {

					this.changeOffset = false;
					
					for (let i = 0, maxOffset; i < this.numberStars; i++) {
					
						maxOffset = parseInt($(container).css("height")) - this.starSize;
						this.starOffset = SetRandNumber(0, maxOffset);

						$(".star:eq(" + i + ")").animate({
							top : (this.starOffset + "px")
						}, this.movementTime);

					}

					setTimeout(function () {
						this.checkPosMouse = true;
					}.bind(this), this.movementTime + 500);	

				}

			}

		}

	}

	let objSetStars = new SetStars;
	objSetStars.CreateStars();

	$(container).on("mousemove", function (event) {
		
		objSetStars.MovingStars(event);
		
	});

	// comet

	let checkComet = true;

	function createComet () {

		if (checkComet) {

			checkComet = false;

			let  startPos = ($(container).width() / 2) + ($(container).width() / 4);
			let  endPos = ($(container).width() / 2) - ($(container).width() / 4);

			$("<div></div>").appendTo(container).addClass("comet").
				css({
					"top" : 0,
					"left" : startPos + "px"
				});

			let top = $(container).height() - $(".comet:last").height();

			$(".comet:last").animate({
				"top" : top + "px",
				"left" : endPos + "px"
			}, 800, "linear", function () {
				$(this).remove();
				checkComet = true;
			});

		}	

	}

	$("#heading").on("mouseenter", function () {
		createComet();
	});

});
