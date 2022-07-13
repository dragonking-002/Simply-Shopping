import { createAction } from "../../utilities/reducer"

import { USER_ACTION_TYPES } from "./user-action.types"

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
