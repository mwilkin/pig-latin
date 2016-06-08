// Back-end code
var vowels = "aeiou";

var translate = function(string) {
  var charToMove;
  for(var index = 0; index < vowels.length; index ++) {
    if (!(string[0] === vowels[index])) {
      charToMove = string[0];
    }
  }
  if (charToMove) {
    string = string.slice(1);
    string+=charToMove;
  }
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
