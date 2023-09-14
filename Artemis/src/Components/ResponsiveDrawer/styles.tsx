//-------------_Connstants

import { colors } from '../../css/constants.tsx'


export const navbarStyles = {
    selected: {
        color: colors.lightGreen,
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        borderBottomleftRadius: '0px',
        borderTopLeftRadius: '0px',
    },
    drawer: {
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: colors.blackGrey,
            color: colors.whiteTxt,
        },
        '& .Mui-selected': {
            color: colors.lightGreen,
        },
    },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '25px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '20px',
        }
    }
};