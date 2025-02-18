import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "./ProductArr";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsArr.find((item) => item.id === productId);
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="product-details">
      {/* Left Section - Product Image */}
      <div className="product-image-container">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="product-image"
        />
      </div>

      {/* Right Section - Product Details */}
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">₹{product.price}</p>

        {/* Rating */}
        <div className="product-rating">
          ⭐ {product.rating} | {product.reviews} Reviews
        </div>

        {/* Size Selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="product-sizes">
            <h4>Select Size:</h4>
            <div className="size-options">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`size-btn ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="action-buttons">
          <button className="btn add-to-cart">Add to Cart</button>
          <button className="btn buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
