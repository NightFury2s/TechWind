import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}})
  }

  //sort the product
  useEffect(() => {
    dispatch({type:"FILTER_PRODUCTS"});
    dispatch({type: "SORTING_PRODUCTS"});
  }, []);

  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // //set the grid view
  // const setGridView = () => {
  //   return dispatch({ type: "SET_GRIDVIEW" });
  // };

  //Sorting function
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  //Sort the product
  useEffect(() => {
    dispatch({ type:"SORTING_PRODUCTS", payload: products });
  }, [products, state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{
       ...state,
      //  setGridView,
      dispatch,
      sorting,
       updateFilterValue,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
