// 인터페이스

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;

// 구조적으로 큰 타입은 호환이 가능하다.
// developer = person;
person = developer;

// 함수
var add = function (a: number) {
  //..
};

var sum = function (a: number, b: number) {
  return a + b;
};

// sum = add; // 이제 다 안되는듯?
// add = sum;

interface Empty<T> {
  //.
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var empty3: NotEmpty<string>;
var empty4: NotEmpty<number>;

// empty3 = empty4;
// empty4 = empty3;
