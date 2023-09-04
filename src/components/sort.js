import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { filter_products ,sorting, dispatch } = useFilterContext();

const handleSortChange = (e) => {
  const selectedValue = e.target.value;

  dispatch({ type: selectedValue }); // Dispatch the selected sorting action
};

  return (
    <div className="flex justify-between items-center mt-20">
      {/* 1st column */}
      <div className="flex gap-8">
        <button className="border rounded cursor-pointer hover:bg-gray-200 p-2">
          <BsFillGridFill className="icon" />
        </button>

        <button className="border rounded cursor-pointer hover:bg-gray-200 p-2">
          <BsList className="icon" />
        </button>
      </div>

      {/* 2nd column */}
      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      {/* 3rd column */}
      <div className="border rounded p-2">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style p-2 cursor-pointer"
            onChange={handleSortChange}
          >
            <option value="SORT_LOWEST">Price (Lowest)</option>
            <option value="SORT_HIGHEST">Price (Highest)</option>
            <option value="SORT_A_TO_Z">Name (A-Z)</option>
            <option value="SORT_Z_TO_A">Name (Z-A)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
