// 파라미터의 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 20;
}

// 파라미터 제한하는 특성
// sum(10, 20, 30);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {}

log("hello");
log("hello ts", "abc");
