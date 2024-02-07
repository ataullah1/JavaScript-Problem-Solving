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
// console.log(checkName(['199']));

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return 'Invalid Your Array. Please Input a Valid Array.';
  }
  let output = [];
  for (const num of array) {
    if (typeof num === 'number' && !isNaN(num)) {
      output.push(num);
    }
  }
  return output;
}

// console.log(
//   deleteInvalids([
//     1,
//     null,
//     undefined,
//     18,
//     -19,
//     NaN,
//     '12',
//     [1, 2],
//     { ob: 'lala' },
//   ])
// );

function password(obj) {
  let yearLen = obj.birthYear.toString();
  if (typeof obj.birthYear !== 'number' || yearLen.length !== 4) {
    return 'Invalid, Please Input Your Valid Birth Year.';
  } else if (Object.keys(obj).length !== 3) {
    return 'Invalid, Please Check Your Input.';
  }

  const username = obj.name.toLowerCase();
  let site = obj.siteName.split('');
  site[0] = site[0].toUpperCase();
  const siteName = site.join('');
  const birthYear = obj.birthYear;

  const output = `${siteName}#${username}@${birthYear}`;
  return output;
}

// console.log(password({ name: 'maisha', birthYear: 2002 }));
