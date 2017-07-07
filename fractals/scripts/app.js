var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;



// define a recursive function for a factorial

// n factorial (n + (n-1))

function factorial(n, finalValue){


  console.log(finalValue)
  if(n === 1){
    console.log(finalValue)
    const taco = finalValue
    return taco;
  }

  let final = finalValue || 0;
  const nextNum = n - 1

  const value = n + nextNum;

  final = final + value;

  factorial(nextNum, final)

}



console.log(factorial(4), factorial(3));
