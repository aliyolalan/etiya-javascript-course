// 2.Gün Ödev Sıralaması => 1
function multiplyNumbers(...numbers) {
  let totalNumbers = 0;
  for (let index = 0; index < numbers.length; index++) {
    totalNumbers = totalNumbers + numbers[index];
  }
  console.log(totalNumbers);
}

multiplyNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 2.Gün Ödev Sıralaması => 2
function friendNumber(firstNumber, secondNumber) {
  let firstTotal = 0;
  let secondTotal = 0;

  for (let index = 0; index < firstNumber; index++) {
    if (firstNumber % index == 0) {
      firstTotal = firstTotal + index;
    }
  }

  for (let index = 0; index < secondNumber; index++) {
    if (secondNumber % index == 0) {
      secondTotal = secondTotal + index;
    }
  }

  if (firstNumber == secondTotal && secondNumber == firstTotal) {
    console.log('Arkadaş sayılardır.');
  } else {
    console.log('Arkadaş sayı değillerdir.');
  }
}

friendNumber(1184, 1210);

// 2.Gün Ödev Sıralaması => 3
function perfectNumber(number) {
  let totalNumber = 0;
  for (let index = 0; index < number; index++) {
    if (number % index == 0) {
      totalNumber = totalNumber + index;
    }
  }

  if (number == totalNumber) {
    console.log('Mükemmel sayıdır.');
  } else {
    console.log('Mükemmel sayı değildir.');
  }
}

perfectNumber(6);

// 2.Gün Ödev Sıralaması => 4
function primeNumber(number) {
  let tempNumber = 0;
  for (let index = 2; index < number; index++) {
    if (number % index == 0) {
      tempNumber = 1;
      break;
    }
  }

  if (tempNumber == 1) {
    console.log('Asal sayı değildir');
  } else {
    console.log('Asal sayıdır.');
  }
}

primeNumber(1009);
