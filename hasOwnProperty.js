function checkObj(obj, checkProp) {

  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else if (!obj.hasOwnProperty(checkProp)) {
  return "Not Found";
  }

}