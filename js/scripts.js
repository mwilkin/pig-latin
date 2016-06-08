// Back-end code
var vowels = "aeiou";

var translateWord = function(string) {

  var isVowel = function(char) {

    for(var index = 0; index < vowels.length; index++) {
      if (char === vowels[index]) return true;
    }
    return false;
  }

  var isQU = function() {
    if (string[0] === "q" && string[1] === "u") return true;
    else return false;
  }

  var moveChar = function() {
    if (!isVowel(string[0])) {
      if (isQU()) {
        string+=string.slice(0,2);
        string = string.slice(2);
      } else {
        string += string[0];
        string = string.slice(1);
      }
      vowels+="y";
      moveChar();
    }
  }

  string = string.toLowerCase();
  moveChar();
  return string + "ay";

}


// Front-end code
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var textInput = $("#textInput").val();
    $("#results").append("<p>"+translateWord(textInput)+"</p>");
  });
});
