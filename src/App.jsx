import './App.css'
import Header from './components/banner'
import Game from './components/game'
import Footer from './components/footer'
import { useMemo, useState } from 'react'
import { fetchData } from './components/utils'

async function imageAPI(endpoint) {
  const fetch = await fetchData(endpoint);
  console.dir(fetch);
  return fetch;
}
function App() {

  const dataUrl = 'https://picsum.photos/v2/list?page=1&limit=12';
  let score = 0;
  let max = 0;
  let cards = [];
  const imgData = useMemo(() => imageAPI(dataUrl), [dataUrl]);

      // game you just pass the collection of cards as html already?
      // all the logic lives here in the parent, no nested logic in children

  return (
    <>
      <Header score={score} max={max} />
      <Game cards={cards} />
      <Footer />
    </>
  )
}

export default App
