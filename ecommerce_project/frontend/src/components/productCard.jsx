import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductCard({ id, image, brand, name, price, originalPrice }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      dispatch(addToCart({ product, quantity: 1 }));
    }
  };

  return (
    <div className="relative lg:w-96 md:w-80 sm:w-64 w-72 bg-white shadow-md  rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-full flex items-center">
          <div className="flex-grow">
            <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
            <p className="text-sm sm:text-base lg:text-lg font-bold text-black truncate block capitalize">{name}</p>
            <div className="flex items-center mt-2">
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-black cursor-auto">{price}</p>
              {originalPrice && (
                <del className="ml-2 text-xs sm:text-sm text-gray-600">{originalPrice}</del>
              )}
            </div>
          </div>
        </div>
      </Link>
      <button
            className="ml-4 p-2 rounded-full hover:bg-gray-200"
            onClick={handleAddToCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-bag-plus"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
          </button>
    </div>
  );
}

export default ProductCard;
