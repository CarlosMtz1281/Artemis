import {colors} from './../../css/constants'

export const style = {
    mainHeader:{
        color: colors.blackTxt,
        fontSize: '60px',
        display: 'flex',
        fontWeight: 'bold',
        position: 'fixed',
        top: '3vh',

    },
    menuWrap: {
        width: '90vw',
        height: '80vh',
        backgroundColor: colors.darkGreen,
        marginLeft: '18vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // Adjusted gridTemplateColumns
        gap: '10px',
    },

    image: {
        width: '25vw',
        height: '20vh',
        fit: 'crop',
        auto: 'format',
    }
}