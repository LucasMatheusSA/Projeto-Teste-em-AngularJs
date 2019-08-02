<?php
// ======================================================
// Classe: class.Database.php
// Função: Se encarrega do manejo com a base de dados 
// Descrição: Várias funções uteis para o manejo dos dados
// 				
// 				
// ======================================================
	

class Database{

	private $_connection;
	private $_host = "localhost";
	private $_user = "projeto_user";
	private $_pass = "123456";
	private $_db   = "projeto_db";


	private static $_instancia;



	// ================================================
	// Metodo para obter estancia dos dados
	// ================================================
	public static function getInstancia(){

		if(!isset(self::$_instancia)){
			self::$_instancia = new self;
		}

		return self::$_instancia;
	}

	// ================================================
	// Construtor da classe base de dados
	// ================================================
	public function __construct(){
		$this->_connection = new mysqli($this->_host,$this->_user,$this->_pass,$this->_db);

		
		if (mysqli_connect_error()) {
			trigger_error('Falha na conexão de dados'. mysqli_connect_error(), E_USER_ERROR );
		}
	}

	// Metodo vacio __close para evitar duplicação
	private function __close(){}

	// Metodo para obter conexão com a base de dados
	public function getConnection(){
		return $this->_connection;
	}

	private function es_string($sql){
		if (!is_string($sql)) {
			trigger_error('class.Database.inc: $SQL enviado nao e um string: ' .$sql);
			return false;
		}
		return true;
	}


	public function get_Row($sql){
		
		if(!self::es_string($sql))
			exit();

		$db = DataBase::getInstancia();
		$mysqli = $db->getConnection();
		$resultado = $mysqli->query($sql);

		if($row = $resultado->fetch_assoc()){
			return $row;
		}else{
			return array();
		}
	}


	public function get_Cursor($sql){

		if(!self::es_string($sql))
			exit();


		$db = DataBase::getInstancia();
		$mysqli = $db->getConnection();

		$resultado = $mysqli->query($sql);
		return $resultado; 
	}


	public function get_json_rows($sql){

		if(!self::es_string($sql))
			exit();

		$db = DataBase::getInstancia();
		$mysqli = $db->getConnection();

		$resultado = $mysqli->query($sql);

		if (!$resultado ) {
		    return "class.Database.class: error ". $mysqli->error;
		}

		
		$i = 0;
		while($row = $resultado->fetch_assoc()){
			$registros[$i]= $row;
			$i++;
		};
		return json_encode( $registros );
	}


	public function get_json_row($sql){

		if(!self::es_string($sql))
			exit();

		$db = DataBase::getInstancia();
		$mysqli = $db->getConnection();

		$resultado = $mysqli->query($sql);


		if (!$resultado ) {
		    return "class.Database.class: error ". $mysqli->error;
		}


		if(!$row = $resultado->fetch_assoc()){
			return "{}";
		}
		return json_encode( $row );
	}


	public function get_valor_query($sql,$columna){

		if(!self::es_string($sql,$columna))
			exit();

		$db = DataBase::getInstancia();
		$mysqli = $db->getConnection();

		$resultado = $mysqli->query($sql);


		if (!$resultado ) {
		    return "class.Database.class: error ". $mysqli->error;
		}

		$Valor = NULL;
        if ($row = $resultado->fetch_assoc()) {
            $Valor = $row[$columna];
        }

        return $Valor;
	}


	public function ejecutar_idu($sql){

		if(!self::es_string($sql))
			exit();

		$db = DataBase::getInstancia();
		$mysqli = $db->getConnection();

		if (!$resultado = $mysqli->query($sql) ) {
		    return "class.Database.class: error ". $mysqli->error;
		}else{
			return $resultado;
		}

		

        return $resultado;
	}


	function crypt($aEncryptar, $digito = 7) {
        $set_salt = './1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        $salt = sprintf('$2a$%02d$', $digito);
        for($i = 0; $i < 22; $i++)
        {
            $salt .= $set_salt[mt_rand(0, 22)];
        }
        return crypt($aEncryptar, $salt);
    }

    function uncrypt($Evaluar, $Contra){

        if( crypt($Evaluar, $Contra) == $Contra)
            return true;
        else
            return false;
        
    }

}


?>