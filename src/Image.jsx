import product from "./product";

function Image() {
  return (
    <div className="product-image-wrapper">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="image-shine" />
    </div>
  );
}

export default Image;