<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
	<title>Pechincha.Com | Atual Page</title>
	<link rel="stylesheet" href="css/frame.css">
	<link rel="stylesheet" href="css/style-principal.css">
	<link rel="stylesheet" href="css/anuncio.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/func-home.js"></script>
	<script type="text/javascript" src="js/persist.js"></script>
	<script type="text/javascript" src="js/anuncio.js"></script>
</head>
<body>

<!-- CABEÇALHO -->
	<header>
		<div class="header g-aj theme-b">
			<div class="g-jj"><a href="#"><img id="logo" src="img/logo-app.png"></a></div>
			<div class="g-cj">
				<a href="#">Nome de Usuário</a><br><a href="#">Pontos | Descontos</a>
			</div>
			<div class="g-jj"><button class="btn-menu theme-a"><img src="img/bars-white.png"></button></div>
		</div>
	</header>
<!-- CABEÇALHO -->

<!-- CONTENT -->
<div class="content">
	<?php require_once 'home.php';?>
</div>
<!-- CONTENT -->

<!-- RODAPÉ -->
	<footer>
		<div class="rodape g-aj theme-c">
			<div class="g-jj"><a href="#"><img id="logo" src="img/logo-app.png"></a></div>
			<div class="g-bj"><a href="#">DuduTec.Com</a><br><strong>&#169 Todos os direitos Reservados</strong></div>
		</div>
	</footer>
<!-- RODAPÉ -->

<?php require 'models/floatMenu.php'; ?>

<!-- MENU LATERAL -->
	<nav class="menu g-ca" id="menu">
		<div class="g-aj header-menu">
			<div class="g-bj"><h1>MENU</h1></div>
			
			<!-- BOTÃO FECHAR MENU -->
			<div class="g-jj">
				<button class="btn-close theme-d"><img src="img/delete-black.png"></button>
			</div>
			<!-- BOTÃO FECHAR MENU -->

		</div>
		<div class="g-ac content-menu">
			<div class="navegat">
				<h2 id="t-01">Navegação</h2>
				<ul class="sub-menu" id="menu-01" style="display: block"">
					<a id="home"><li>Home</li></a>
					<a id="modelLine"><li>Pesquisar</li></a>
					<a href="#"><li>Promoções</li></a>
					<a href="#"><li>Últimas ofertas</li></a>
					<a href="#"><li>Lista Econômica</li></a>
					<a href="#"><li>Lista de Compras</li></a>
					<a href="#"><li>Sair</li></a>
				</ul>
			</div>
			<div class="navegat">
				<h2 id="t-02">Categoria de Produtos</h2>
				<ul class="sub-menu" id="menu-02">
					<a href="#"><li>Supermercado</li></a>
					<a href="#"><li>Escolar</li></a>
					<a href="#"><li>Depósito</li></a>
					<a href="#"><li>Farmácia</li></a>
					<a href="#"><li>Móveis e eltrônicos</li></a>
					<a href="#"><li>Casa</li></a>
					<a href="#"><li>Vestuário</li></a>
					<a href="#"><li>Variedades</li></a>
				</ul>
			</div>
			<div class="navegat">
				<h2 id="t-03">Categoria de Serviços</h2>
				<ul class="sub-menu" id="menu-03">
					<a href="#"><li>Consrtrução</li></a>
					<a href="#"><li>Transporte</li></a>
					<a href="#"><li>Manutenção</li></a>
					<a href="#"><li>Outros</li></a>
				</ul>
			</div>
			<div class="navegat">
				<h2 id="t-04">Configurações</h2>
				<ul class="sub-menu" id="menu-04">
					<a href="#"><li>Perfil</li></a>
					<a href="#"><li>Conta</li></a>
					<a href="#"><li>Banco</li></a>
				</ul>
			</div>
			<div class="navegat">
				<h2 id="t-05">Informações</h2>
				<ul class="sub-menu" id="menu-05">
					<a href="#"><li>Sobre o App</li></a>
					<a href="#"><li>DuduTec.Com</li></a>
					<a href="#"><li>Regras</li></a>
					<a href="#"><li>Perguntas Frequentes</li></a>
				</ul>
			</div>
		</div>
	</nav>
<!-- MENU LATERAL -->

	<!-- ABA INVISÍVEL PARA FECHAR MENU (localizada a direita do meu lateral) -->
	<div class="g-ia tapclose"></div>
	<!-- ABA INVISÍVEL PARA FECHAR MENU (localizada a direita do meu lateral) -->

	<!-- POPUP ANÚNCIO -->
	<div class="todoModal">
		<div class="centerModal">
			<?php require 'models/anuncio.php'; ?>
		</div>
	</div>
	<!-- POPUP ANÚNCIO -->

</body>
</html>