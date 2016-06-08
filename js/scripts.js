// Back-end code
var vowels = "aeiou";

var translate = function(string) {

  var isVowel = function(char) {

    for(var index = 0; index < vowels.length; index++) {
      if (char === vowels[index]) return true;
    }
    return false;
  }

  var moveChar = function() {
    if (!isVowel(string[0])) {
      string += string[0];
      string = string.slice(1);
      moveChar();
    }
  }

  moveChar();
  return string + "ay";

}






// Front-end code
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var textInput = $("#textInput").val();
    $("#results").append("<p>"+translate(textInput)+"</p>");
  });
});
