// 유니온 타입
type seho = string | number | boolean
function logMessage(value:string | number){
    console.log(value)
    if(typeof value === 'number'){
        value.toLocaleString
    }
    if(typeof value === 'string'){
        value.toString
    }

    throw new TypeError('value myst be string or number')
}

logMessage('hello')
logMessage(100);

interface Developer{
    name:string
    skill: string;
}

interface Person {
    name:string;
    age:number;
}

function askSomeone(someone: Developer | Person){
    someone.name // 공통 속성만 접근할 수 있음
    // someone.skill
    // someone.age
}

// 인터셉션 타입
// 합친 하나의 타입
type seho2 = string | boolean & number

function askSomeone2(someone: Developer & Person){
    someone.name
    someone.skill
    someone.age
}

askSomeone({name:"디벨로퍼", skill:"웹 개발"})
askSomeone({name:"디벨로퍼", age:200})

askSomeone2({name:"디벨로퍼", skill:"웹 개발", age:20})
