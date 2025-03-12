import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

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
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
