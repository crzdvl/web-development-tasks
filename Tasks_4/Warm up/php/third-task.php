<?php
    session_start();

    if (($_FILES['my_file']['name']!="")){
        $target_dir = "pics/";
        $file = $_FILES['my_file']['name'];
        $size = $_FILES['my_file']['size'];
        $path = pathinfo($file);
        $filename = $path['filename'];
        $ext = $path['extension'];
        $temp_name = $_FILES['my_file']['tmp_name'];
        $path_filename_ext = $target_dir.$filename.".".$ext;
        
        // Check if file already exists
        if (file_exists($path_filename_ext)) {
            //echo "Sorry, file already exists." . '</br>';
        }else{
            move_uploaded_file($temp_name,$path_filename_ext);
            //echo "Congratulations! File Uploaded Successfully." . '</br>';
        }
    }

    function FBytes($size, $param = 'kb') {
        switch($param)  {
                case 'gb': $size /= 1024;
                case 'mb': $size /= 1024;
                case 'kb': $size /= 1024;
        }
        $size = round($size);
        return $size;
    }

    $_SESSION['file-name'] = $file;
    $_SESSION['path-file'] = $path_filename_ext;
    $_SESSION['file-size'] = FBytes($size);

    header('Location: /index.php');

?>