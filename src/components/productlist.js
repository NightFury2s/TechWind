import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function ProductList() {
  const [data, setData] = useState([]);

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

  console.warn("result", data);

  return (
    <div>
      <h1>ProductList</h1>
      <Table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Price</td>
          <td>Company</td>
          <td>Price</td>
        </tr>
        {
          data.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td>Price</td>
            </tr>
          )
        }
      </Table>
    </div>
  );
}

export default ProductList;
