function sum(num){
    if(num > 0){
      return num + sum(num - 1)
    }else{
      return 0
    }
  }
  
  const result = sum(10)
  console.log(`Result: ${result}`);
  