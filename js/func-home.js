$(document).ready(function () {
	$slider = $("#slider");
	$prev = $("#btn-prev");
	$next = $("#btn-next");

	$slider.prepend($("section:last-child"));
	
	$slider.css({marginLeft: "-100%"});

	function moverD() {
		$slider.animate({marginLeft: "-200%"}, 700,
			function(){
				$slider.append($("section:first-child"));
				$slider.css({marginLeft: "-100%"});
			});
	}

	function moverE() {
		$slider.animate({marginLeft: "0"}, 700,
			function(){
				$slider.prepend($("section:last-child"));
				$slider.css({marginLeft: "-100%"});
			});
	}

	$next.click(function() {
		moverD();
	});

	$prev.click(function() {
		moverE();
	});

	function autoPlay() {
		interval = setInterval(function(){
			moverD();
		}, 5000);
	}

	autoPlay();
});