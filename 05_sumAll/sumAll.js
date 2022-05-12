const sumAll = function(from, to) {
  if (typeof from !== "number" || typeof to !== "number")
    return "ERROR";

  if (from < 0 || to < 0)
    return "ERROR";

  if (from === to)
    return from;

  if (from > to)
    [from, to] = [to, from];

  let sum = 0;
  for (let num = from; num <= to; num++) {
    sum += num;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
