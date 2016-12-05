<?php
    echo "本示例不能直接使用，请将以下代码用于您的框架代码中。本示例代码假设您在数据库中已创建城市级联数据表并导入了数据情况下使用";
    if (!is_numeric($_GET['id'])) exit(json_encode(array('code'=>0)));
	$id=intval($_GET['id']);
	$where['pid']=$id;
	$list="你的查询语句，$id要赋值在查询条件中的哦";
	if(!empty($list)){
		$data=array();
		foreach ($list as $k=> $v) {
			$data[$k]['id']=$v['cid'];
			$data[$k]['value']=$v['name'];
		}
		$json["code"]=1; //表示有数据
		$json["data"]=$data;
	}else{
		$json["code"]=0; //表示没有数据
		$json["data"]=array();
	}
	echo json_encode($json);
?>