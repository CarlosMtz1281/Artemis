import React, { useTransition } from 'react'

//MUI IMPORTS
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import Grid from '@mui/material/Grid';

//modal
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

//autocomplete
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//style
import {styles} from './styles.tsx'
import {colors} from '../../css/constants.tsx'

//---------------------------------------------TABLE CODE---------------------------------------------
// Class of Data with labels of each COLUMN
interface Data {
    id: number;
    estatus: string;
    numeroDeOrden: number;
    orden: string;
    ganancias: number

}


interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width: number;
}

// Type of values each value in the ROW should have
type Sample = [string, number, string, number];

// VALUES inside the table
const sample: readonly Sample[] = [
['Completado', 0o001,  'Pan con Huevo', 130],
['En Proceso', 0o123, 'Cold Brew', 0],
['Cancelado', 5283, 'Pain ou Chocolat', 0],
];

/*
 Para cambiar los valores del header se necesita el cambiar el dataKey en las funciones
    createData() - Parametros y return
    const ColumnData - dataKey necesita ser igual a los parametros del createData()

*/

// Create each ITEM
function createData(
id: number,
estatus: string,
numeroDeOrden: number,
orden: string,
ganancias: number,

): Data {
return { id, estatus, numeroDeOrden, orden, ganancias };
}

// Fixed HEADER Values
const columns: ColumnData[] = [
{
    width: 10,
    label: 'Estatus',
    dataKey: 'estatus',
    numeric: false,
},
{
    width: 12,
    label: 'Número de Orden\u00A0(#)',
    dataKey: 'numeroDeOrden',
    numeric: true,
},
{
    width: 12,
    label: 'Orden',
    dataKey: 'orden',
    numeric: false,
},
{
    width: 12,
    label: 'Ganancias',
    dataKey: 'ganancias',
    numeric: true,
},

];

/* Repeat random data from the Sample
const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
const randomSelection = sample[Math.floor(Math.random() * sample.length)];
return createData(index, ...randomSelection);
});
*/

//eliminar random
const rows: Data[] = sample.map((item, index) => createData(index, ...item));


const VirtuosoTableComponents: TableComponents<Data> = {
Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
)),
Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
),
TableHead,
TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
)),
};

// Header content
function fixedHeaderContent() {
return (
    <TableRow>
    {columns.map((column) => (
        <TableCell
        key={column.dataKey}
        variant="head"
        align={'center'}
        style={{ width: column.width }}
        sx={{
            backgroundColor: 'rgb(250,250,250)',
            fontWeight: 'bold',
            borderBottom: 2,
        }}
        >
        {column.label}
        </TableCell>
    ))}
    </TableRow>
);
}

// Put the row content in the table
function rowContent(_index: number, row: Data) {
return (
    <React.Fragment>
    {columns.map((column) => (
        <TableCell
        key={column.dataKey}
        align={column.numeric || false ? 'center' : 'left'}
        >
        {row[column.dataKey]}
        </TableCell>
    ))}
    </React.Fragment>
);
}
//---------------------------------------------MODAL CODE---------------------------------------------
const MenuModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
  };

  const ConfirmationModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
  };

const Transacciones = () => {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openConfirmation, setOpenConfirmation] = React.useState(false);
    const handleOpenMenu = () => setOpenMenu(true);
    const handleOpenConfirmation = () => setOpenConfirmation(true);
    const handleCloseMenu = () => setOpenMenu(false);
    const handleCloseConfirmation = () => setOpenConfirmation(false);
    const handleCloseAll = () => {setOpenMenu(false), setOpenConfirmation(false)};

    return (
        <div style={styles.component}>

            <div style={styles.topContainer}>
                <h1 style={styles.mainTitle}>Transacciones</h1>

                {/* Opens Order Menu Model */}
                <Button 
                    onClick={handleOpenMenu} 
                    variant = "contained" 
                    color="success" 
                    sx={{
                        display:"flex", 
                        marginLeft:"20vw", 
                        height:"5vh", 
                        marginTop:"7vh",
                        "&:active":{opacity:0.7},
                        "&:focus":{outline:'none'},
                        px: 3,
                        py: 2,
                    }}>
                        Agregar
                </Button>

                <Modal
                    open={openMenu}
                    onClose={handleCloseMenu}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >                              
                    {/* Modal Box */}                   
                    <Box sx={MenuModal}>

                        <Typography 
                            id="modal-modal-title" 
                            variant="h6" 
                            component="h2" 
                            fontWeight={'bold'} 
                            fontSize={'30px'}
                        >
                            Seleccionar Productos:
                        </Typography>
                        
                        {/* This button creates a confirmation prompt from the selected order */}
                        <div 
                            style={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop: "65vh",
                            }}
                        >

                        {/* Close MenuModal */}
                        <Button 
                            variant="contained" 
                            onClick={handleCloseMenu}
                            sx={{
                                display:"inline-block", 
                                buttonLayout: 'fixed',
                                backgroundColor: colors.darkRed,
                                "&:hover":{backgroundColor: "red"},
                                "&:active":{opacity:0.7},
                                "&:focus":{outline:'none'},
                                px: 3,
                                py: 2,
                            }}>
                                Cancelar Orden
                        </Button>

                        <Button 
                            variant="contained" 
                            onClick={handleOpenConfirmation}
                            sx={{
                                display:"inline-block", 
                                buttonLayout: 'fixed',
                                marginLeft:"auto", 
                                backgroundColor: colors.darkGreen,
                                "&:hover":{backgroundColor: "green"},
                                "&:active":{opacity:0.7},
                                "&:focus":{outline:'none'},
                                px: 3,
                                py: 2,
                            }}>
                                Completar Orden
                        </Button>

                        </div>

                        <Modal
                            open={openConfirmation}
                            onClose={handleCloseConfirmation}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            {/* Stylize */}
                            <Box sx={ConfirmationModal}>

                            <Typography 
                                id="modal-modal-title" 
                                variant="h6" 
                                component="h2" 
                                fontWeight={'bold'} 
                                fontSize={'25px'}
                                textAlign={'center'}
                            >
                                ¿Segure que quieres completar la orden?
                            </Typography>

                            {/* This div stores both confirmation buttons and styles them */}
                            <div 
                                style={{
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center",
                                    marginTop: "10vh",
                                    height:"10vh",
                                }}
                            >
                                {/* This button returns user to the previous Modal */}
                                <Button 
                                variant='contained' 
                                onClick={handleCloseConfirmation}
                                sx={{
                                    display:"inline-block", 
                                    buttonLayout: 'fixed', 
                                    backgroundColor: colors.darkRed,
                                    "&:hover":{backgroundColor: "red"},
                                    "&:active":{opacity:0.7},
                                    "&:focus":{outline:'none'},
                                    px: 3,
                                    py: 2,
                                }}>
                                    Cancelar
                                </Button>

                                {/* This button closes both Modals */}
                                <Button 
                                variant='contained' 
                                onClick={handleCloseAll}
                                sx={{
                                    display:"inline-block", 
                                    buttonLayout: 'fixed', 
                                    marginLeft:"10vw", 
                                    backgroundColor: colors.darkGreen,
                                    "&:hover":{backgroundColor: "green"},
                                    "&:active":{opacity:0.7},
                                    "&:focus":{outline:'none'},
                                    px: 3,
                                    py: 2,
                                }}>
                                    Confirmar
                                </Button>
                            </div>
                            </Box>
                        </Modal>

                    </Box>
                </Modal>

            </div>

            <div style={styles.container}>
                <Grid item xs = {8}>
                    <Paper style={{ height: 600, width: 600 }}>
                        <TableVirtuoso
                            data={rows}
                            components={VirtuosoTableComponents}
                            fixedHeaderContent={fixedHeaderContent}
                            itemContent={rowContent}
                        />
                    </Paper>
                </Grid>
            </div>




        </div>

    )
}

export default Transacciones