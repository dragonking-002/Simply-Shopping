import CategoriesPreview from "../CategoriesPreview"

import {Routes,Route} from 'react-router-dom'

import Category from "../Category"

import { useEffect } from "react"

import { getCategoriesAndDocuments } from "../../utilities/firebase"

import { setcategories } from "../../redux-store/categories/category-actions"

import {useDispatch} from 'react-redux'


const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setcategories(categoriesArray))
        }
        getCategoriesMap()
    },[])

    return (
        <Routes>
            <Route index element = {<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop