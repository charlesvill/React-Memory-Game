import './App.css'
import Header from './components/banner'
import Game from './components/game'
import Footer from './components/footer'

function App() {

  let score = 0;
  let max = 0;
  let cards = [];

  return (
    <>
      <Header score={score} max={max}/>
      <Game cards={cards}/>
      <Footer />
    </>
  )
}

export default App
