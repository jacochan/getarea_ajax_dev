/*
作者：jacochan
id 区域ID，
name 表单NAME，默认构成的是 表单名[0] 如：<select name="area[0]"></select>
key 级联表单序号，默认是0
返回的是json类型数据。jsonp等其他格式数据的请自行修改
默认扩展级联处理的是4级。你可以在if (selectold!=null){部分进行扩展增加。如果你更好的级联表单节点处理的办法，欢迎提供你的修改版本。
*/
function getarea(id,name,key) {
    $.getJSON("getAreaJson.php?id="+id+"/", function(json) {
		if (key == null || id==0) key=0;
		if (json != null) {
			var selectdom,
				area = document.getElementById("area"),
				selectold = document.getElementById(name+"_"+key);
			if (selectold!=null){
				if (key==1){
					if (document.getElementById(name+"_1")!=null) area.removeChild(document.getElementById(name+"_1"));
					if (document.getElementById(name+"_2")!=null) area.removeChild(document.getElementById(name+"_2"));
					if (document.getElementById(name+"_3")!=null) area.removeChild(document.getElementById(name+"_3"));
				}else if(key==2){
					if (document.getElementById(name+"_2")!=null) area.removeChild(document.getElementById(name+"_2"));
					if (document.getElementById(name+"_3")!=null) area.removeChild(document.getElementById(name+"_3"));
				}else{
					if (document.getElementById(name+"_3")!=null) area.removeChild(document.getElementById(name+"_3"));
				}
			}
			selectdom = document.createElement('select'); 
			selectdom.id = name+"_"+key;   
			selectdom.name = name+"["+key+"]";   
			area.appendChild(selectdom);
			selectdom.add(new Option('请选择'),0) 
			var _select = document.getElementById(name+"_"+key);
			_select.addEventListener("change",function(){getarea(this.value,name,key+1);},false); 
			//console.log(json.data);
			if (json.code==1){
				for(var item in json.data) {
					_select.options.add(new Option(json.data[item].value,json.data[item].id)); 
				}
			}else{
				area.removeChild(document.getElementById(name+"_"+key));
			}
            
		}
	});
}
/******  end     级联区域     ********/