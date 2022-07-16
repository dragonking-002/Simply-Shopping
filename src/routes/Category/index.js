import { CategoryContainer,Title } from './category.styles'

import {useParams} from 'react-router-dom'


import { Fragment, useEffect, useState } from 'react'

import ProductCard from '../../components/ProductCard'

import Spinner from '../../components/Spinner'

import {selectCategoriesMap,selectCategoriesIsLoading} from '../../redux-store/categories/categories-selector'
 

import {useSelector} from 'react-redux'

const Category = () => {
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products,setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {
                isLoading ? <Spinner /> :
                <CategoryContainer>
                {
                    products && 
                    products.map( product => <ProductCard key={product.id} product={product} /> )
                }
                </CategoryContainer>
            }
        </Fragment>
    )
}

export default Category