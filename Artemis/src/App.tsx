import ResponsiveDrawer from './Components/NavBar/ResponsiveDrawer.tsx'
import './App.css'
import { Outlet } from "react-router-dom"
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <ResponsiveDrawer />
      <Outlet />
    </Grid>
  )
}

export default App
