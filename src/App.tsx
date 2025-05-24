import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layout/mainLayout'
import AuthLayout from '@/layout/authLayout'
import IndexPage from './page'
import LoginPage from './page/auth/loginPage'
import RegisterPage from './page/auth/registerPage'
import { PATH } from './lib/config'
import ProtectedRoute from './router/ProtectedRoute'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path={PATH.LOGIN} element={<LoginPage />} />
            <Route path={PATH.REGISTER} element={<RegisterPage />} />
          </Route>
          {/* Main routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path={PATH.HOME} element={<IndexPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
