import ProductItem from "./ProductItem";

function ProductList({ onAddToCart, addToCart, onRemove, products }) {
  return (
    <div className="flex-grow-0">
      <h1 className="text-4xl mb-10 font-bold">Tokopaedi</h1>
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
