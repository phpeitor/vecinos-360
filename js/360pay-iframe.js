$(document).ready(function() {
	function renderLegalMockContent(title, sections) {
		var sectionsHtml = sections
			.map(function(section) {
				return (
					'<section class="mb-3">' +
						'<h6 class="mb-2 text-primary">' + section.heading + '</h6>' +
						'<p class="mb-0 text-muted">' + section.text + '</p>' +
					'</section>'
				);
			})
			.join('');

		return (
			'<div class="p-4" style="background:#ffffff; min-height:100%;">' +
				'<h4 class="mb-3">' + title + '</h4>' +
				'<p class="mb-4 text-muted">Este contenido es referencial para pruebas visuales del modal.</p>' +
				sectionsHtml +
				'<hr>' +
				'<small class="text-muted">Version de prueba v0.1 - Ultima actualizacion: 22/03/2026</small>' +
			'</div>'
		);
	}

	$(".terms-conditions-btn").click(function(){
		$("#iframeview").html(
			renderLegalMockContent('Terminos y condiciones', [
				{
					heading: '1. Uso del servicio',
					text: 'El usuario declara que utilizara la plataforma de pago para fines licitos y bajo su responsabilidad.'
				},
				{
					heading: '2. Procesamiento de pagos',
					text: 'Las operaciones pueden tomar algunos minutos en reflejarse segun el canal y horario de procesamiento.'
				},
				{
					heading: '3. Soporte y reclamos',
					text: 'Para incidencias, el usuario puede contactar al canal de soporte indicado por la empresa recaudadora.'
				}
			])
		);
	});

	$(".privacy-policy-btn").click(function(){
		$("#iframeview").html(
			renderLegalMockContent('Politicas de privacidad', [
				{
					heading: '1. Datos recolectados',
					text: 'Se pueden recolectar datos de identificacion y transaccion con fines operativos y de seguridad.'
				},
				{
					heading: '2. Finalidad del tratamiento',
					text: 'La informacion se utiliza para validar operaciones, prevenir fraude y mejorar la experiencia del usuario.'
				},
				{
					heading: '3. Conservacion de la informacion',
					text: 'Los datos se almacenan por el tiempo necesario para cumplir obligaciones legales y contractuales.'
				}
			])
		);
	});

});

