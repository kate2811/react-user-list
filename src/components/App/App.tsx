import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from '../MainPage'
import AddUserPage from '../AddUserPage'
import EditUserPage from '../EditUserPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/add-user">
          <AddUserPage />
        </Route>
        <Route path="/edit-user/:id">
          <EditUserPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
