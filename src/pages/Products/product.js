import styled from "styled-components";
import { FilterSection } from "../../components/filtersection";
import ProductList from "../../components/productlist";
import Sort from "../../components/sort";


const Products = () => {
    return (
        <Wrapper>
            <div className="container grid grid-filter-column">
                <div>
                    <FilterSection />
                </div>

                <section className="product-view--sort">
                    <div className="sort-filter">
                        <Sort />
                    </div>

                    <div className="main-product">
                        <ProductList />
                    </div>
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .grid-filter-column {
        grid-template-columns: 0.2fr 1fr
    }
`;

export default Products;