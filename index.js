// add solution here


function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for(var i = 0; i < musicians.length; i++) {
  emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var secondEmptyArray = [];
  while (counter < facts.length) {
    secondEmptyArray.push(facts[counter] + "!!!")
    counter++;
  }
  console.log(secondEmptyArray);
  return secondEmptyArray;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  var incrementNumber = number + 1;

  do {
    emptyArray.push("I love the Beatles!");
  } while (incrementNumber < 15);
return emptyArray;
}
