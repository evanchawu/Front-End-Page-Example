
//$(document).ready()
//固定寫法，整個網頁tag跟css都做完，js再來做，不然會出問題，這也是call back。
//.css(塞一個物件) loading-bar之前沒寫css沒關係 

$(document).ready(function()
{
	$('.loading-bar').css({"width":0})
	.animate({"width":"100%"},3000,
		function()
		{
			$('#loading-mask').fadeOut(1200);
		})

});





