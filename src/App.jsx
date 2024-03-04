import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Đăng nhập</h1>
      <div className="card">

        <h2>Tên tài khoản <input type="text" className='login' /> </h2>
        <h2> Mật khẩu <input type="text" className='login' /> </h2>

      </div>

    </>
  )
}

export default App
