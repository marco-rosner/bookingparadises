import React from 'react'
import { Divider, Grid } from '@mui/material'

import { BookingsHeader } from './components/BookingsHeader/BookingsHeader'
import { BookingsBody } from './components/BookingsBody/BookingsBody'

import './App.css'


export const App = (): React.ReactElement => {

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minWidth: '100vw', background: '#40caa1' }}
      >
        <BookingsHeader />
      </Grid>
      <Divider light sx={{ bgcolor: 'white', borderWidth: 1 }}/>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minWidth: '100vw', background: 'lightgray' }}
      >
        <BookingsBody />
      </Grid>
    </>
  )
}

export default App
