import React, { useState, useEffect } from 'react';
import ProductCard from '../components/productListingCard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '0 - 1000 Rs', min: 0, max: 1000 },
  { label: '1000 - 2000 Rs', min: 1000, max: 2000 },
  { label: '2000 - 3000 Rs', min: 2000, max: 3000 },
  { label: '3000 - 4000 Rs', min: 3000, max: 4000 },
  { label: '4000 Rs and above', min: 4000, max: Infinity }
];

function JewelListing (){
  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:8000/api/listing/jewelListing/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });

  },[])

  const filteredProducts = data.filter(product => {
    const price = parseInt(product.price.replace('Rs', '').trim());
    return price >= selectedRange.min && price <= selectedRange.max;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <Navbar isNotLanding="True" />
        <div className="flex justify-center mt-52">
            <select
                value={selectedRange.label}
                onChange={(e) => {
                    const range = priceRanges.find(range => range.label === e.target.value);
                    setSelectedRange(range);
                }}
                className="p-2 border-none rounded-md shadow-md focus:outline-none"
                >
                {priceRanges.map((range) => (
                    <option key={range.label} value={range.label}>
                        {range.label}
                    </option>
                ))}
            </select>
        </div>
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-20">
            {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
                <ProductCard
                    key={product.productId} 
                    id={product.productId}
                    image={product.images[0].image}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    link={product.link}
                />
            ))
            ) : (
            <p>No products found</p>
            )}
        </section>
        <Footer />
    </div>
  );
};

export default JewelListing;

