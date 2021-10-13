function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  var x = 0;
  for (var i = 0; i < marks.length; i++) {
    x += marks[i];
  }
  return Math.floor(x / marks.length);
  
}

