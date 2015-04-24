<?php

class database extends PDO{
    // accessing the mysql database
    private static $DB_NAME = 'dinokiki';
    private static $DB_HOST = 'localhost';
    private static $DB_USER = 'root';
    private static $DB_PWD = 'lolala'; // encriptar quando colocar no ar
    private static $database = null;
    
    // creates the PDO instance that representes the access to the database
    public function __construct() {
        $dsn = 'mysql:host=' . self::$DB_HOST . ';dbname=' . self::$DB_NAME;
        parent::__construct($dsn, self::$DB_USER, self::$DB_PWD);
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    
    // creates a new table if it doesn't exist
    public static function getInstance(){
        if(self::$database === null){
            self::$database = new database();
        }
        return self::$database;
    }
}
