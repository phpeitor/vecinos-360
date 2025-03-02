$(document).ready(function() {

	$.get( "./config.json", function( _config ) {
		const kashio_url_base = _config.kashio_url_base;
		
		$(".terms-conditions-btn").click(function(){
			$("#iframeview").html('<iframe src="' + kashio_url_base + 'terminos-y-condiciones?mode=kashio-conditions-iframe" class="w-100 m-0" height="100%" frameborder="0"></iframe>');	
		});
	
		$(".privacy-policy-btn").click(function(){
			$("#iframeview").html('<iframe src="' + kashio_url_base + 'politica-de-privacidad/?mode=kashio-conditions-iframe" class="w-100 m-0" height="100%" frameborder="0"></iframe>');	
		});
	});

});

