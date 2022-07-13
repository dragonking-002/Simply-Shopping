import {createSelector} from 'reselect'

const categoriesReducer = (state) => state.categories

export const selectCategories = createSelector(
    [categoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc,{title,items}) => {
        acc[title.toLowerCase()] = items
        return acc
    },{})
)
