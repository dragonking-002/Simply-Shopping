import { createAction } from "../../utilities/reducer"

import { CATEGORIES_ACTION_TYPES } from "./category-action.types"

export const setcategories = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categories)
