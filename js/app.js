var inputText = $("#input-repeat");
var writesCounter = $("#writes-counter");
inputText.keypress(test);

function test() {
  var code = event.keyCode;
  if (code === 13) {
    var textToValidate = event.target.value;
    if (isCorrectText(textToValidate)) {
      let currentCount = parseInt(writesCounter.text());
      writesCounter.text(currentCount - 1);
      inputText.val("");
      $("#feedback-good").show();
      $("#feedback-bad").hide();
    } else {
      $("#feedback-bad").show();
      $("#feedback-good").hide();
    }
  }
}

function isCorrectText(textToValidate) {
  let text = textToValidate.toLocaleLowerCase();
  if (text === "javascript no es java" || text === "java no es javascript") {
    return true;
  } else {
    return false;
  }
}
