import React from "react";
import { Link } from "react-router-dom";
import "../sass/ProductCard.sass";
import PropTypes from "prop-types";
import StarArrangement from "./StarArrangement";
/**
 * Product Card component
 * @param {propType} props
 * @property {function}
 */
function ProductCard({ product, clicked }) {
  const {
    id,
    image_link,
    api_featured_image,
    brand,
    name,
    category,
    price,
    price_sign,
    product_colors,
    rating,
  } = product;

  return (
    <Link
      to={`/productDetails/${id}`}
      // target="_blank"
      onClick={() => clicked()}
    >
      <div className="productCard__card">
        <div className="productCard__upperPart">
          <div className="productCard__img">
            <img src={image_link || api_featured_image} alt={brand} />
          </div>
          <div className="productCard__info">
            <h3>{brand}</h3>
            <p className="productCard__pname">{name}</p>
            {rating ? (
              <StarArrangement
                fill={Math.floor(rating)}
                blank={5 - Math.floor(rating)}
              />
            ) : null}
          </div>
        </div>

        <div className="productCard__lowerPart">
          {category ? (
            <p>
              <strong>category:</strong> {category}
            </p>
          ) : null}
          {price ? (
            <p>
              <strong>{price_sign}</strong> {price}
            </p>
          ) : null}

          <div className="productCard__colorswatch">
            {product_colors?.map((color) => (
              <span
                key={color.hex_value + Math.random()}
                title={color.colour_name}
                style={{ backgroundColor: color.hex_value }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
ProductCard.prototype = {
  product: PropTypes.object,
  clicked: PropTypes.func,
};
export default ProductCard;
