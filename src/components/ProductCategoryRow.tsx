import { Product } from "./FilterableProductTable.tsx";

interface ProductCategoryRowProps {
  products: Product[];
  category: string;
}

export default function ProductCategoryRow({
  products,
  category,
}: ProductCategoryRowProps) {
  return (
    <>
      <h3>{category}</h3>
      <ul>
        {products.map(({ name, price }) => {
          return (
            <li key={name}>
              <p>
                {name} {price}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
