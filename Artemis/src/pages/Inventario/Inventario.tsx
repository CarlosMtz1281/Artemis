import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import Grid from '@mui/material/Grid';

// Class of Data with labels of each COLUMN 
interface Data {
calories: number;
carbs: number;
dessert: string;
fat: number;
id: number;
protein: number;
}


interface ColumnData {
dataKey: keyof Data;
label: string;
numeric?: boolean;
width: number;
}

// Type of values each value in the ROW should have 
type Sample = [string, number, number, number, number];

// VALUES inside the table
const sample: readonly Sample[] = [
['Huevo', 159, 6.0, 24, 4.0],
['Cafe Negro', 237, 9.0, 37, 4.3],
['Harina', 262, 16.0, 24, 6.0],
['Leche', 305, 3.7, 67, 4.3],
];

/* 
 Para cambiar los valores del header se necesita el cambiar el dataKey en las funciones
    createData() - Parametros y return
    const ColumnData - dataKey necesita ser igual a los parametros del createData()
    
*/

// Create each ITEM
function createData(
id: number,
materiaprima: string,
calories: number,
fat: number,
carbs: number,
protein: number,
): Data {
return { id, materiaprima, calories, fat, carbs, protein };
}

// Fixed HEADER Values
const columns: ColumnData[] = [
{
    width: 200,
    label: 'Materia Prima',
    dataKey: 'materiaprima',
},
{
    width: 120,
    label: 'Calories\u00A0(g)',
    dataKey: 'calories',
    numeric: true,
},
{
    width: 120,
    label: 'Fat\u00A0(g)',
    dataKey: 'fat',
    numeric: true,
},
{
    width: 120,
    label: 'Carbs\u00A0(g)',
    dataKey: 'carbs',
    numeric: true,
},
{
    width: 120,
    label: 'Protein\u00A0(g)',
    dataKey: 'protein',
    numeric: true,
},
];

// Repeat random data from the Sample 
const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
const randomSelection = sample[Math.floor(Math.random() * sample.length)];
return createData(index, ...randomSelection);
});


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
            borderBottom: 1,
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


const Inventario = () => {
    return (
        <Grid item xs = {8}>
        <Paper style={{ height: 600, width: 1100 }}>
        <TableVirtuoso
            data={rows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
        />
        </Paper>
        </Grid>
    )
}

export default Inventario