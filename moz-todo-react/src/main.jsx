import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const data = ['забеги','тренировки','фирменный магазин']
const list = ['О забеге','Участникам','Зрителям','Волонтерам','Благотворительность','Прессе','Контакты']
const galleryArr = [
    {
        img:'/src/assets/gallery1.png'
    },
    {
        img:'/src/assets/gallery2.png'
    },
    {
        img:'/src/assets/gallery3.png'
    },
    {
        img:'/src/assets/gallery4.png'
    },
    ]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App listItems={data} mainList={list} galleryList={galleryArr}/>
  </StrictMode>,
)
