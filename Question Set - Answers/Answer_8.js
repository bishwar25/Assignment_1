function student(name,roll,age){
    this.name=name
    this.roll=roll
    this.age=age
}

var stu1=new student('Bishwa',143,25)
console.log(stu1)
student.prototype.class=null;
stu1.class=function(){
    console.log('method')
}
console.log(stu1)
stu1.class();