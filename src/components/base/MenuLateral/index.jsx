import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Container, Divider, Grid, Stack } from '@mui/material';

export const MenuLateral = () => (
  <Container sx={{ background: 'lightgray' }}>
    <Stack direction='column'>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Agendamentos" sx={{ color: 'black' }} />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Serviços" sx={{ color: 'black' }} />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="placeholder" sx={{ color: 'black' }} />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="placeholder" sx={{ color: 'black' }} />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="placeholder" sx={{ color: 'black' }} />
      </ListItemButton>
    </Stack>
  </Container>
);