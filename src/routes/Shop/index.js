import { useContext } from "react"

import './index.scss'

import { ProductsContext } from "../../contexts/ProductsProvider"

import ProductCard from "../../components/ProductCard"

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return(
        <div className="products-container">
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    )
}

export default Shop