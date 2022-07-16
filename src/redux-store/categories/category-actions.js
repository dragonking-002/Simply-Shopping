import { createAction } from "../../utilities/reducer"

import { CATEGORIES_ACTION_TYPES } from "./category-action.types"

import { getCategoriesAndDocuments } from "../../utilities/firebase"

export const setcategories = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categories)


const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray)

const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error)

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try{
        const categoriesArray = await getCategoriesAndDocuments()
        dispatch(fetchCategoriesSuccess(categoriesArray))
    }
    catch(error){
        dispatch(fetchCategoriesFailed(error))
    }
}