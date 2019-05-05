// add solution here
var emptyArray = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    var statement = musicians[i] + ' plays ' + instruments[i]
	emptyArray.push(statement);
  }
  return emptyArray;
}



function johnLennonFacts(facts) {
  var secondEmptyArray = [];
  var counter = 0;
  while ( counter < facts.length) {
    secondEmptyArray.push(facts[counter] + "!!!");
    counter++;
  }
  console.log(secondEmptyArray);
  return secondEmptyArray;
}


function iLoveTheBeatles(number) {
  var emptyArray = [];
  number = number + 1;


}
