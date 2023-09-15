import React from 'react'

// Material UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import {colors} from '../../css/constants'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#D3D3D3',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.whiteTxt,
  minWidth: "56vw",
  minHeight: "40vh",
}));

// STYLE
import {styles} from './styles'
import './PanelControl.css'

const PanelControl = () => {
    return (
        <>
        <Box> 
            <Grid>
                <Item>
                    wkjenfwkjefnekwjf
                </Item>
            </Grid>
            <Grid>
                <Item>
                    ernekrfjnerkjn
                </Item>
            </Grid>
        </Box>
        </>
    )
}

export default PanelControl