// Assignment Code
var generateBtn = document.querySelector("#generate");

    function generatePassword() {

      var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
       
      var resultArray = [];
      var userArray = [];
      
      uppercaseArray [1]
      
        var numCharacter = prompt ("Please pick the number of characters you would like our passowrd to be (Between 8 and 128)");
        var numbers = confirm ("Would you like numbers in your password?");
        var uppercase = confirm ("Would you like upper case letters in your password?");
        var lowercase = confirm ("Would you like lower case letters in your password?");
        var characters = confirm ("Would you like any special characters in your password?");
      
      if (numbers){
        resultArray = resultArray.concat(numbArray); 
      }
      
      if (uppercase){
        resultArray = resultArray.concat(uppercaseArray);
      }
      
      if (lowercase){
        resultArray = resultArray.concat(lowercaseArray);
      }
      
      if (characters){
        resultArray = resultArray.concat(characterArray);
      }
      
      for (var i = 0; i < numCharacter; i++) {
        userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
        }
        return userArray.join("") ;
      }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
