const a = 10;

// 타입 추론 기본 1
function getB(b = 10) {
  const c = "hi";
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

const shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "hello",
};

// 타입 추론 기본 3

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

const detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "a",
};

// Best Common Type
const arr = [1,2,true,true,'a'];


