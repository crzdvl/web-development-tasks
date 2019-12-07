<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="assets/css/style.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
      window.onload = function() {
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          const jsonData = $.ajax({
            url: "vote-result.json",
            dataType: "json",
            async: false
            }).responseText;   
          
          let options = {
            width: 550,
            height: 600,
            colors: ['#6bbb1c', '#1cbba1', '#1c93bb']
          };

          let data = new google.visualization.DataTable(jsonData);

          let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
          chart.draw(data,  options);
        }
      }
    </script>
  </head>
  <body>
      <h1>What is the worst - to fail or not try?</h1>

      <div id="chart_div" style="
        justify-content: center;
        align-items: center;
        display: flex;">
      </div>
  </body>
</html>

<?php
  /*ini_set('error_reporting', E_ALL);
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);*/

  $userVote = $_POST['radio-button'];

  $data = file_get_contents('vote-result.json');
            
  $list = json_decode($data,TRUE);
  
  for ($i = 0; $i <= 2; $i++) {
    if ($userVote == $list['rows'][$i]['c'][0]['v']) {
      $list['rows'][$i]['c'][1]['v'] += 1;
    }
    }

  file_put_contents('vote-result.json',json_encode($list));
?>