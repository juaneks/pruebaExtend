
// prueba con extend

$.extend({
	javelin : function(elemento){
		elemento.delay(700).javelin();
	}
});

$.fn.javelin = function(parametros){
	options = $.extend({
		ancho:200,
		alto:120,
		animate:1500,
		colorFondo:'#232323'
	},parametros);

	this.animate({
		'width':options.ancho,
		'height':options.alto	
	},options.animate).css({
		'background':options.colorFondo
	});

	$.each(this,function(index,value){
		$(this).html('cambio la caja #'+(index+1)).css('color','#f00');
	});
}