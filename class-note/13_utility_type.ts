interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 api 함수
function fetchProducts(): Promise<Product[]> {
  return;
  // ..
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 특정 상품의 상세정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;

function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
type UpdateProduct = Partial<Product>;

function updateProduce(productItem: UpdateProduct) {}

// 4.  유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// #1
// type UserProfileUpdate = {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// #2
// type UserProfileUpdate = {
//   [p in "username" | "email" | "profilePhotoUrl"]: UserProfile[p];  // mapped type;
// };

type userProfileKeys = keyof UserProfile;

// #3
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

type Subset<T> = {
  [p in keyof T]?: T[p];
};
