//재사용성이 높은 컴포넌트를 만들 때 필수

// function logText(text){
//     console.log(text);
//     return text
// }

// logText(10); // 10
// logText('하이'); // 하이
// logText(true); // true

function logText<T>(text:T):T{
    console.log(text);
    return text
}

const str = logText<string>('하이'); //
str.split('')
const bool = logText<boolean>(true);

// 타입을 다르게 받기 위해서 함수를 계속 생성하는 것은 유지보수에 안좋다.
// 그렇다고, 유니온타입은 두 타입이 같이 사용할 수 있는 api만 사용가능하다.
// 타입을 호출할때 정할 수 있고, 반환값까지 추론해준다.

//! 인터페이스에 제너릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected :boolean
}

const obj:Dropdown<number> = {value:1, selected:false}


//! 제너릭의 타입제한
// 타입에 대한 힌트를 조금 더 줄 수 있다. (배열이다)
function logTextLength<T>(text:T[]):T[]{
    console.log(text.length)
    return text
}

logTextLength<string>(['hi','bi']);

//! 제너릭 타입제한 2- 정의된 타입 이용하기
interface LengthType{
    length:number;
}
function logTextLength2<T extends LengthType>(text:T) :T {
    text.length
    return text

}

logTextLength2('a');
logTextLength2({length:10});

//! 제너릭 타입제한 3 - keyof
interface ShoppingItem{
    name:string;
    price:number;
    stock:number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T{
    return itemOption
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a')
// getShoppingItemOption<string>('a')
getShoppingItemOption('price')


