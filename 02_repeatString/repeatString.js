const repeatString = function(stringToRepat, numOfRepeats) {
  if (numOfRepeats < 0)
    return "ERROR";
  
  return stringToRepat.repeat(numOfRepeats);
};

// Do not edit below this line
module.exports = repeatString;
