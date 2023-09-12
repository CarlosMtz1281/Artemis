import * as React from 'react';
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

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

import { navbarStyles } from './styles.tsx'

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

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
    icon: <InventoryRoundedIcon />,
    label: 'Inventario',
    route: 'inventario',
  },
  {
    id: 1,
    icon: <MonetizationOnIcon />,
    label: 'Ingresos',
    route: 'ingresos',
  },
  {
    id: 2,
    icon: <ReceiptLongIcon />,
    label: 'Gastos',
    route: 'gastos',
  },
  {
    id: 3,
    icon: <AssessmentIcon />,
    label: 'Reporte',
    route: 'reporte',
  }

]


export default function ResponsiveDrawer(props: Props) {
  const navigate = useNavigate();

 

  const drawer = (
    <div>
      <Toolbar />
      <h1>H&O</h1>
      <Divider sx = {{ borderBottomWidth: 3,
      backgroundColor: 'rgb(255, 250, 224)' }}/>
      <List>
        {NavbarItems.map((item, index) => (
          <ListItem key={item.id} onClick={() => navigate(item.route)}>
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
