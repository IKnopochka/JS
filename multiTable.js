function multiTable(number) {
  // good luck
  var tmp = "";
  for(var i = 1; i <= 10; i++) {
    tmp += String(i);
    tmp += " * ";
    tmp += String(number);
    tmp += " = ";
    var x = number * i;
    tmp += String(x);
    if(i != 10) {
      tmp += "\n";
    }
  }
  return tmp;
}