import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MuiThemeProvider, CssBaseline } from '@material-ui/core'

import Auth from './pages/auth/Auth'
import MyHabits from './pages/my-habits/MyHabits'

import { authReducer } from './pages/auth/store'

import theme from './utils/theme'

const reducers = combineReducers({
  authReducer,
})

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/my-habits" component={MyHabits} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App
