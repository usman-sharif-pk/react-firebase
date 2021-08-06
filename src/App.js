import { connect } from 'react-redux'

import Routes from './routes'
import { setCurrentUser } from './redux/user/user.actions'
import { auth, handleUserProfile } from './utils'
import { useComponentDidMount, useComponentWillUnmount } from './utils'

const App = ({ setCurrentUser, ...restProps }) => {
  let authListener = null

  useComponentDidMount(() => {
    authListener = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        return setCurrentUser(userAuth)
      }

      const userRef = await handleUserProfile(userAuth)
      userRef.onSnapshot(snapshop => {
        setCurrentUser({ id: snapshop.id, ...snapshop.data() })
      })
    })
  })

  useComponentWillUnmount(authListener)

  return <Routes />
}

const mapDispatchToProps = dispatch => {
  return { setCurrentUser: user => dispatch(setCurrentUser(user)) }
}

const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
