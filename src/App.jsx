import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111]">
        <Header />
        <main className="flex-1 w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default App
