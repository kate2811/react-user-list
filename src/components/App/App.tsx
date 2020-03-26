import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from '../MainPage'
import AddUserPage from '../AddUserPage'
import EditUserPage from '../EditUserPage'
import { useIsLoading, useLoadUserList } from '../../modules/core/hooks'
import Loader from 'react-loader-spinner'
import style from './App.module.scss'

function App() {
  const loadUserList = useLoadUserList()
  const isLoading = useIsLoading()

  useEffect(() => {
    loadUserList()
  }, [])

  const LoaderContent = (
    <div className={style.loader}>
      <Loader type="BallTriangle" color="#000000" height={20} width={20} />
    </div>
  )

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>User list</h1>
          {isLoading ? LoaderContent : <MainPage />}
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
