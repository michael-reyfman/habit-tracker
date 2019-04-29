const initialState = {
  authorized: false,
}

const ACTION_TYPES = {
  LOGIN: 'login',
  LOGOUT: 'logout',
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return { ...state, authorized: true }
    case ACTION_TYPES.LOGOUT:
      return { ...state, authorized: false }
    default:
      return state
  }
}

export function login() {
  return ({
    type: ACTION_TYPES.LOGIN,
  })
}

export function logout() {
  return ({
    type: ACTION_TYPES.LOGOUT,
  })
}