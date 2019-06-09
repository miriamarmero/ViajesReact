import React, {Component} from 'react';
import axios from 'axios';
import Destino from './destino';

class Destinos extends Component{
    constructor(props){
        super(props);
        this.state = {
            destinos: [],
            destino:'',
            precio:'',
            descuento:'',
            ruta_imagen:'',
            fecha_inicio:'',
            fecha_fin:''
        }
        this.onDestinoChanges = this.onDestinoChanges.bind(this);
        this.onPrecioChanges = this.onPrecioChanges.bind(this);
        this.onDescuentoChanges = this.onDescuentoChanges.bind(this);
        this.onRutaImagenChanges = this.onRutaImagenChanges.bind(this);
        this.onFechaInicioChanges = this.onFechaInicioChanges.bind(this);
        this.onFechaFinChanges = this.onFechaFinChanges.bind(this);
        this.onAddDestino = this.onAddDestino.bind(this);
    }

    onDestinoChanges(event){
        this.setState({
            destino: event.target.value
        })
    }

    onPrecioChanges(event){
        this.setState({
            precio: event.target.value
        })
    }

    onDescuentoChanges(event){
        this.setState({
            descuento: event.target.value
        })
    }
    onRutaImagenChanges(event){
        this.setState({
            ruta_imagen: event.target.value
        })
    }

    onFechaInicioChanges(event){
        this.setState({
            fecha_inicio: event.target.value
        })
    }

    onFechaFinChanges(event){
        this.setState({
            fecha_fin: event.target.value
        })
    }

    onAddDestino(event){
        console.log(event)
        event.preventDefault()
        
        let destinoEnviar = {
            destino: this.state.destino,
            precio: this.state.precio,
            descuento: this.state.descuento,
            ruta_imagen: this.state.ruta_imagen,
            fecha_inicio: this.state.fecha_inicio,
            fecha_fin: this.state.fecha_fin
        }

        axios.post('http://localhost:3000/api/destinos', destinoEnviar)
        this.setState({
            destinos: [
               ...this.state.destinos 
            ],
            /* destino:'',
            precio:'',
            descuento:'',
            ruta_imagen:'',
            fecha_inicio:'',
            fecha_fin:'' */
        })
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/api/destinos')
        .then(response => {
            console.log(response);
            const destinos = response.data;
            this.setState({destinos: destinos});
        })
    }

    render() {
        return (
            <div>
                {this.state.destinos.map((destine, i) => <Destino key={i} {...destine}/>)}
                <form onSubmit={(e) =>this.onAddDestino(e)}>
                    <input name="destino" value={this.state.destino} onChange={(e) => this.onDestinoChanges(e)}/>
                    <input name="precio" value={this.state.precio} onChange={(e) => this.onPrecioChanges(e)}/>
                    <input name="descuento" value={this.state.descuento} onChange={(e) => this.onDescuentoChanges(e)}/>
                    <input name="ruta_imagen" value={this.state.ruta_imagen} onChange={(e) => this.onRutaImagenChanges(e)}/>
                    <input name="fecha_inicio" value={this.state.fecha_inicio} onChange={(e) => this.onFechaInicioChanges(e)}/>
                    <input name="fecha_fin" value={this.state.fecha_fin} onChange={(e) => this.onFechaFinChanges(e)}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


export default Destinos;