<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Warm Up</title>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

        <div id="headline">
            <h1>Warm Up</h1>
        </div>

        <section class="task-session">
            <h4>7) Counter</h4>
            <div class="container">
                <p>
                    <?php
                        if (!isset( $_SESSION['count'])) {
                            $_SESSION['count'] = 1;
                        } else {
                            $_SESSION['count']++;
                        }
                        echo $_SESSION['count'];
                    ?>
                </p>
            </div>
        </section>

        <section class="task">
            <h4>1, 2) посчитать сумму чисел от -1000 до 1000</h4>

            <form action="php/first-second-task.php" method="post">
                <input name="value1-first-second-task" type="number">
                <input name="value2-first-second-task" type="number">
                <label class="checkbox-container">суммируя только числа которые заканчиваются на 2,3, и 7
                    <input type="checkbox" name="checkbox">
                    <span class="checkmark"></span>
                </label>
                <input type="submit" class="button" name="button" value="Посчитать"/>
            </form>
            <div class="container">
                <p>
                    <?php
                        if (isset($_SESSION['result-first-second-task'])) {
                            echo $_SESSION['result-first-second-task'];
                        }
                    ?>
                </p>
            </div>
        </section>

        <section class="task">
            <h4>3) Сделать загрузку файлов</h4>

            <form action="php/third-task.php" method="post" enctype="multipart/form-data">
                <input type="file" name="my_file" /><br /><br />
                <input type="submit" name="submit" value="Upload"/>
            </form>
            <div class="container">
                <table>
                    <tr>
                        <th>Название</th>
                        <th>Размер</th>
                        <th>Предпросмотр</th>
                    </tr>
                    <?php

                        $name = $_SESSION['file-name'];
                        $filePath = $_SESSION['path-file'];
                        $size = $_SESSION['file-size'];

                        if (isset($name)) {
                        echo "<tr>
                                <th><a class='text-box' href='pics/$filePath' download>" . $name . '</a></th>
                                <th><p>' . $size . 'kb</p></th>
                                <th><img src="php/'.$filePath.'" width="100px"></th>
                            </tr>';
                        }
                        
                    ?>
                </table>
            </div>
        </section>

        <section class="task">
            <h4>4) Шахматная доска</h4>

            <form action="php/forth-task.php" method="post">
                <input name="width-fourth-task" type="number" placeholder="width">
                <input name="height-fourth-task" type="number" placeholder="height">
                <input type="submit" class="button" name="button" value="Показать"/>
            </form>
            <div class="container">
                <table cellspacing="1px" cellpadding="0px" border="1">
                    <?php
                      echo $_SESSION['chessboard-table'];
                    ?>
                </table>
            </div>
        </section>

        <section class="task">
            <h4>5) Найти сумму цифр введённого числа</h4>

            <form action="php/fifth-task.php" method="post">
                <input name="value-fifth-task" type="number">
                <input type="submit" class="button" name="button" value="Посчитать"/>
            </form>
            <div class="container">
                <p>
                    <?php
                        if (isset($_SESSION['result-fifth-task'])) {
                            echo $_SESSION['result-fifth-task'];
                        }
                    ?>
                </p>
            </div>
        </section>

        <section class="task">
            <h4>6) Сгенерировать массив рандомных целых чисел</h4>

            <form action="php/sixth-task.php" method="post">
                <input type="submit" class="button" name="button" value="Посчитать"/>
            </form>
            <div class="container" style="flex-direction: column; text-align: center;">
                <div>
                    <h5>Генерируем массив рандомных чисел</h5>
                    <?php
                        if (isset($_SESSION['createArray'])) {
                            foreach($_SESSION['createArray'] as $key_arr => $val_arr){
                                echo '<b>' . $key_arr . "</b> => " . $val_arr . ' , ';
                            }
                        }
                    ?>
                </div>
                <div>
                    <h5>Убираем из массива повторы</h5>
                    <?php
                        if (isset($_SESSION['removeRepeats'])) {
                            foreach($_SESSION['removeRepeats'] as $key_arr => $val_arr){
                                echo '<b>' . $key_arr . "</b> => " . $val_arr . ' , ';
                            }
                        }
                    ?>
                </div>
                <div>
                    <h5>Сортируем массив</h5>
                    <?php
                        if (isset($_SESSION['sortArray'])) {
                            foreach($_SESSION['sortArray'] as $key_arr => $val_arr){
                                echo '<b>' . $key_arr . "</b> => " . $val_arr . ' , ';
                            }
                        }
                    ?>
                </div>
                <div>
                    <h5>Сортируем массив в обратном порядке</h5>
                    <?php
                        if (isset($_SESSION['reverseArray'])) {
                            foreach($_SESSION['reverseArray'] as $key_arr => $val_arr){
                                echo '<b>' . $key_arr . "</b> => " . $val_arr . ' , ';
                            }
                        }
                    ?>
                </div>
                <div>
                    <h5>Умножаем каждый элемент на два</h5>
                    <?php
                        if (isset($_SESSION['multipleByTwo'])) {
                            foreach($_SESSION['multipleByTwo'] as $key_arr => $val_arr){
                                echo '<b>' . $key_arr . "</b> => " . $val_arr . ' , ';
                            }
                        }
                    ?>
                </div>
            </div>
        </section>

        <section class="task">
            <h4>8) Подсчитать количество строк, букв и пробелов в введеном тексте</h4>

            <form action="php/eighth-task.php" method="post">
                <textarea name="value-eighth-task" rows="5" cols="50" type="text"></textarea>
                <input type="submit" class="button" name="button" value="Посчитать"/>
            </form>
            <div class="container">
                <p>
                    <?php
                        if (isset($_SESSION['result-eighth-task'])) {
                            echo $_SESSION['result-eighth-task'];
                        }
                    ?>
                </p>
            </div>
        </section>


 
    </body>
</html>