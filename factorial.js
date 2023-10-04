function factorial(num) {
  if (num == 0){
    return 1
  }else{
    let answer = 1
    while (num > 0){
      answer *= num
    };
    return answer
  };
}

module.exports = factorial;
