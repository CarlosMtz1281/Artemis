
import {style} from './NuevaVentaStyle'
import { itemData } from './DataVentas.js';
import CardVenta from '../../Components/VentaCard/CardVenta.js';

export default function NuevaVenta() {
    //map card venta function
    const mapCardVenta = itemData.map(item => {
        return (
            <CardVenta
                key={item.id}
                title={item.title}
                image={item.img}
            />
        )
    })



    return (
        <div>
            <h1 style={style.mainHeader}>Ventas</h1>

            <div style={style.menuWrap}>

                {mapCardVenta}

            </div>

        </div>
    )
}

