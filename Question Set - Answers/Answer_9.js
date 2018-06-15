var number=[43,23,54,67,67,45]

function getSecHigh(arrayNum,highest){
    arrayNum.sort(function(a,b){return b-a})
    var arr=[]
    for(a in arrayNum){
        if(!arr.includes(arrayNum[a])){
            arr.push(arrayNum[a])
        }        
    }   
    console.log(arr[highest-1])
}
getSecHigh(number,2)