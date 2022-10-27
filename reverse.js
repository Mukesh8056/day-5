                            //   k reverse

                            //anonymous function


 let  reverse = (arr,k)=>{
    
      i=0;
    while(i<=k){
    var poparr=arr.pop()
    var unshift=arr.unshift(poparr)

       i++
console.log(arr);
}

}
reverse([1,2,3,4,5],10);


                                //IIFE function


(function(arr,k){
    
      i=0;
    while(i<=k){
    var poparr=arr.pop()
    var unshift=arr.unshift(poparr)

       i++
console.log(arr)
}

})
([1,2,3,4,5],5)
