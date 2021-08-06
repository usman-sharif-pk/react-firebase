import HomePage from '../pages/home'
import Registration from '../pages/registration'
import MainLayout from '../layouts/mainlayout'
import Login from '../pages/login'
import PasswordRecorvery from '../pages/recovery'

export const routes = [
  {
    name: 'Home',
    path: '/',
    isPublic: false,
    Component: HomePage,
    Layout: MainLayout
  },
  {
    name: 'Registration',
    path: '/registration',
    isPublic: true,
    Component: Registration,
    Layout: MainLayout
  },
  {
    name: 'Login',
    path: '/login',
    isPublic: true,
    Component: Login,
    Layout: MainLayout
  },
  {
    name: 'Password Recover',
    path: '/recovery',
    isPublic: true,
    Component: PasswordRecorvery,
    Layout: MainLayout
  }
]

export default routes
