import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResponsiveDrawer from './Components/ResponsiveDrawer/ResponsiveDrawer.tsx'
import './App.css'
import { Outlet } from "react-router-dom"
import Grid from '@mui/material/Unstable_Grid2'


function App() {
  return (
    <Grid container spacing={2}>
        <ResponsiveDrawer />
        <Outlet />
    </Grid>
  )
}

export default App
