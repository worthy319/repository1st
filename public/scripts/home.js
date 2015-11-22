$("#menu").children("").each(function(i, item){
	$(item).on("click", function(){
		$("#menu").children("").each(function(i, item){ $(this).removeClass("menucurr");});
		$(item).addClass("menucurr");
	})
});

$("#e-folder").on("click", function(){
	var enable = $("#menu").attr("enable");
	if(enable == "false"){
		$("#menu").attr("enable", "true");
		$("#menu").css("display", "block");
	}else{
		$("#menu").attr("enable", "false");
		$("#menu").css("display", "none");
	}
});
