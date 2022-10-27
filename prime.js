

                        //finding the prime number


                        //anonymous function with arrow function



let test_prime=(n)=>
{

  if (n===1)
  {
    return "not a prime";
  }
  else if(n === 2)
  {
    return "it is prime";
  }else
  {
    for(var i= 2; i < n; i++)
    {
      if(n % i === 0)
      {
        return "not a prime";
      }
    }
    return "it is prime";  
  }
}

console.log(test_prime(5));


                                       //IIFE function

 (function(n)
{

  if (n===1)
  {
    console.log("not a prime");
  }
  else if(n === 2)
  {
    console.log("it is prime");
  }else
  {
    for(var i= 2; i < n; i++)
    {
      if(n % i === 0)
      {
        console.log("not a prime");
      }
    }
    
  }
})

(50);