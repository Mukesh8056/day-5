

                                  //palindromes

                                  //anonymous function

let pal="appa"
let pal1=function (){
   const revpal= pal.split("").reverse().join("")
   return revpal

}
console.log(pal1())
if((pal)===(pal1())){
    console.log("it is palindrome")
}else{
    console.log("it's is not palindrome ");
};
                                      //IIFE function


(function(pal){
    
   const revpal= pal.split("").reverse().join("")
  
   console.log(revpal)

revpal();
if((pal)===(pal1())){
    console.log("it is palindrome");
}else{
    console.log("it's is not palindrome ");
}});
("hulk");

                                            //Arrow function

let pal3 ="appa"

pal2=()=>{
    const revpal1= pal3.split("").reverse().join("")
    return revpal1
 
 }
 console.log(pal2())
 if((pal3)===(pal2())){
     console.log("it is palindrome")
 }else{
     console.log("it's is not palindrome ");
 };