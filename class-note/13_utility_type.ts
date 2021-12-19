interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 api 핫ㅁ수
function fetchProducts(): Promise<Product[]> {
  return;
  // ..
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

type ShoppingItem = Pick<Product, "id" | "name" | "price">;

function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}
