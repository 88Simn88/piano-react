import { useEffect, useState } from 'react'
import './index.css'
import './App.css'

function App() {

  let context = new AudioContext()
  let [sound, setSound] = useState("triangle")
  let [vol, setVol] = useState(1)

  const handlePlusVol = () => {
    
    if(vol === 7) {
      return setVol(1)
    } else {
      setVol(vol +1)
    }
  }

  const handleMinusVol = () => {
    if(vol === 1) {
      return setVol(1)
    } else {
      setVol(vol -1)
    }
  }

  //change the oscillator
  const setSine = () => {
    setSound(sound = "sine")
  }
  const setSquare = () => {
    setSound(sound = "square")
  }
  const setSawtooth = () => {
    setSound(sound = "sawtooth")
  }
  const setTriangle = () => {
    setSound(sound = "triangle")
  }

  const jsNota = (frec) => {
    let o = context.createOscillator()
    let g = context.createGain()
    o.connect(g)
    o.type = sound
    o.frequency.value = frec
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + vol)
  }

  return (
    <>

      <h3 className='title'>Little Piano</h3>

      <ul className="set">
        <li onClick={() => jsNota(174.614)} className="white key f"></li>
        <li onClick={() => jsNota(184.997)} className="black key fs"></li>
        <li onClick={() => jsNota(195.998)} className="white key g"></li>
        <li onClick={() => jsNota(207.652)} className="black key gs"></li>
        <li onClick={() => jsNota(220.000)} className="white key a"></li>
        <li onClick={() => jsNota(233.082)} className="black key as"></li>
        <li onClick={() => jsNota(246.942)} className="white key b"></li>
        <li onClick={() => jsNota(261.626)} className="white key c"></li>
        <li onClick={() => jsNota(277.183)} className="black key cs"></li>
        <li onClick={() => jsNota(293.665)} className="white key d"></li>
        <li onClick={() => jsNota(311.127)} className="black key ds"></li>
        <li onClick={() => jsNota(329.628)} className="white key e"></li>
      </ul>

      <div className='vol__container'>
        <h4 className='subtitle'>Vol & decay</h4>
        <div className='btn__container'>
          <button onClick={handlePlusVol} className='vol__btn'>+</button>
          <button onClick={handleMinusVol} className='vol__btn'>-</button>
        </div>
        <h4 className='vol__indicator'>{vol}</h4>
      </div>

      <div className='btn__container'>
        <button className="btn" onClick={setSine}>Sine</button>
        <button className="btn" onClick={setSquare}>Square</button>
        <button className="btn" onClick={setSawtooth}>Sawtooth</button>
        <button className="btn" onClick={setTriangle}>Triangle</button>
      </div>

    </>
  )
}

export default App
