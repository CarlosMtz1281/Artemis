import React from 'react'


import InventoryWidget from '../../Components/inventoryWidget/inventoryWidget.tsx'
const inventoryArray = [
    {
        id: 1,
        name: "Inventario 1",
        description: "Inventario de prueba 1",
    },
    {
        id: 2,
        name: "Inventario 2",
        description: "Inventario de prueba 2",
    }
]

// STYLE
import {styles} from '../PanelControl/styles.tsx'
import './PanelControl.css'

const PanelControl = () => {
    return (
        <div>
            <div style={styles.widgetInventarios}>
                <div style={{marginBottom: '2vh'}}/>
                {inventoryArray.map((item) => (
                    <InventoryWidget />
                ))}
            </div>
        </div>
    )
}

export default PanelControl