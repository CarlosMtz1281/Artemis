import * as React from 'react';

// -------------------------MUI IMPORTS----------------------------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuIcon from '@mui/icons-material/Menu';

//---------------- ICONS
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { navbarStyles } from './styles.tsx'

//------------------Navigate
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

//------------------Colors
import { colors } from '../../css/constants.tsx'




interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const NavbarItems = [
  {
    id: 0,
    icon: <AdminPanelSettingsIcon />,
    label: 'Panel de Control',
    route: 'PanelControl',
  },
  {
    id: 1,
    icon: <InventoryRoundedIcon />,
    label: 'Inventario',
    route: 'inventario',
  },
  {
    id: 2,
    icon: <MonetizationOnIcon />,
    label: 'Ingresos',
    route: 'ingresos',
  },
  {
    id: 3,
    icon: <ReceiptLongIcon />,
    label: 'Gastos',
    route: 'gastos',
  },
  {
    id: 4,
    icon: <AssessmentIcon />,
    label: 'Reporte',
    route: 'reporte',
  }

]


export default function ResponsiveDrawer(props: Props) {
  const navigate = useNavigate();
  const location = useLocation();




  const drawer = (
    <div>
      <Toolbar />
      <h1>LOGO</h1>
      {/* <Divider sx = {{ borderBottomWidth: 3,
      backgroundColor: 'rgb(255, 250, 224)' }}/> */}
      <List>
        {NavbarItems.map((item, index) => (
          <ListItem key={item.id}
          onClick={() => navigate(item.route)}
          sx={
            location.pathname === `/${item.route}`
              ? {
                backgroundColor: colors.lightGreen,
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px',
                width: '300px',


              } // Apply green background if the route matches
              : {} // Otherwise, don't apply any background
      }>
            <ListItemButton>
              <ListItemIcon sx = {navbarStyles.icons}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx = {navbarStyles.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
    <Drawer
      sx = {navbarStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      {drawer}
    </Drawer>
  );
}
