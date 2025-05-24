import React ,{Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/css/index.css'
import App from './App.tsx'
import { store } from './store'
import { Provider } from 'react-redux'
import Loading from './components/custom/loading.tsx'

createRoot(document.getElementById('root')!).render(
 <React.StrictMode >
    <Provider store={store}>
       <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
