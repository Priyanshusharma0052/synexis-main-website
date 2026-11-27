import React from 'react'
import { createRoot } from 'react-dom/client'
import NewHome from './NewHome'
import SubPages from './SubPages'
import './new-home.css'
import './subpages.css'

const path = window.location.pathname

createRoot(document.getElementById('root')).render(
  path === '/' ? <NewHome /> : <SubPages />,
)
