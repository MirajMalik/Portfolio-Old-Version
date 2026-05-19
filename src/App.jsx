import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header/Header'

function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#e4e4e7] antialiased selection:bg-amber-500/30 selection:text-amber-200">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
          <Header />
          <main className="flex-1 w-full min-w-0 bg-[#121214] border border-zinc-800/80 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300">
            <div className="p-6 sm:p-8 lg:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

