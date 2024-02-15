import { ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { theme } from './thme'
import { DetailsView } from './views/DetailsView/DetailsView'
import { HomeView } from './views/HomeView/HomeView'
import { LayoutView } from './views/LayoutView/LayoutView'
import { ManageView } from './views/ManageView/ManageView'

export const App = (): React.ReactElement => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LayoutView />}>
            <Route index element={<HomeView />} />
            <Route path="/manage" element={<ManageView />} />
            <Route path="/details" element={<DetailsView />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
