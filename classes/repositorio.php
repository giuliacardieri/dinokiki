<?php

require_once 'database.php';

class Repositorio {

    /**
     * Fetch from database everything from dinofriends table.
     * @return Array $data Returns an array with all objects from the table.
     */
    public static function getFriend() {
        $data = array();
        try {
            $db = Database::getInstance();
            $sql = 'SELECT * FROM dinofriends';
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $ex) {
            echo $ex->getMessage();
            return;
        }
        return $data;
    }   
}
