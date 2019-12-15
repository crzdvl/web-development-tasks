<?php
    session_start();

    $number = $_POST['value-fifth-task'];
    $_SESSION['result-fifth-task'] = 0;

    if (isset($number)) {
        do {
            $_SESSION['result-fifth-task'] += $number % 10;
        } while ( $number = (int) ($number / 10) );    
    } else {
        exit;
    }
    
    header('Location: /index.php');
?>