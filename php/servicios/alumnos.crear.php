<?php
// Incluir a classe da base de dados
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['nome'] = strtoupper($request['nome']);


$sql = "INSERT INTO pessoa(nome, fone, desc) 
		VALUES ( '". $request['nome'] ."',
				 '".$request['fone']."',
				 '".$request['desc']."' )";


$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {
	$Respuesta = json_encode( array('err' => false, 'mensagem'=>'Registro inserido.' ));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensagem'=> $Hecho ));
}

echo $Respuesta;

?>