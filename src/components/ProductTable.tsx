import { Product } from "./FilterableProductTable.tsx";
import ProductCategoryRow from "./ProductCategoryRow.tsx";
import { CategoryType } from "./FilterableProductTable.tsx";

export default function ProductTable({ products }: { products: Product[] }) {
  // separate out the list based on the data so I've got fruits and vegetables

  function groupByProductType({
    products,
  }: {
    products: Product[];
  }): ProductCategories {
    return Object.groupBy(
      products,
      ({ category }) => category
    ) as ProductCategories; //type casting
  }

  const productCategories = groupByProductType({ products });
  const productTypes = Object.keys(productCategories) as CategoryType[];
  console.log(productCategories);
  return (
    <>
      <h1>Product table here...</h1>
      {productTypes.map((category) => {
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

//create a type where the keys are from the category type and the values are going to be the array of products
type ProductCategories = { [K in CategoryType]: Product[] };
