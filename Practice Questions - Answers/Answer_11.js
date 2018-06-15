var x = 7.56
x=x.toFixed(2)
var a=x.split('.')
if(a[1]>=50){
    console.log(Math.ceil(x))
}else{
    console.log(Math.floor(x))
}
console.log(Math.sqrt(x))