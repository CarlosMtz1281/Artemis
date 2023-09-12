import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Change between pages with Navbar
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// Pages
import Inventario from './pages/Inventario/Inventario.tsx'
import Ingresos from './pages/Ingresos/Ingresos.tsx'
import Gastos from './pages/Gastos/Gastos.tsx'
import Reporte from './pages/Reporte/Reporte.tsx'
import Panel from './pages/PanelControl/PanelControl.tsx'

// For React 18
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path='PanelControl' element={<Panel />} /> // path
      <Route path="inventario" element={<Inventario />} />
      <Route path="ingresos" element={<Ingresos />} />
      <Route path="gastos" element={<Gastos />} />
      <Route path="reporte" element={<Reporte />} />
    </Route>
  </Routes>
</BrowserRouter>,
);
