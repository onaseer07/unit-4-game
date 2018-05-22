//Create and assign a varibale to a function that creates a random number.
 let randomNum = function getRandomNum (min,max) {
   return Math.floor(Math.random() * (max-min +1) ) + min;
 }
 //Declare and store randomly genereated crystals' value in an array.
    //Each crystal value must be between 1 and 12. 
 var crystalValue = [randomNum(1,12),randomNum(1,12),randomNum(1,12),randomNum(1,12)];
 //Create and set the player's score as zero at start.
 var playerScore = 0;
 //Create a target number and assign a randomly generated value between 19 and 120. 
 var target = Math.floor(Math.random() * (120-19 +1) ) + 19;
 //Create a wins / losses counter and set it to zero. 
 var wins = 0;
 var losses = 0;
 //selecting crystal imgs to add on click function
    $("#0").click(function(){
      //on click change the player's score by adding the crystal value at index [0].
        playerScore += crystalValue[0];
      //display the added value to player's score 
        $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 
      //check if the the player's score matches or exceeds target number. 
        //if the player's score exceeds the target number alert user that you lost and add plus 1 to the losses counter. 
        // else if the player's score matches the target number alert user that you won and add plus 1 to the win counter.
        // Invoke game resets function.
      // Duplicate the above four codes to assign to next crystal images. 
        if (playerScore > target) {
          alert("You Lost!");
          losses++;
          reset()
          } else if (playerScore == target) {
            alert("You Won!");
            wins++;
            reset()
          }
    });
    $("#1").click(function(){
        playerScore += crystalValue[1];
        $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 
        if (playerScore > target) {
          alert("You Lost!");
          losses++;
          reset()
          } else if (playerScore == target) {
            alert("You Won!");
            wins++;
            reset()
          }
    });
    $("#2").click(function(){
        playerScore += crystalValue[2];
        $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 
        if (playerScore > target) {
          alert("You Lost!");
          losses++;
          reset()
          } else if (playerScore == target) {
            alert("You Won!");
            wins++;
            reset()
          }
    });
    $("#3").click(function(){
        playerScore += crystalValue[3];
        $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 
        if (playerScore > target) {
          alert("You Lost!");
          losses++;
          reset()
          } else if (playerScore == target) {
            alert("You Won!");
            wins++;
            reset();
          }
    });
//Create a reset function reassigning crystal values to random numbers, player's score to zero, and target number to a random number. 
    //display each resetted variables to html. 
function reset(){
  crystalValue = [randomNum(1,12),randomNum(1,12),randomNum(1,12),randomNum(1,12)];
  playerScore = 0;
  target = Math.floor(Math.random() * (120-19 +1) ) + 19;
  $("#randomNum").html("Target Number: " + "<span class = badge>"+target+"<span>");
  $("#scoreboard").html("<span class = badge> Wins: " +  + wins +"<span>" + "  |  " + "Losses: " + "<span class = badge>" + losses + "</span>"); 
  $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 
}
//display html. 
 $("#title").text("Crystal Collectors!");
 $("#rules").html("<b>RULES:</b> <br>You will be given a random number at the start of the game.<br> There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.<br> You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.<br> The value of each crystal is hidden from you until you click on it. <br> Each time when the game starts, the game will change the values of each crystal.");
 $("#randomNum").html("Target Number: " + "<span class = badge>"+target+"<span>");
 $("#scoreboard").html("<span class = badge> Wins: " +  + wins +"<span>" + "  |  " + "Losses: " + losses + "</span>");  
 $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 

 
 

