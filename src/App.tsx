import React from 'react'
import { Grid } from '@mui/material'

import { BookingsHeader } from './components/BookingsHeader/BookingsHeader'
import { BookingsBody } from './components/BookingsBody/BookingsBody'

import './App.css'


export const App = (): React.ReactElement => {

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '50vh' }}
      >
        <BookingsHeader />
        <BookingsBody />
      </Grid>
  )
}

export default App
