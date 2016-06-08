// Back-end code
var vowels = "aeiou";

var translateWord = function(string) {

  string = string.toLowerCase();
  moveChar(string);
  return string + "ay";



}
var isQU = function(string) {
  if (string[0] === "q" && string[1] === "u") return true;
  else return false;
}

var isVowel = function(char) {
  for(var index = 0; index < vowels.length; index++) {
    if (char === vowels[index]) return true;
  }
  return false;
}

var moveChar = function(string) {
  if (!isVowel(string[0])) {
    if (isQU(string)) {
      string+=string.slice(0,2);
      string = string.slice(2);
    } else {
      string += string[0];
      string = string.slice(1);
    }
    vowels+="y";
    moveChar(string);
  }
}

var checkIfWord = function(word) {
  var firstLetter = word[0].toLowerCase;
  if ((firstLetter => 'a') && (firstLetter < 'z')) {
    return true;
  } else return false;
}

var translatePhrase = function(phraseInput) {
  var arr = phraseInput.replace(/[^\w\s]|_/g, function ($1) { return ' ' + $1 + ' ';}).replace(/[ ]+/g, ' ').split(' ');
  var translatedArray = "";
  console.log(arr);

  arr.forEach(function(word) {
    if (checkIfWord(word)) {
      translatedArray += translateWord(word);
    }
  });

}


// Front-end code
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var textInput = $("#textInput").val();
    $("#results").append("<p>"+translatePhrase(textInput)+"</p>");
  });
});
