import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import MainLayout from '../layouts/mainlayout'

import { routes } from './routes'

const SiteRoutes = ({ currentUser }) => {
  return (
    <Switch>
      {routes.map(({ name, path, isPublic, Component, Layout }, i) => {
        const isExact = {}
        if (name === 'Home') isExact.exact = true

        return (
          <Route
            {...isExact}
            key={i}
            path={path}
            render={() => {
              return (
                <Layout>
                  <Component />
                </Layout>
              )
            }}
          />
        )
      })}
    </Switch>
  )
}

export default SiteRoutes
