function onkeydown(key) {
	let code = key.keyCode;
	switch(code) {
		case 65://a
			break;
		case 87://w
			window.scrollTo({ 
				top: document.documentElement.scrollTop - 50, 
				behavior: "smooth" 
			});
			break;
		case 83: //	s
			window.scrollTo({ 
				top: document.documentElement.scrollTop + 50, 
				behavior: "smooth" 
			});
			break;
		case 68: //d
			$(".readerFooter_button").click();
			break;
		default:
			break;
	}
}
document.addEventListener("keydown", onkeydown, true);
