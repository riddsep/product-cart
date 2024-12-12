import ProductItem from "./ProductItem";

function ProductList({ onAddToCart, addToCart, onRemove, products }) {
  return (
    <div>
      <h1 className="text-4xl mb-10 font-bold">Desserts</h1>
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
