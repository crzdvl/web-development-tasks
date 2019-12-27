<?php
$userVote = $_POST['radio-button'];
if (isset($userVote)){
  $userVote = $_POST['radio-button'];
  $json_file = file_get_contents('vote-result.json');
  $json_file = json_decode($json_file, true);
  $google_chart = [array('answer', 'votes')];

  $json_file[$userVote] += 1; 

  foreach ($json_file as $key => $value) {
    $i = array($key, $value);
    $google_chart[] = $i;
  }
  file_put_contents('vote-result.json',json_encode($json_file));
} else {
  header("Location: index.php");
}
?>

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
          var data = google.visualization.arrayToDataTable(<?php echo json_encode($google_chart)?>);

          let options = {
                width: 550,
                height: 600,
                colors: ['#6bbb1c', '#1cbba1', '#1c93bb']
          };

          var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
          chart.draw(data, options);
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