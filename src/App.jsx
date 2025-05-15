import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Menu />
      <Footer />
    </Router>
  )
}

export default App
