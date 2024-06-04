import './App.css'
import Header from './components/banner'
import Game from './components/game'
import Footer from './components/footer'
import { fetchData } from './components/utils'

async function imageAPI(endpoint) {
  const fetch = await fetchData(endpoint);
  console.dir(fetch);
}
function App() {

  const dataUrl = 'https://picsum.photos/v2/list?page=1&limit=12';
  let score = 0;
  let max = 0;
  let cards = [];
  imageAPI(dataUrl);

  return (
    <>
      <Header score={score} max={max} />
      //game you just pass the collection of cards as html already?
      //all the logic lives here in the parent, no nested logic in children
      <Game cards={cards} />
      <Footer />
    </>
  )
}

export default App
