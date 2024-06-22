import './App.css'
import Header from './components/banner'
import Game from './components/game'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
import { fetchData, processJSONData, shuffle } from './components/utils'

function App() {

  const [imgData, setImgData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [max, setMax] = useState(0);

  const dataUrl = 'https://picsum.photos/v2/list?page=1&limit=12';

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      try {
        const fetch = await fetchData(dataUrl);
        const processed = processJSONData(fetch);
        setImgData(shuffle(processed));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [dataUrl]);

  function incrementScore() {
    setScore(score + 1);
    if (max <= score + 1) {
      setMax(score + 1);
    }
    setImgData(shuffle(imgData));
  }

  function resetScore() {
    setScore(0);
    setImgData(shuffle(imgData));
  }

  function updateMax() {
    if (score > max) {
      setMax(score);
    }
  }

  if (loading) {
    return (
      <div>Loading.....</div>
    )
  }

  return (
    <>
      <Header score={score} max={max} />
      <Game 
        cardData={imgData}
        incrementScore={incrementScore}
        resetScore={resetScore}
        updateMax={updateMax}
      />
      <Footer />
    </>
  )
}

export default App
