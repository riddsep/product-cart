function Total({ addToCart }) {
  return (
    <div className="flex justify-between items-center py-2 mb-5">
      <h1 className="text-xl font-semibold">Total</h1>
      <span className="mr-2  font-semibold text-[#C73A0F] text-xl">
        $
        {addToCart
          .reduce((acc, curr) => acc + (curr.quantity * curr.price) / 100, 0)
          .toFixed(2)}
      </span>
    </div>
  );
}
export default Total;
