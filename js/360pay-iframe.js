$(document).ready(function() {
	function renderLegalMockContent(title, intro, sections) {
		var sectionsHtml = sections
			.map(function(section) {
				return (
					'<section class="mb-4">' +
						'<h6 class="mb-2 text-primary font-weight-bold">' + section.heading + '</h6>' +
						'<p class="mb-0 text-muted">' + section.text + '</p>' +
					'</section>'
				);
			})
			.join('');

		return (
			'<div class="p-4 p-md-5" style="background:#ffffff; min-height:100%;">' +
				'<h4 class="mb-3 text-blue font-weight-bold">' + title + '</h4>' +
				'<p class="mb-4 text-muted">' + intro + '</p>' +
				'<div class="alert alert-info py-2 mb-4" role="alert">Contenido de prueba para validacion visual y funcional del modal.</div>' +
				sectionsHtml +
				'<hr>' +
				'<small class="text-muted">Ultima actualización: 24/06/2026</small>' +
			'</div>'
		);
	}

	$(".terms-conditions-btn").click(function(){
		$("#iframeview").html(
			renderLegalMockContent('Terminos y condiciones', 'Estos terminos regulan el uso de la plataforma Vecinos 360 y del servicio 360pay para realizar pagos digitales.', [
				{
					heading: '1. Aceptacion del servicio',
					text: 'Al usar la plataforma, el usuario acepta estas condiciones y declara que la informacion registrada para el pago es correcta.'
				},
				{
					heading: '2. Codigo de pago',
					text: 'El codigo de pago es personal para la operacion mostrada. El usuario debe verificar el monto, moneda, empresa recaudadora y fecha de vencimiento antes de pagar.'
				},
				{
					heading: '3. Confirmacion de operaciones',
					text: 'Los pagos realizados por bancos, billeteras, agentes o bodegas pueden demorar en actualizarse segun el canal utilizado y sus horarios de procesamiento.'
				},
				{
					heading: '4. Comisiones y cargos',
					text: 'Algunos canales podrian aplicar comisiones adicionales. Dichos cargos son informados por el canal de pago antes de finalizar la transaccion.'
				},
				{
					heading: '5. Soporte de prueba',
					text: 'Para consultas de prueba, comunicarse con soporte@vecinos360.test o llamar al (01) 555-3600 de lunes a viernes de 9:00 a.m. a 6:00 p.m.'
				}
			])
		);
	});

	$(".privacy-policy-btn").click(function(){
		$("#iframeview").html(
			renderLegalMockContent('Politicas de privacidad', 'Esta politica describe de forma referencial como se tratarian los datos personales asociados a una operacion de pago.', [
				{
					heading: '1. Datos recolectados',
					text: 'Podrian registrarse datos como codigo de pago, monto, moneda, canal utilizado, fecha de operacion, direccion IP y datos tecnicos del navegador.'
				},
				{
					heading: '2. Finalidad del tratamiento',
					text: 'La informacion se usaria para validar pagos, prevenir fraude, atender consultas, generar comprobantes y mejorar la experiencia del usuario.'
				},
				{
					heading: '3. Seguridad',
					text: 'Los datos se almacenarian en entornos protegidos con controles de acceso, monitoreo y medidas razonables para evitar usos no autorizados.'
				},
				{
					heading: '4. Conservacion de la informacion',
					text: 'La informacion se conservaria durante el tiempo necesario para cumplir obligaciones operativas, contractuales, contables o legales.'
				},
				{
					heading: '5. Derechos del titular',
					text: 'El usuario podria solicitar acceso, rectificacion, cancelacion u oposicion escribiendo a privacidad@vecinos360.test.'
				}
			])
		);
	});

});

