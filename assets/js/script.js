$("ul").on("click", "li", function(){
	$(this).toggleClass("selected");
});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input").keypress(function(event){
	var code = event.keyCode;
	if(code === 13){
		var value = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + value + "</li>")
		$(this).val("");
	}
});
$(".fa-plus").click(function(){
	$("input").slideToggle();
});