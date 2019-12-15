<?php
    session_start();

    $userText = $_POST['value-eighth-task'];

    $_SESSION['result-eighth-task'] = mb_strlen($userText, 'utf-8');

    header('Location: /index.php');
?>