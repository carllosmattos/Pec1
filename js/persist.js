$(document).ready(function () {
	
	// Variáveis de contole de estado.
	$control = true;
	$control2 = true;
	$control3 = false;
	$control4 = false;
	$control5 = false;
	$control6 = false;
	// Variáveis de contole de estado.	
	
	// Função para ABRIR menu lateral esquerdo.
	$(".btn-menu").click(function() {
		$(".menu").show(350);
		$(".tapclose").show(350);
		$(".bar-right").hide("fast");
		$control = false;
	});
	// Função para ABRIR menu lateral esquerdo.	

	// Função para FECAHR menu lateral esquerdo.	
	$(".btn-close").click(function() {
		$(".menu").hide(350);
		$(".tapclose").hide(350);
		$(".icon-left").show("fast");
		$control = true;
	});
	// Função para FECHAR menu lateral esquerdo.

	// Função para FECHAR menu lateral esquerdo *Toque fora do menu lateral.
	$(".tapclose").click(function() {
		$(".menu").hide(350);
		$(".tapclose").hide(350);
		$(".icon-left").show("fast");
		$(".rodape").show("fast");
		$control = true;
	});
	// Função para FECHAR menu lateral esquerdo *Toque fora do menu lateral.	

	// Função para manipulação de menu de Bolões.
	$("#t-01").click(function(){
		if (($control2 == false) && ($control3 == false) && ($control4 == false) && ($control4 == false) && ($control5 == false) || ($control2 == false)) {
			$("#menu-01").show("fast");
			$("#menu-02").hide("fast");
			$("#menu-03").hide("fast");
			$("#menu-04").hide("fast");
			$("#menu-05").hide("fast");
			$control2 = true;
			$control3 = false;
			$control4 = false;
			$control5 = false;
			$control6 = false;

		 } else {
		 	$("#menu-01").hide("fast");
		 	$control2 = false;
		 }
	});

	$("#t-02").click(function(){
		if (($control2 == false) && ($control3 == false) && ($control4 == false) && ($control4 == false) && ($control5 == false) || ($control3 == false)) {
			$("#menu-01").hide("fast");
			$("#menu-02").show("fast");
			$("#menu-03").hide("fast");
			$("#menu-04").hide("fast");
			$("#menu-05").hide("fast");
			$control2 = false;
			$control3 = true;
			$control4 = false;
			$control5 = false;
			$control6 = false;
		 } else {
		 	$("#menu-02").hide("fast");
		 	$control3 = false;
		 }
	});

	$("#t-03").click(function(){
		if (($control2 == false) && ($control3 == false) && ($control4 == false) && ($control4 == false) && ($control5 == false) || ($control4 == false)) {
			$("#menu-01").hide("fast");
			$("#menu-02").hide("fast");
			$("#menu-03").show("fast");
			$("#menu-04").hide("fast");
			$("#menu-05").hide("fast");
			$control2 = false;
			$control3 = false;
			$control4 = true;
			$control5 = false;
			$control6 = false;
		} else {
			$("#menu-03").hide("fast");
			$control4 = false;
		}
	});
	$("#t-04").click(function(){
		if (($control2 == false) && ($control3 == false) && ($control4 == false) && ($control4 == false) && ($control5 == false) || ($control5 == false)) {
			$("#menu-01").hide("fast");
			$("#menu-02").hide("fast");
			$("#menu-03").hide("fast");
			$("#menu-04").show("fast");
			$("#menu-05").hide("fast");
			$control2 = false;
			$control3 = false;
			$control4 = false;
			$control5 = true;
			$control6 = false;
		} else {
			$("#menu-04").hide("fast");
			$control5 = false;
		}
	});
	$("#t-05").click(function(){
		if (($control2 == false) && ($control3 == false) && ($control4 == false) && ($control4 == false) && ($control5 == false) || ($control6 == false)) {
			$("#menu-01").hide("fast");
			$("#menu-02").hide("fast");
			$("#menu-03").hide("fast");
			$("#menu-04").hide("fast");
			$("#menu-05").show("fast");
			$control2 = false;
			$control3 = false;
			$control4 = false;
			$control5 = false;
			$control6 = true;
		} else {
			$("#menu-05").hide("fast");
			$control6 = false;
		}
	});
	// Função para manipulação de menu de Bolões.

	$("#home").click(function () {
	    $(".content").load("home.php");
		$(".menu").hide(350);
		$(".tapclose").hide(350);
	});
	$("#modelLine").click(function () {
	    $(".content").load("models/modelLine.php");
	    $(".menu").hide(350);
	    $(".tapclose").hide(350);
	});

});