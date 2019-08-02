<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$request['nome'] = strtoupper($request['nome']);


$sql = "UPDATE pessoa SET
			nome = '".$request['nome']."',
			fone = '".$request['fone']."',
			desc = '".$request['desc']."' 
		WHERE codigo = ".$request['codigo'];

$Hecho = Database::ejecutar_idu($sql);
$Respuesta = "";

if ($Hecho == "1") {
	$Respuesta = json_encode( array('err' => false, 'mensagem'=>'Registro Atualizado.' ));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensagem'=> $Hecho ));
}

echo $Respuesta;

?>