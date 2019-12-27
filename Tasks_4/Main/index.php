<!DOCTYPE html>
<html lang="en">
 <head>
 <link rel="stylesheet" href="assets/css/style.css">
 </head>
  <body>
    <section>
      <h1>What is the worst - to fail or not try?</h1>
      <form action="voting.php" method="post">
        <div class="containerOuter">
          <div class="container">
            <input type="radio" class="hidden" id="input1" name="radio-button" value="To fail">
            <label class="entry" for="input1"><div class="circle"></div><div class="entry-label">To fail</div></label>
            <input type="radio" class="hidden" id="input2" name="radio-button" value="Not try">
            <label class="entry" for="input2"><div class="circle"></div><div class="entry-label">Not try</div></label>
            <input type="radio" class="hidden" id="input3" name="radio-button" value="Not sure">
            <label class="entry" for="input3"><div class="circle"></div><div class="entry-label">Not sure</div></label>
            <div class="highlight"></div>
            <div class="overlay"></div>
          </div>
        </div>
        <input type="submit" class="button" name="button" value="Проголосовать"/>
      </form>
    </section>
  </body>
</html>
