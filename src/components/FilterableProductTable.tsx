import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import Checkbox from "./Checkbox";

export type CategoryType = "Fruits" | "Vegetables";

export interface Product {
  category: CategoryType;
  price: string;
  stocked: boolean;
  name: string;
}

export interface FilterableProductTableProps {
  products: Product[];
}

export default function FilterableProductTable({
  products,
}: FilterableProductTableProps) {
  const [searchInput, setSearchInput] = useState("apple");
  const [inStockInput, setInStockInput] = useState(false);
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  if (inStockInput === true) {
    filteredProducts = filteredProducts.filter(
      (product) => product.stocked === true
    );
  }
  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Checkbox inStockInput={inStockInput} setInStockInput={setInStockInput} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
