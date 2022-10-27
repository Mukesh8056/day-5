                                        //duplicate

                                        //anonymous function


str=[1,2,3,4,2,5]

let dup=function() {

var arr=[]
     str.forEach(element =>{
        if (!arr.includes(element)){
            arr.push(element)}})
            return arr
        }
        console.log(dup(str));
 

                                         //IIFE function

       


(function (str1){
var arr1=[]
     str.forEach(element =>{
        if (!arr1.includes(element)){
            arr1.push(element)}})
       console.log( arr1);
        
        
        })
        ([1,2,3,4,2,5]);
 
                                      //Arrow function


  str=[1,2,3,4,2,5]
  
 dup=()=>{

var arr=[]
     str.forEach(element =>{
        if (!arr.includes(element)){
            arr.push(element)}})
            return arr
        }
        console.log(dup(str));
 