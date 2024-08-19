import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import FlashcardsContainer from './components/Flashcards/FlashcardsContainer/FlashcardsContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <FlashcardsContainer/>
      <Footer/>
    </>
  )
}
export default App