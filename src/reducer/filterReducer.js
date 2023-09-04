const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORT_LOWEST":
      const sortedLowest = [...state.all_products].sort(
        (a, b) => a.price - b.price
      );
      return {
        ...state,
        filter_products: sortedLowest,
        sorting_value: "lowest",
      };

    case "SORT_HIGHEST":
      const sortedHighest = [...state.all_products].sort(
        (a, b) => b.price - a.price
      );
      return {
        ...state,
        filter_products: sortedHighest,
        sorting_value: "highest",
      };

    case "SORT_A_TO_Z":
      const sortedAToZ = [...state.all_products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return {
        ...state,
        filter_products: sortedAToZ,
        sorting_value: "a-z",
      };

    case "SORT_Z_TO_A":
      const sortedZToA = [...state.all_products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      return {
        ...state,
        filter_products: sortedZToA,
        sorting_value: "z-a",
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
