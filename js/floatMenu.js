$(document).ready(function () {
	// Função para esconder menu, cabeçalho, rodapé e afastar icones laterais.
	$("html").dblclick(function(){
		if ($control == true) {
			// $(".header").hide(350);
			$(".icon-left").hide("fast");
			$(".sexto").hide("fast");
			// $(".content").css({marginTop: "2%"});
			// $(".rodape").hide(350);
			$control = false;
		} else {
			// $(".header").show(350);
			$(".icon-left").show("fast");
			$(".sexto").show("fast");
			// $(".content").css({marginTop: "19%"});
			// $(".rodape").show(350);
			$control = true;
		}
	});
	// Função para esconder menu, cabeçalho, rodapé e afastar icones laterais.	

	// Função para exibir botões laterias
	$(".icone01").click(function(){
		if ($control == true) {
			$(".link01").show("fast").delay(1500).hide("fast");
		}
	});
	$(".icone02").click(function(){
		if ($control == true) {
			$(".link02").show("fast").delay(1500).hide("fast");
		}
	});
	$(".icone03").click(function(){
		if ($control == true) {
			$(".link03").show("fast").delay(1500).hide("fast");
		}
	});
	$(".icone04").click(function(){
		if ($control == true) {
			$(".link04").show("fast").delay(1500).hide("fast");
		}
	});
	$(".icone05").click(function(){
		if ($control == true) {
			$(".link05").show("fast").delay(1500).hide("fast");
		}
	});
	// Função para exibir botões laterias

});