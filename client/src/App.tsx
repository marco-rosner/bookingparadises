import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { BookingProvider } from './components/BookingProvider/BookingProvider'
import { DetailsView, HomeView, LayoutView, ListView, ManageView } from './views'

import { theme } from './theme'
import './i18n.js'
import './App.css'

export const App = (): React.ReactElement => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <BookingProvider>
        <Routes>
          <Route path="/" element={<LayoutView />}>
            <Route index element={<HomeView />} />
            <Route path="/manage" element={<ManageView />} />
            <Route path="/bookings/:bookingId/places/:placeId" element={<ListView />} />
            <Route path="/bookings/:bookingId/properties/:propertyId" element={<DetailsView />} />
          </Route>
        </Routes>
      </BookingProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
