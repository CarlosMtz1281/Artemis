import React from 'react'

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
import {styles} from './style.tsx'

//---------------------------------------------TABLE CODE---------------------------------------------
// Class of Data with labels of each COLUMN
interface Data {
    id: number;
    nombre: string;
    cantidad: number;
    costoPorUni: number;

}


interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width: number;
}

// Type of values each value in the ROW should have
type Sample = [string, number, number];

// VALUES inside the table
const sample: readonly Sample[] = [
['Granos Cafe', 3000,  1],
['Azucar', 2000, 0.5],
['Leche', 1000, 1],
];

/*
 Para cambiar los valores del header se necesita el cambiar el dataKey en las funciones
    createData() - Parametros y return
    const ColumnData - dataKey necesita ser igual a los parametros del createData()

*/

// Create each ITEM
function createData(
id: number,
nombre: string,
cantidad: number,

costoPorUni: number,
): Data {
return { id, nombre, cantidad, costoPorUni };
}

// Fixed HEADER Values
const columns: ColumnData[] = [
{
    width: 10,
    label: 'Nombre',
    dataKey: 'nombre',
    numeric: false,
},
{
    width: 12,
    label: 'Cantidad Disponible\u00A0(g)',
    dataKey: 'cantidad',
    numeric: true,
},
{
    width: 12,
    label: 'Costo Por Unidad\u00A0(g)',
    dataKey: 'costoPorUni',
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
        align={column.numeric || false ? 'right' : 'left'}
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
        align={column.numeric || false ? 'right' : 'left'}
        >
        {row[column.dataKey]}
        </TableCell>
    ))}
    </React.Fragment>
);
}
//---------------------------------------------MODAL CODE---------------------------------------------
const ModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  //const para autocomplete

  const ejemplosInv =[{label:"Huevo"},{label:"Leche"},{label:"Azucar"},{label:"Harina"},{label:"Granos de cafe"},{label:"Sal"}]

const Inventario = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={styles.component}>

            <div style={styles.topContainer}>
                <h1 style={styles.mainTitle}>Inventario</h1>
                <Button onClick={handleOpen} variant = "contained" color="success" sx={{display:"flex", marginLeft:"20vw", height:"5vh", marginTop:"7vh"}}>Agregar</Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={ModalStyle}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Agregar Cantidad a Inventario
                        </Typography>

                        <Typography sx={{marginTop:"20px", marginBottom:"15px"}}>Nombre</Typography>

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={ejemplosInv}
                            sx={{ width: 200, display:"inline-block", marginRight:"20px"}}
                            renderInput={(params) => <TextField {...params} label="Producto" />}
                            />
                          <TextField
                            id="outlined-number"
                            label="Cantidad"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />

                        <Button variant="contained" sx={{display:"block", marginLeft:"450px"}} onClick={handleClose}>Agregar a Inventario</Button>

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

export default Inventario