import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <div>
      <Header />
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1 className='text-red-600'>Hello, World!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident necessitatibus reprehenderit laboriosam nemo aspernatur, maxime fuga beatae aut, similique nam quas? Qui fuga in molestiae omnis molestias exercitationem doloribus tempora blanditiis itaque debitis. Nostrum ipsum sed labore corrupti nam maxime, facilis veritatis ex eos laborum corporis quia aliquam blanditiis perferendis?</p>
      <Footer />
    </div>
  )
}

export default App
