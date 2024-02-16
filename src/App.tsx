import React from 'react'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DetailsView } from './views/DetailsView/DetailsView'
import { HomeView } from './views/HomeView/HomeView'
import { LayoutView } from './views/LayoutView/LayoutView'
import { ManageView } from './views/ManageView/ManageView'

import { BookingProvider } from './components/BookingProvider/BookingProvider'

import { theme } from './thme'
import './App.css'

export const App = (): React.ReactElement => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BookingProvider>
          <Routes>
            <Route path="/" element={<LayoutView />}>
              <Route index element={<HomeView />} />
              <Route path="/booking/:id/place/:placeId" element={<ManageView />} />
              <Route path="/booking/:id/details" element={<DetailsView />} />
              <Route path="/details/:id" element={<DetailsView />} />
              <Route path="/manage" element={<ManageView />} />
            </Route>
          </Routes>
        </BookingProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
