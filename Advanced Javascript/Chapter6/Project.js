function countUpToTen(num) {
    if (num > 10) {
      return;
    }
    
    console.log(num);
    countUpToTen(num + 1);
  }
  
  countUpToTen(1);
  countUpToTen(6);
  countUpToTen(8);
  