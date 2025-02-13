interface User {
 age :number;
 name: string;
}

//변수에 활용한 인터페이스
const seho:User ={
    age: 33,
    name: '세호'
}

//함수에 활용한 인터페이스
function getUser(user:User){
    console.log(user)
}

getUser({age:1,name:'hi'});

// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
    (a:number,b:number):number
}

let sum:SumFunction ;
sum = function(a:number,b:number):number{
    return a+b;
}

// 인덱싱
interface StringArray {
    [index:number]:string
}
let arr:StringArray = ['a','b','c'];
// arr[0] = 10;
arr[0] = "d";

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key:string]:RegExp
}

let obj:StringRegexDictionary ={
    sth: /abc/,
    // cssFile :'css'
    cssFile :/\.css$/,
    jsFile :/\.js$/
}

// obj['cssFile'] ='a'

Object.keys(obj).forEach((value)=>{

})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language:string;
}

const capt :Developer ={
    language : 'ts',
    age: 100,
    name:'capt'
}




