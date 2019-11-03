function ListaCompleta() {
	var usuariosInativos = ["Joh Snow", "Thiago Matos", "Paulo Pereira", "Julia Pires"];
	var usuariosAtivos = ["Maxwel", "Natalia ", "Rafaela"];
	var listaCompleta = [...usuariosInativos, ...usuariosAtivos];

	var conteudo = '';
	listaCompleta.map(function (lista) {
	  conteudo += `<br /><div class="praticoTresLista__item">${lista}</div>`;
	});
	$('.praticoTresLista').html(conteudo);
  }

  function ListaAtivos() {
		function Usuario(name) {
			this.name = name;

			this.getName = function() {
				return this.name;
			};
		}
		let usuario = new Usuario('Maxwel');
		let usuario2 = new Usuario('Natalia');
		let usuario3 = new Usuario('Rafaela');

		let usuariosAtivos = [usuario.getName(), usuario2.getName(), usuario3.getName()];
		var conteudo = '';
		usuariosAtivos.map(function (lista) {
		  conteudo += `<br /><div class="praticoTresLista__item">${lista}</div>`;
		});
		$('.praticoTresLista').html(conteudo);
  }

  function ListaQuantidade() {
	let usuariosInativos = ["Joh Snow", "Thiago Matos", "Paulo Pereira", "Julia Pires"];
	let usuariosAtivos = ["Maxwel", "Natalia ", "Rafaela"];
	let listaCompleta = [...usuariosInativos, ...usuariosAtivos];
	let conteudo = `<br /><div class="praticoTresLista__item praticoTresLista__item--quantidade">${listaCompleta.length}</div>`;
	$('.praticoTresLista').html(conteudo);
  }

  function VerMapa() {
	if(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(MostrarMapa);
	else
		alert('Este navegador não tem suporte a Geolocalização');
}

function MostrarMapa(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	alert('Latidude.:' + latitude + ' - Longitude.: ' + longitude);
}

function FullScreen(){
	$('.figura').html(`<img id="figura__fundo" alt="" src="img/fundo1024.bmp" />`);
	var element = document.getElementById('figura__fundo');
	element.requestFullscreen();
  }

  function RetiraImagem(){
	$('.figura').html(`<img id="figura__fundo" alt="" src="" />`);
	var element = document.getElementById('figura__fundo');
	element.requestFullscreen();
  }
