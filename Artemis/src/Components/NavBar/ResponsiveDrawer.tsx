import {Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

import { navbarStyles } from './styles.tsx'

import { useNavigate } from "react-router-dom";

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
  },
  {
    id: 4,
    icon: <SettingsIcon />,
    label:'Configuracion',
    route: 'configuracion',
  }
]

export default function ResponsiveDrawer(){
  const navigate = useNavigate();
  const drawer = (
    <div>

      <Toolbar />
      <h1>LOGO</h1>
      <Divider sx = {{ borderBottomWidth: 3, backgroundColor: 'rgb(255, 250, 224)' }}/>
      <List>
        {NavbarItems.map((item) => (
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
