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

var translatePhrase = function(phrase) {
  var wordArray = phrase.split(/\W+/);
  var translatedArray = wordArray.map(function(word){
    return translateWord(word);
  });
  var resultString = "";
  translatedArray.forEach(function(word){
    resultString+=word;
    resultString+=" ";
  });
  var firstLetter = resultString.charAt(0).toUpperCase();
  resultString = firstLetter + resultString.slice(1,(resultString.length-1))+".";
  return resultString;
}


// Front-end code
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var textInput = $("#textInput").val();
    $("#results").append("<p>"+translatePhrase(textInput)+"</p>");
  });
});
