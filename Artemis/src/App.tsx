import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResponsiveDrawer from './Components/NavBar/ResponsiveDrawer.tsx'
import './App.css'
import { Outlet } from "react-router-dom"
import Grid from '@mui/material/Grid';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid container>
      <ResponsiveDrawer />
      <Outlet />
    </Grid>
  )
}

export default App
