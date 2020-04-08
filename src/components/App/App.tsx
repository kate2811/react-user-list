import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import MainPage from '../MainPage'
import AddUserPage from '../AddUserPage'
import EditUserPage from '../EditUserPage'
import { useLoadUserList } from '../../modules/core/hooks'
import { customHistory } from '../../history'

function App() {
  const loadUserList = useLoadUserList()

  useEffect(() => {
    loadUserList()
  }, [loadUserList])

  return (
    <Router history={customHistory}>
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
