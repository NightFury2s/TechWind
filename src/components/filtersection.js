import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";

export const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="SEARCH"
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 50%;
      border: none;
      border-radius: 4px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease-in-out;

      &:focus {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
