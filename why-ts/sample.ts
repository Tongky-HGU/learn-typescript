//js
// function sum(a,b) {
//     return a+b;
// }

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(10, 20);

// 제공하는 api를 바로 볼 수 있음
result.toLocaleString();
