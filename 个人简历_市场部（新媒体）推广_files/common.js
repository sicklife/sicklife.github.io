// 没有选中的操作记录
function notSelectedRow(dataGridRow){
	if(dataGridRow.length < 1){
		$.messager.alert('提示', '没选中任何操作记录', 'info');
		return true;
	}
	return false;
}

// 只能选择一条记录
function notSingleRow(dataGridRow){
	if(dataGridRow.length > 1) {
		$.messager.alert('提示','请只选择一条记录进行操作','info');
		return true;
	}
	return false;
}

// 调用easyUI的结果输出方法
function showResult(title, message){
	$.messager.show({	// show error message
		title: title,
		msg: message,
		timeout: 3000,
		showType: 'slide'
	});
} 

// 写replace all的方法
String.prototype.replaceAll = function(stringToFind,stringToReplace){
    var temp = this;
    var index = temp.indexOf(stringToFind);
        while(index != -1){
            temp = temp.replace(stringToFind,stringToReplace);
            index = temp.indexOf(stringToFind);
        }
        return temp;
}

// js格式化字符串方法
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
	// millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}


