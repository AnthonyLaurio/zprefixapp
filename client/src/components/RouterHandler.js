import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'


const RouterHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default RouterHandler