                                              
                                              
                                              
                                                 //odd number
                                              
                                              
                                              // anonymese function              


let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2)

console.log(odds)   ;
                                               //normal function


 function arr1(num){

   for (let i=0;i<num.length;i++){
      if(arr[i]%2!==0){
         console.log(num[i])
      }  
   }
 }   
arr1([1,2,3,4,5,6,7,8,9]) ;
                                                 //arrow function
      
let odd2=(num)=>{

let odd1=arr.filter(n => n%2)
return odd1

}
console.log(odd2([1,2,3,4,5,6,7,8,9]));

                                                   //IIFE FUNCTION

 (function(a){
   
   for (let i=0;i<a.length;i++){
      if(a[i]%2!==0){
         console.log(a[i])
      }  
   }
  
      })
([1,2,3,4,5]);