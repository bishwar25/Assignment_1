var arr=[1,2,1,3,5,77,43,22,100]
function arrHighest(arr){
    arr.sort(function(a,b){return b-a})
    return arr[0]
}
console.log(arrHighest(arr))