$(document).ready(function() {
	function getQueryVariable(variable) {
	   var query = window.location.search.substring(1);
	   var vars = query.split("&");
	   for (var i=0; i < vars.length; i++) {
	       var pair = vars[i].split("=");
	       if(pair[0] == variable) {
	           return pair[1];
	       }
	   }
	   return false;
	}

	function getGMTMinus5Date(date, gmt_difference) {
		const gmtDateTime = date;
		// Obtener el desplazamiento horario en minutos
		const offsetMinutes = new Date().getTimezoneOffset();
		// Calcular el desplazamiento horario en milisegundos
		const offsetMilliseconds = offsetMinutes * 60 * 1000;
		// Calcular la fecha y hora GMT-5
		return new Date(new Date(gmtDateTime).getTime() - offsetMilliseconds + gmt_difference * 60 * 60 * 1000).toISOString().replace('T', ' ').substring(0, 19);
	}

	function getDataOperation(){
		var token = getQueryVariable('token');
		var mode = getQueryVariable('mode');

		$.get( "./config.json", function( _config ) {
			document.title = _config.title;
			service = _config.service + token;
			
			if(token != ""){
				if(mode == ""){
					mode = 'web'
				}
				if(mode == "iframe"){
					$(".baner").css('display','none');
					url = "index.html?token="+token;
					$("#redirect").html('<a class="text-blue" href="'+url+'" target="_blank"> Abrir en sitio web </a>');
				}

				//GETOPERATION
				$.get(service, 
				  function( data , estado) {
				  	var status = data.status;
					var number_doc = data.document_number;
                    var ktin = data.ktin;
					var amount = data.amount;
					var currency = data.currency;
                    var kashio_service = "ADMINIO PERU SOLES";
                    if(currency == 'PEN' ){ symbol = 'S/.' } else { symbol = 'US$' ; kashio_service = "ADMINIO PERU DOLARES" };
					var time_expired = data.expiration_datetime;
					const gmt_difference = -5;

					//Renderiza datos a gateway
					$('.kashio_service').html(kashio_service);
					$('.doc').html(number_doc);
                    $('.ktin').html(ktin);
					$('.symbol-amount').html( symbol );
					$('.amount').html( formatNumber(amount) );
					
					//Renderiza tiempo de expiracion
					if (status == 4 ) {
						$('.time_expire').html( ' <p class="m-0">ESTADO</p>  <div class="d-flex justify-content-center countdown  "> <strong> <p class="m-0">  OPERACION PAGADA </p> <strong></div>'   );
						$('.instrucciones').css('display','none');	
					} else if (status == 1  || status == 2 || status == 8 || status == 9 ) {

						render_time(getGMTMinus5Date(time_expired, gmt_difference));
                        var one_day=1000*60*60*24;
                        var diff_days = Math.floor((new Date(time_expired) - Date.now())/one_day);
                       
                        if (diff_days == 0) {
							var show_days = false;    
							$('.show_days').css('display','none');   
							$('.label_days').css('display','none');   
						}
                        else if (diff_days == 1) {
							$('.label_days').html('&nbsp;día&nbsp;&nbsp;');	 
						}    

						setTimeout(() => {
							getDataOperation();
						}, 10000);

					} else if ( status == 3 ) {
						$('.time_expire').html( '<div class="d-flex justify-content-center"><p class="m-0">ESTADO</p> <div id="tooltip"><span id="tooltipText">Se recibió el aviso de pago y la confirmación tomará unos segundos para el canal digital (web y movil) y 5 minutos si el pago fue hecho en efectivo.</span> <span class="icon-info-outline"></span> </div></div>  <div class="d-flex justify-content-center countdown  "> <strong> <p class="m-0">  EN PROCESO </p> <strong></div>'   );
						$('.instrucciones').css('display','none');	
						setTimeout(() => {
							getDataOperation();
						}, 10000);
					} else if (status == 5|| status == 7 ) {
						$('.time_expire').html( ' <p class="m-0">ESTADO</p>  <div class="d-flex justify-content-center countdown  "> <strong> <p class="m-0">  OPERACION ANULADA </p> <strong></div>'   );
						$('.instrucciones').css('display','none');	
					} else {
						$('.time_expire').html( ' <p class="m-0">ESTADO</p>  <div class="d-flex justify-content-center countdown  "> <p class="m-0"> <strong>OPERACION EXPIRADA </strong></p> </div>'   );
						$('.instrucciones').css('display','none');	
					}
				});
			} else {
				$(".content_payment").css('display','none');
			}
	  	});

	}

	function formatNumber(num) {
	    if (!num || num == 'NaN') return '0';
	    if (num == 'Infinity') return '&#x221e;';
	    num = num.toString().replace(/\$|\,/g, '');
	    if (isNaN(num))
	        num = "0";
	    sign = (num == (num = Math.abs(num)));
	    num = Math.floor(num * 100 + 0.50000000001);
	    cents = num % 100;
	    num = Math.floor(num / 100).toString();
	    if (cents < 10)
	        cents = "0" + cents;
	    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
	        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
	    return (((sign) ? '' : '-') + num + '.' + cents);
			//return (((sign) ? '' : '-') + num);
	}
	
	function render_time(time_expired){
			//countdown
			$("#dias").countdown(time_expired, function(event) {
				$(this).text(
				  event.strftime('%D')
				);
			});

			$("#horas").countdown(time_expired, function(event) {
				$(this).text(
				  event.strftime('%H')
				);
			});

			$("#minutos").countdown(time_expired, function(event) {
				$(this).text(
				  event.strftime('%M')
				);
			});

			$("#segundos").countdown(time_expired, function(event) {
				$(this).text(
				  event.strftime('%S')
				);
			});
	}

	getDataOperation();

});
