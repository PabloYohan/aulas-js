function fatorial(n){
  if(n === 0 || n === 1){
    return 1;
  }
  else{
    return fatorial(n-1) * n;
  }
}

const num = fatorial(4);
console.log(num);