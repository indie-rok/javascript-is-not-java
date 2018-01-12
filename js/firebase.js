function currentCount() {
  return firebase
    .database()
    .ref("/counter/")
    .once("value")
    .then(function(snapshot) {
      return snapshot.val();
    });
}

function increaseCounter() {
  return firebase
    .database()
    .ref()
    .update({ counter: currentCount++ });
}

promiseB = currentCount().then(res => {
  var counter = res;
  console.log(counter);
});
