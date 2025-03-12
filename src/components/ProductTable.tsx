import { Product } from "./FilterableProductTable.tsx";
import ProductCategoryRow from "./ProductCategoryRow.tsx";

export default function ProductTable({ products }: { products: Product[] }) {
  // separate out the list based on the data so I've got fruits and vegetables

  function groupByProductType({ products }: { products: Product[] }) {
    return Object.groupBy(products, ({ category }) => category);
  }
  const productCategories = groupByProductType({ products });

  return (
    <>
      <h1>Product table here...</h1>
      {Object.keys(productCategories).map((category) => {
        return (
          <ProductCategoryRow
            category={category}
            products={productCategories[category]}
          />
        );
      })}
    </>
  );
}
