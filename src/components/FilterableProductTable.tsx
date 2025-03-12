import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import Checkbox from "./Checkbox";

export interface Product {
  category: string;
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
    product.name.includes(searchInput)
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
