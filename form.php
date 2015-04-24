<?php
require_once 'classes/database.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $campos = '';
    $valores = '';
    $parametros_pdo = array();
    $favorito = false;
    
    // get the values from the POST and creates an array to insert into the database.
    foreach ($_POST as $key => $value) {
        $parametros_pdo[':' . filter_var($key)] =  filter_input(INPUT_POST, $key, FILTER_SANITIZE_STRING);      
        $valores .= ':' . filter_var($key) . ',';
        $campos .= filter_var($key) . ',';
        if ($key == 'favorito'){
          $favorito = true;
        }
    }
  
    // audio must be added as a blob, which is a binary value.
    $name  = $_FILES['kiki']['tmp_name'];
    $blob = fopen($name,'rb');
    $valores .= ':kiki ';
    $campos .= 'kiki ';
  
    $campos = substr($campos, 0, strlen($campos) - 1);
    $valores = substr($valores, 0, strlen($valores) - 1);
    
    $insert = "INSERT INTO dinofriends ($campos) VALUES ($valores)";
    
    try {
        $db = database::getInstance();
        $stmt = $db->prepare($insert);
        $stmt->bindParam(':name',$parametros_pdo[':name']);
        $stmt->bindParam(':kiki_name',$parametros_pdo[':kiki_name']);
        $stmt->bindParam(':kiki',$blob,PDO::PARAM_LOB);
        $stmt->bindParam(':twitter',$parametros_pdo[':twitter']);
        $stmt->bindParam(':email',$parametros_pdo[':email']);
        $stmt->bindParam(':message',$parametros_pdo[':message']);
        $stmt->execute();
        
        header('Location: ' . 'send.php?msg=ok');
    } catch (PDOException $e) {
        header('Location: ' . 'send.php?msg=no');
    }
}
        