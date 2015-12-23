//add easy-ui dialog loading 窗口
function addDialogLoading(obj, info , offsetHeight, needAdd){
	var wrap = obj;
	var myTop = (wrap.height()-$("div.datagrid-mask-msg",wrap).outerHeight()/2);
	if(offsetHeight!=undefined){
		myTop = offsetHeight;
	}
	if(needAdd!=undefined){
		myTop += document.body.scrollTop;
	}
	

	$("<div class=\"datagrid-mask\"></div>").css({display:"block",width:wrap.width(),height:wrap.height()}).appendTo(wrap);
	$("<div class=\"datagrid-mask-msg\"></div>").html(info).appendTo(wrap).css({display:"block",left:(wrap.width()-$("div.datagrid-mask-msg",wrap).outerWidth())/2,top:myTop});
}
//remove easy-ui dialog loading 窗口
function removeDialogLoading(obj){
	var wrap = obj;
	wrap.find("div.datagrid-mask-msg").remove();
    wrap.find("div.datagrid-mask").remove();
}