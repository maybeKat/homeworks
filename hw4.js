function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      if (getRandomInt(100, 1000) % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
  }
    console.log('Total: '+ count);
    console.log('Even numbers: ' + evenCount);
    console.log('Odd numbers: ' + oddCount);
    console.log(Math.round(evenCount * 100 / count) + ' % ' + Math.round(oddCount * 100 / count));
  }
  
  checkProbabilityTheory(15);

