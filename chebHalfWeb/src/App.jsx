import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App({listItems,mainList,galleryList}) {

  return (
    <div className="App">
        <Header list = {listItems} />
        <Main list = {mainList} galleryItems = {galleryList} />
        <Footer/>
    </div>
  )
}

export default App
