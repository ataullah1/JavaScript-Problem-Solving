function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return 'Invalid Your Number. Please Input a Valid Number.';
  }
  const ticketPrice = 120;
  const darwanCost = 500;
  const staffLunch = 50 * 8;
  const totalIncome = ticketPrice * ticketSale;
  const totalCost = darwanCost + staffLunch;
  const profit = totalIncome - totalCost;
  return profit;
}

// console.log(calculateMoney(10));

function checkName(name) {
  if (typeof name !== 'string') {
    return `invalid`;
  }
  const names = name.toLowerCase();
  const arr = names.trim().split('');
  const lastLetter = arr[arr.length - 1];
  if (
    lastLetter === 'a' ||
    lastLetter === 'y' ||
    lastLetter === 'i' ||
    lastLetter === 'e' ||
    lastLetter === 'o' ||
    lastLetter === 'u' ||
    lastLetter === 'w'
  ) {
    return 'Good Name';
  } else {
    return 'Bad Name';
  }
}
console.log(checkName(['199']));
