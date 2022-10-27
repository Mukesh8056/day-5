
                              //string to upper case

                              //anonymous function with arrow function 




 let title= (str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ')
  }
  console.log(title("guvi geek guvi"));
  

                                       //IIFE function




 (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    str= str.join(' ')
    console.log(str)
  })
  ("guvi geek guvi");

                                              //Arrow function

    title1=(str1)=> {
    str1 = str1.toLowerCase().split(' ');
    for (var i = 0; i < str1.length; i++) {
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
    return str1.join(' ')
  }
  console.log(title1("guvi geek guvi"));