var str = "Please locate where 'locate' occurs!" ;
var arr=[]
var arrstr=str.split(' ')
for(a in arrstr){
    if(arrstr[a]=='locate'){
        arr.push(arrstr[a])
    }
}
console.log(arr)
