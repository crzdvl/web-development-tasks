<?php

    session_start();

    for($i = 0;$i <= 100; $i++) {
        $arr[$i] = rand(1,10);    
    }
    $_SESSION['createArray'] = $arr;

    $arr = array_unique($arr, SORT_NUMERIC);
    $_SESSION['removeRepeats'] = $arr;

    sort($arr, SORT_NUMERIC);
    $_SESSION['sortArray'] = $arr;

    $arr = array_reverse($arr);
    $_SESSION['reverseArray'] = $arr;


    foreach($arr as $key_arr => $val_arr){
        $val_arr = $val_arr * 2;
    }
    $_SESSION['multipleByTwo'] = $arr;

    header('Location: /index.php');
?>