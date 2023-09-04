import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
// import { useFilterContext } from '../context/filter_context';
// import gridView from './gridView';

function ProductList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const fetchData = async () => {
    try {
      let result = await fetch("https://api.pujakaitem.com/api/products");
      result = await result.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Pagination Function
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(data.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Add to cart
  const addToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  // // Gridview
  // const { filter_products, setGridView } = useFilterContext();

  // if(setGridView) {
  //   return <gridView products={filter_products} />;
  // };

  // if(setGridView === false) {
  //   return <ListView products={filter_products} />;
  // };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentProducts.map((item) => (
          <Card key={item.id} className="product-card w-60 md:w-80 overflow-hidden rounded-md shadow-lg p-4">
            <div className="relative group overflow-hidden">
              <Card.Img
                variant="top"
                src={item.image}
                className="h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-white font-semibold text-sm py-2 px-4 bg-gray-800 hover:bg-gray-900 rounded-md">
                  View Details
                </button>
              </div>
            </div>
            <Card.Body className="p-4">
              <Card.Title className="text-center font-semibold text-lg mb-2">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Card.Title>
              <Card.Text className="text-red-500 font-semibold mb-2">Price: {item.price.toLocaleString('en-US')} &#8363; </Card.Text>
              <Card.Text className="text-gray-700">Description: {item.description}.<br /></Card.Text>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-12 rounded-md"
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </button>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border rounded-md px-2 py-2 w-16 text-center"
                />
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      
      {/* Pagination */}
      <Pagination className="mt-8 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
            className="mx-1 cursor-pointer"
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default ProductList;
