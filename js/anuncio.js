$(document).ready(function () {
	
	function loadAnunc() {
		$(".todoModal").fadeIn(350);
	}

	loadAnunc();

	$sliderA = $(".corpo-modal");

	$sliderA.prepend($("article:last-child"));
	
	$sliderA.css({marginLeft: "-100%"});

	function moverD2() {
		$sliderA.animate({marginLeft: "-200%"}, 700,
			function(){
				$sliderA.append($("article:first-child"));
				$sliderA.css({marginLeft: "-100%"});
			});
	}

	function autoPlay2() {
		interval = setInterval(function(){
			moverD2();
		}, 4000);
	}
	
	autoPlay2();

	// Função para fechar anúcio
	$(".closeBtn").click(function() {
		$(".todoModal").fadeOut(350);
	});
	// Função para fechar anúcio	

});