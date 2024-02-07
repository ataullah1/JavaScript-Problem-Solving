function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return '“Invalid Number”. Please Input a Valid Number.';
  }
  const ticketPrice = 120;
  const darwanCost = 500;
  const staffLunch = 50 * 8;
  const totalIncome = ticketPrice * ticketSale;
  const totalCost = darwanCost + staffLunch;
  const profit = totalIncome - totalCost;
  return profit;
}

// console.log(calculateMoney(93));

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
// console.log(checkName('RAFEE'));

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return '“Invalid Array”. Please Input a Valid Array.';
  }
  let output = [];
  for (const num of array) {
    if (typeof num === 'number' && !isNaN(num)) {
      output.push(num);
    }
  }
  return output;
}

// console.log(deleteInvalids(['1', { num: 2 }, NaN]));

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

// console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    return 'Invalid input';
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      let vat = (arr[i] * 20) / 100;
      arr[i] -= vat;
    }
  }

  let ernSum = 0;
  for (const ern of arr) {
    ernSum += ern;
  }
  let saving = ernSum - livingCost;
  if (saving < 0) {
    return '“earn more”';
  }
  return saving;
}

// console.log(monthlySavings([1000, 2000, 3000], 5400));
