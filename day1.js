const fs = require('fs');

fs.readFile('./input/input1.txt', 'utf8', (err, data) => {
  const numbers = data.trim().split('\n').map(line => Number(line));
  let total = 0;

  numbers.forEach(n => total += Math.floor(n / 3) - 2);

  console.log('Total:', total);

  // part 2:
  let total2 = 0;

  numbers.forEach(n => {
    let fuel = Math.floor(n / 3) - 2;
    while (fuel > 0) {
      total2 += fuel;
      fuel = Math.floor(fuel / 3) - 2;
    }
  });

  console.log('Total 2:', total2);

});