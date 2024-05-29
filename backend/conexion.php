<?php
class DBConfig {
    private $host = "127.0.0.1:3307";
    private $username = "root";
    private $password = "";
    private $dbname = "poo";

    public function getConnection() {
        $conn = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    }
}
?>
