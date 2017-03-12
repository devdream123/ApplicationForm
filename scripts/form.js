$(document).ready(function(){
		$(".btn-submit").click(function(){
			$(".form-modal").fadeIn();
			return false;
		});
		
		$(".close-modal").click(function(){
			$(".form-modal").fadeOut();
			$("form").trigger('reset');
			return false;
		});
});
