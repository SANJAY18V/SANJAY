import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="about"><h1>ABOUT ME</h1></div>
          {/* <div className="image"><img src="https://tse3.mm.bing.net/th?id=OIP.lKpFxgZ-jNULlsim7p_PgAHaK-&pid=Api&P=0&h=180"alt="happy"></img></div> */}
          <div className="p"><p>i am rohit,studying in sri krishna college of engineering and technology.I am creating a portfolio</p></div>
          <div className="ul">
            <ul>
              <li>i am happy</li>
              <li>i am sad</li>
              <li>i am bad</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App