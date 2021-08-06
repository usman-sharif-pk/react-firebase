import { userTypes } from './user.type'

export const setCurrentUser = user => {
  return { type: userTypes.SET_CURRENT_USER, payload: user }
}
