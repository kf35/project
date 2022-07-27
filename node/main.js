a = 10
console.log(a)

const b = 20
console.log(b)

b = b+ 40
console.log(b)

a = a + 40
console.log(a)

var num1 = 10
var num2 = 30 
var s = `${num1} / ${num2} = ${num1 / num2}` //`

var s ="hello"
console.log(s[0])
console.log(s.slice(1,3))

var a = [,1,2,3]
console.log(a)

var c = Array(10)
console.log(c)

a.push(5)
console.log(a)

a.pop()
console.log(a)
a.shift(5)
console.log(a)

var a = 10
if (a>10){
    console.log("크다")
}
else if(a <10){
    console.log("작다")
}
else{
    console.log("같다")
}

for(var i=0 ; i<10 ; i+=2){
    console.log(i)
}
i = 0
while(i < 10){
    i++
    console.log(i)
}
for(var 앞 < 1 ; 앞 < 19 ; 앞++){
    for(var 뒤 =1; 뒤 < 20; 뒤++)
        console.log(`${앞} * ${뒤} = ${앞*뒤}`)
}

var num = 0
for(var i =0 ; i< 3453 ; i++){
    num+= i
}
console.log(num)

var 공룡 = {
    x : 10,
    y : 20,
    w : 100,
    h : 100,
    draw(){
console.log("그리기 함수 입니다")
        }
    }
    