const ftoc = function(fahrenheits) {
  let celsius = (fahrenheits - 32) * 5/9;
  return Number(celsius.toFixed(1));
};

const ctof = function(celsius) {
  let fahrenheits = celsius * 9/5 + 32;
  return Number(fahrenheits.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
