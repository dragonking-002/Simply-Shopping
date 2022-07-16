import CategoriesPreview from "../CategoriesPreview"

import {Routes,Route} from 'react-router-dom'

import Category from "../Category"

import { useEffect } from "react"


import {useDispatch} from 'react-redux'

import { fetchCategoriesAsync } from "../../redux-store/categories/category-actions"


const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    },[dispatch])

    return (
        <Routes>
            <Route index element = {<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop