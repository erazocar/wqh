<?php
class Database{
    private $host = "s-l112.engr.uiowa.edu";
    private $db_name = "inf_db22";
    private $username = "inf_student05";
    private $password = "engr-2022-05";
    
    public $conn;

    public function getConn(){
        $this->conn = null;

        try{
            $this->conn = new PDO("pgsql:host=" . $this->host .";dname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>