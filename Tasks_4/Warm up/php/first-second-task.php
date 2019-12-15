<?php
    session_start();
    
    //print_r($_POST);
    $firstNumber = $_POST['value1-first-second-task'];
    $secondNumber = $_POST['value2-first-second-task'];
    $_SESSION['result-first-second-task'] = 0;
    $checkbox = $_POST['checkbox'];

    if (trim($firstNumber) == '' && trim($secondNumber) == '') {
        $_SESSION['result-first-second-task'] = 'Вы не ввели данные';
        header('Location: /index.php');
        exit;
    } else if (trim($firstNumber) == '' || trim($secondNumber) == '') {
        $_SESSION['result-first-second-task'] = 'Вы ввели одно число';
        header('Location: /index.php');
        exit;
    }

    if($firstNumber < $secondNumber){
        [$max, $min] = [$secondNumber, $firstNumber];
    }

    if($checkbox == ''){
        for(; $max >= $min; $min++){
            $_SESSION['result-first-second-task'] += $min;
        }
    } else { 
        for(; $max >= $min; $min++){
            $balanceFromMin = $min % 10;
            if($balanceFromMin == 2 or $balanceFromMin == 3 or $balanceFromMin == 3 or $min == 2 or $min == 3 or $min == 7)
                $_SESSION['result-first-second-task'] += $min;
        }
    }
    
    header('Location: /index.php');
?>