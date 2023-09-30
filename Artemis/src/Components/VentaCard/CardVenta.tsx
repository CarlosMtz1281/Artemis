import {style} from './styleCard'

export default function CardVenta(props) {
    return (
        <div style={style.container}>
            <h1>{props.title}</h1>

        </div>
    )
}