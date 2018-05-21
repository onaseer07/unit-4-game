/*
   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.

    <div id = "title"></div>
    <div id = "rules"></div>
    <div id = "randomNum"></div>
    <div id = "scoreboard"></div>
    <div id = "crystals"></div>
    <div id = "playerNum"></div>
*/

 

 let randomNum = function getRandomNum (min,max) {
   return Math.floor(Math.random() * (max-min +1) ) + min;
 }
 var crystalValue = [randomNum(1,12),randomNum(1,12),randomNum(1,12),randomNum(1,12)];
 var playerScore = 0;
 var target = Math.floor(Math.random() * (120-19 +1) ) + 19;
 var wins = 0;
 var losses = 0;
    $("#0").click(function(){
        playerScore += crystalValue[0];
        //alert("New Score: " + playerScore);
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
         // $("#scoreboard").html("Wins: " + wins + "<br>" + "Losses: " + losses);  
    });
    $("#1").click(function(){
        playerScore += crystalValue[1];
        //alert("New Score: " + playerScore);
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
       // $("#scoreboard").html("Wins: " + wins + "<br>" + "Losses: " + losses);
    });
    $("#2").click(function(){
        playerScore += crystalValue[2];
        //alert("New Score: " + playerScore);
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
       // $("#scoreboard").html("Wins: " + wins + "<br>" + "Losses: " + losses);
    });
    $("#3").click(function(){
        playerScore += crystalValue[3];
        //alert("New Score: " + playerScore);
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

function reset(){
  crystalValue = [randomNum(1,12),randomNum(1,12),randomNum(1,12),randomNum(1,12)];
  playerScore = 0;
  target = Math.floor(Math.random() * (120-19 +1) ) + 19;
  $("#randomNum").html("Target Number: " + "<span class = badge>"+target+"<span>");
  $("#scoreboard").html("<span class = badge> Wins: " +  + wins +"<span>" + "  |  " + "Losses: " + "<span class = badge>" + losses + "</span>"); 
  $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 
}
 $("#title").text("Crystal Collectors!");
 $("#rules").html("<b>RULES:</b> <br>You will be given a random number at the start of the game.<br> There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.<br> You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.<br> The value of each crystal is hidden from you until you click on it. <br> Each time when the game starts, the game will change the values of each crystal.");
 $("#randomNum").html("Target Number: " + "<span class = badge>"+target+"<span>");
 $("#scoreboard").html("<span class = badge> Wins: " +  + wins +"<span>" + "  |  " + "Losses: " + losses + "</span>");  
 $("#playerNum").html("Your Total Score: " + "<span class = badge>" + playerScore +"</span>"); 

 
 

