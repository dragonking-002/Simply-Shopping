import { useContext } from "react"

import './index.scss'

import { CategoriesContext } from "../../contexts/CategoriesProvider"

import CategoryPreview from "../../components/CategoryPreview"


const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <div className="categories-preview-container">
            {
                Object.keys(categoriesMap).map( title => {
                    const products = categoriesMap[title]
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </div>
    )
}

export default CategoriesPreview