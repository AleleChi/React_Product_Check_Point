import product from "./Product";

function Price() {
  return (
    <div className="product-price-wrapper">
      <span className="price-label">Price</span>
      <span className="product-price">${product.price.toFixed(2)}</span>
    </div>
  );
}

export default Price;