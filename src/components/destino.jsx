import React from 'react';

function destino(props){
    return <div>
        <h1>{props.destino}</h1>
        <p>{props.precio}€</p>
        <p>{props.descuento}% Discount</p>
        <img src={props.ruta_imagen} alt=""/>
        <p>{props.fecha_inicio}</p>
        <p>{props.fecha_fin}</p>
    </div>
}

export default destino;