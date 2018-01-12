if (jQuery.browser.mobile) {
  $("#general-container").hide();
  $("#mobile-browser-screen").show();
}

$("#modalWin").modal({ show: true });
var inputText = $("#input-repeat");
var writesCounter = $("#writes-counter");
inputText.keydown(validateInput);

inputText.bind("contextmenu", () => {
  alert("sin copy paste, gracias.");
  return false;
});

function validateInput() {
  var code = event.keyCode;

  if (event.ctrlKey && code == 86) {
    alert("Sin copy paste, gracias.");
    return false;
  }
  if (code === 13) {
    var textToValidate = event.target.value;
    if (isCorrectText(textToValidate)) {
      let currentCount = parseInt(writesCounter.text());
      console.log(currentCount);
      if (currentCount == 1) {
        $("#general-container").hide();
        $("#win-section").show("slow");
      }
      writesCounter.text(currentCount - 1);
      inputText.val("");
      $("#feedback-good").show();
      $("#feedback-bad").hide();
      $("#feedback-good").animate(
        {
          fontSize: "50px"
        },
        500
      );
      $("#feedback-good").animate(
        {
          fontSize: "28px"
        },
        500
      );
    } else {
      $("#feedback-bad").show();
      $("#feedback-good").hide();
      $("#feedback-bad").animate(
        {
          fontSize: "50px"
        },
        500
      );
      $("#feedback-bad").animate(
        {
          fontSize: "28px"
        },
        500
      );
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
