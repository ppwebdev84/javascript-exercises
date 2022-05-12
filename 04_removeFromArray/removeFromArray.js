const removeFromArray = function(array, ...args) {
  return array.filter((array_value) => {
    return !args.includes(array_value);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
