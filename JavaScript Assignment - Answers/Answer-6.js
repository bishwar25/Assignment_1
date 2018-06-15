var arr=[1,2,1,3,5,77,43,22,100]
function arrlowest(arr){
    arr.sort(function(a,b){return a-b})
    return arr[0]
}
console.log(arrlowest(arr))