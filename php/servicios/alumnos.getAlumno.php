<?php
// Incluir a classe de base de dados 
include_once("../classes/class.Database.php");

// Retorna um json
header('Content-Type: application/json;');

// Verifica o parametro
if (!isset($_GET['c'])) {
	echo json_encode( array('err' => true,'mensagem'=>"Falta do código") );
	die;
}


$codigo = htmlentities($_GET['c']);


// Verifica se existe
$sql = "SELECT count(*) as Existe FROM pessoa WHERE codigo = ".$codigo;
$existe = Database::get_valor_query($sql,"Existe");


if ($existe == 1) {
	// Se exitir, coloque no Json
	$sql = "SELECT * FROM pessoa WHERE codigo = ".$codigo;
	echo json_encode( Database::get_Row($sql) );	

}else{

	echo json_encode( array('err'=>true, 'mensagem'=>'Código nao existe') );

}


?>