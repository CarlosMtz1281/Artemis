
// -------------------------MUI IMPORTS----------------------------------

import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

//---------------- ICONS ----------------------------------
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

//------------------ STYLES ----------------------------------
import { navbarStyles } from './styles.tsx'

//------------------ NAVIGATE ----------------------------------
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

//------------------COLORS ----------------------------------
import { colors } from '../../css/constants.tsx'

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
    label: 'Transacciones',
    route: 'transacciones',
  },
  {
    id: 3,
    icon: <ReceiptLongIcon />,
    label: 'Nueva Venta',
    route: 'nuevaVenta',
  },
  {
    id: 4,
    icon: <AssessmentIcon />,
    label: 'Reporte',
    route: 'reporte',
  }

]


export default function ResponsiveDrawer() {
  const navigate = useNavigate();
  const location = useLocation();

  const drawer = (

    <div>
      <Toolbar />
      <h1>LOGO</h1>
      {/* <Divider sx = {{ borderBottomWidth: 3,
      backgroundColor: 'rgb(255, 250, 224)' }}/> */}
      <List>
        {NavbarItems.map((item) => (
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

      <Button variant="contained" color="success"  sx={{marginTop: "70px"}}>Cerrar Sesion</Button>
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
