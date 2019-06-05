  //setting some variables for the game
  var noOfGuesses = 11;
  var words = ['test', 'computer', 'window', 'desk', 'tiger', 'panda', 'water', 'yellow', 'elephant'];
  var letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  //Pick a word for the game
  var rand = Math.floor(Math.random() * words.length);
  var word = words[rand];
  var letters = word.length;
  //Grab some elements for user feedback
  var lives = document.getElementById('lives');
  var noLetters = document.getElementById('noLetters');
  var gameboard = document.getElementById('gameboard');
  var display = document.getElementById('display');
  var form = document.getElementById('userInput');
  var displayWord = [];
  //Convert the word into an array
  var wordArr = word.split('');
 
  //create the starting array for the game
  for (var i = 0 ; i < letters; i++) {
      displayWord.push('-');
  }
  
  //Feedback to the user
  function updateInfo () {
      lives.innerHTML = 'Number of guesses left: ' + noOfGuesses;
      display.innerHTML = displayWord.join("");

      document.getElementById("gameImage").src = 'images/' + noOfGuesses + '.jpg';

      //add game over condition
      if (noOfGuesses === 0) {
          form.innerHTML = 'Game Over! The word was: ' + word;
      }
      //Add win condition
      if (displayWord.indexOf('-') === -1){
          form.innerHTML = 'You Win!';
      }
  }

  form.addEventListener("submit", function(e){
      //dont submit and get the input value
      e.preventDefault(); 
      var value = document.getElementById('userValue').value;
      //is the value in the word
      var loc = wordArr.indexOf(value);
      
      //update values
      if (loc === -1) {
          noOfGuesses = noOfGuesses -1
      }else{
          for (var j = 0; j < letters; j++) {
              if (wordArr[j] === value) {
                  displayWord[j] = value;
              }
          }
      }
      updateInfo();
  });
  noLetters.innerHTML = 'The word is ' + letters + ' letters';
  updateInfo();