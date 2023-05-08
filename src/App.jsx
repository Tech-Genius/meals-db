import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Meals from './componenets/Meals'
import Search from './componenets/Search'
import { useGlobalContext } from './context'
import Modal from './componenets/Modal'

function App() {
 const {showModal} = useGlobalContext()

  return (
    <div className="App">
      <Search/>
      <Meals />

      {showModal && <Modal/>}
    </div>
  )
}

export default App
