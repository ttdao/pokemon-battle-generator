<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    
    <div class="pokeball"> </div>
    
<!--    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">-->

<div class="container">
    <h1>Random Pokemon Battle Generator</h1>
    <p>Can't decide?</p>
    <br/>
    <p><span id='display'>
    	    </span>
    </p>
    
    <p class="user-inputs">
    </p>
    <form id="name-bet">
      <input type="text" name="name1" id="user-input1" placeholder="Who's idea was it?">
      <input type="text" name="name2" id="user-input2" placeholder="Who can't decide?">
      <input type="text" name="bet" id="bet" placeholder="What's the bet?">
     </form>
   
<center><button class ="start-button">I Choose you!</button></center>
  
  <script type='text/javascript' src='js/script.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js'></script>
  <script src='js/jquery-3.1.1.min.js'></script>

</body>
</html>
