import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(state => state.products.products);

  const product = products.find(p => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.images[0].image || "");
  const [quantity, setQuantity] = useState(1);
  const thumbnails = product.images.map(img => img.image);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    navigate("/cart")
  };

  return (
    <div className="mt-20 md:mt-44">
      <Navbar isNotLanding="True" />
      <div className="container mx-auto px-4 py-8 mb-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage || product.images[0]}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {thumbnails && thumbnails.length > 0 ? (
                thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => handleThumbnailClick(thumb)}
                  />
                ))
              ) : (
                <p>No thumbnails available</p>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-5xl font-bold mb-4">{product.name}</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold mr-2">{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="50"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-16 text-center rounded-md shadow-sm focus:outline-none"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button onClick={handleAddToCart} className="group bg-gradient-to-br from-purple-500 to-pink-400 flex gap-2 items-center text-white px-6 py-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                Wishlist
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Description:</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
