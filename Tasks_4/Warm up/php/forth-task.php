<?php
    session_start();

    //print_r($_POST);

    $row = $_POST['width-fourth-task'];
    $col = $_POST['height-fourth-task'];
    $_SESSION['chessboard-table'] = '';
    for ($i = 1; $i <= $row ; $i++) { 
        $_SESSION['chessboard-table'] .= '<tr>';
        for ($j = 1; $j <= $col ; $j++) { 
            $color = ($i + $j) % 2 ? 'white' : 'black';
            $_SESSION['chessboard-table'] .= "<td bgcolor='{$color}' width='20px' height='20px'></td>"; 
        }
        $_SESSION['chessboard-table'] .= '</tr>';
    }

    header('Location: /index.php');
?>