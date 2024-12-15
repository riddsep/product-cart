import ProductItem from "./ProductItem";

function ProductList({ onAddToCart, addToCart, onRemove, products }) {
  return (
    <div className="flex-grow-0">
      <ProductItem
        onAddToCart={onAddToCart}
        addToCart={addToCart}
        onRemove={onRemove}
        products={products}
      />
    </div>
  );
}

export default ProductList;
