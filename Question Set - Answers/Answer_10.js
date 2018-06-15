var arr1=[1,2,3]
var arr2=[100,2,1,10]
function mergeUnique(arr1, arr2){
    var arrUnion=[]
    for(arr in arr1){
        if(!arrUnion.includes(arr1[arr])){
            arrUnion.push(arr1[arr])
        }
    }
    for(arr in arr2){
        if(!arrUnion.includes(arr2[arr])){
            arrUnion.push(arr2[arr])
        }
    }
    return arrUnion.sort(function(a,b){return a-b})
}
console.log(mergeUnique(arr1,arr2))