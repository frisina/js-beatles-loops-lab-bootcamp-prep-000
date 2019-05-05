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
  var emptyArray = [];
  while (counter <= facts.length) {
    emptyArray.push(facts + "!!!")
  }
  return emptyArray;
}
