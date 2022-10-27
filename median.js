
                                       //anonymous functio 

function arr (arr1,arr2){

let arrconcat=arr1.concat(arr2)
console.log(arrconcat)
let arrsort=arrconcat.sort((a,b)=>a-b)
console.log(arrsort)
let arrlength=arrsort.length
console.log(arrlength)

if(arrlength %2!=0){
    var result1=arrsort[Math.floor(arrlength/2)]
    console.log(result1)
}else{
    var result2=(arrsort[Math.ceil(arrlength/2)]+arrsort[Math.floor(arrlength/2)])/2
    console.log(result2)
}
}
arr([5,6,10],[11,3,7])
                                            //anonymous function

 let medianof2Arr=function (arr1) {
    var concat = arr1;
    concat = concat.sort(
        function (a, b) { return a - b });

    console.log(concat);
    var length = concat.length;

    if (length % 2 == 1) {

        // If length is odd
        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]

    }
    else {
        console.log((concat[length / 2] 
            + concat[(length / 2) - 1]) / 2);
              
        return (concat[length / 2] 
            + concat[(length / 2) - 1]) / 2;
    }
}

arr1 = [1, 4, 7, 9,11]

medianof2Arr(arr1)

                                           //  IIFE function


    (function (arr1) {
    var concat = arr1;
    concat = concat.sort(
        function ((a, b)=>  a - b);

    console.log(concat);
    var length = concat.length;

    if (length % 2 == 1) {

        // If length is odd
       var result=concat[Math.floor(length/2)]
       console.log(result);

    }
    else {
        var result=Math.floor(concat[length/2]+concat[length/2]/2);
       console.log(result);
    }
});

([1, 4, 7, 9])


