import ProductItem from "./ProductItem";

function ProductList({
  onAddToCart,
  addToCart,
  onRemove,
  products,
  isLoading,
}) {
  return (
    <div className={`flex-grow-0 ${isLoading ? " w-full" : ""}`}>
      <ProductItem
        onAddToCart={onAddToCart}
        addToCart={addToCart}
        onRemove={onRemove}
        products={products}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ProductList;
