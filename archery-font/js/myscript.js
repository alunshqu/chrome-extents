$("#sql_content_editor").css("font-size","25px");
$("#sql_content_editor").css("line-height","30px");
$(document).on('keyup', (e)=>{
	if(e.keyCode == 113) {
		$("#btn-sqlquery").click();
	}
})
