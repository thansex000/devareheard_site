import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layout/mainLayout'
import AuthLayout from '@/layout/authLayout'
import IndexPage from './page'
import LoginPage from './page/auth/loginPage'
import RegisterPage from './page/auth/registerPage'
import { LEARN, PATH } from './lib/config'
import ProtectedRoute from './router/ProtectedRoute'
import IndexChinese from './page/Chinese/indexChinese'
import NotFoundPage from './page/notFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path={PATH.LOGIN} element={<LoginPage />} />
          <Route path={PATH.REGISTER} element={<RegisterPage />} />
        </Route>

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path={PATH.HOME} element={<IndexPage />} />
            <Route path={LEARN.CHINESE} element={<IndexChinese />} />
          </Route>
        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
