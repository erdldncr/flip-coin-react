import {useState} from 'react'
import './App.css';

function App() {
  const imageSource=['https://wi-images.condecdn.net/image/kMw9dD3kMqD/crop/900/f/pound-coin.png','https://wi-images.condecdn.net/image/zGpMQNjL1bN/crop/900/f/pound-coin-front.png']
  const [image,setImage]=useState(null)
  const [countFlip, setCountFlip]=useState(0)
  const [countHeads, setCountHeads]=useState(0)
  const [countTails, setCountTails]=useState(0)
  
  function checkHead(){
    setCountFlip(countFlip+1)
    let number=Math.floor(Math.random()*2)
    setImage(imageSource[number])
    number===0?setCountHeads(countHeads+1):setCountTails(countTails+1)
  }
  return (
    <div className="App">
      <h1>Let'sFlip a coin</h1>
        <div>
        {image&&<img src={image} alt=""/>}
        </div>
      
      <button onClick={checkHead}>Flip me</button>
      <p>Out of {countFlip} flips, there have been {countHeads} heads and {countTails} tails</p>
    </div>
  );
}

export default App;
