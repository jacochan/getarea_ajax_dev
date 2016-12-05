### 中国城市级联数据库 ajax级联代码

本来想完全基于原生js的。不过ajax部分需要封包，想想还是算了，不管你是用jquery还是其他js扩展框架，都有做ajax的封包方法。因此，本级联函数代码除了ajax提交部分外，其他都是基于原生js来写的。适用任何前端框架环境。

/*
作者：jacochan
id 区域ID，
name 表单NAME，默认构成的是 表单名[0] 如：<select name="area[0]"></select>
key 级联表单序号，默认是0
返回的是json类型数据。jsonp等其他格式数据的请自行修改
默认扩展级联处理的是4级。你可以在if (selectold!=null){部分进行扩展增加。如果你更好的级联表单节点处理的办法，欢迎提供你的修改版本。
*/

 **返回的数据包内容格式：** 
```
{"code":1,"data":[{"id":"1","value":"北京"},{"id":"2","value":"天津"},{"id":"3","value":"上海"}]}
```

 **前端调用：** 
```
<data id="area"></data>
<script>getarea(0,'area',0);</script>
```

已提供了城市级联mysql的sql导入文件，自行导入吧。
![示例图演](http://git.oschina.net/uploads/images/2016/1116/151614_83a2daac_58511.gif "中国城市级联数据库 ajax级联代码演示")