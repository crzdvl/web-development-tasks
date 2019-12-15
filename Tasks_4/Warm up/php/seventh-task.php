<?php
    if(!isset($_SESSION['x'])) {$_SESSION['x']=1;} // дали значение переменной
    
    echo $_SESSION['x']++; // вывели потом увеличели
?>