                 //sum of all number

                                   // anonymese function   and arrow function
 let anon=function (sum){
    total=0

for(let i=0;i<sum.length;i++){
    total=total+sum[i]
    
}
return total
 }
console.log(anon([1,2,3,4,5,6,7,8]));

                                     //IIFE function

(function(sum1){

let total2=sum1.reduce((acc,cv)=>acc+cv)
console.log( total2)


})
([1,2,3,4,5,6]); 
 
                                        //Arrow function


anon = (sum)=>{
    total=0

for(let i=0;i<sum.length;i++){
    total=total+sum[i]
    
}
return total
 }
 console.log(anon([1,2,3,4,5,6,7,8]));