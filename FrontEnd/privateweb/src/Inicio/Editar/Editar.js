import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import paises from '../Paises.json'
import '../Form.css'

class Editar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            pictures: [],
            criminales: [
                {id: 0, nombre:'Juan'},
                {id: 1, nombre:'Jua23n'},
                {id: 2, nombre:'Juasdfaan'},
                {id: 3, nombre:'werwerw'},
            ] 
        };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }
    populatePais(){
        var list = paises;
        var sel = document.getElementById('pais');
        for(var i = 0; i < list.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = list[i]['name'];
            opt.value = list[i]['code'];
            sel.appendChild(opt);
        }
    }
    populateCriminal(){
        var list = this.state.criminales;
        var sel = document.getElementById('criminal');
        for(var i = 0; i < list.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = list[i]['nombre'];
            opt.value = list[i]['id'];
            sel.appendChild(opt);
        }
    }
    componentDidMount(){
        this.populatePais();
        this.populateCriminal();
    }
    seleccionCriminal(){
        var valor = document.getElementById("criminal").value;
        console.log(valor);
    }
    render() {
        return(
            <>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <section class="get-in-touch">
                    <form class="contact-form row">
                        <div class="form-field col-lg-12 ">
                            <select id="criminal" class="input-text js-input" required="required" onChange={() => this.seleccionCriminal()}>
                                <option value="" selected disabled>-- Criminal --</option>
                            </select> 
                        </div>
                    </form>
                </section>

                <section class="get-in-touch">
                    <form class="contact-form row">
                        <div class="form-field col-lg-6">
                            <input id="name" class="input-text js-input" type="text" required/>
                            <label class="label" for="name">Nombre</label>
                        </div>
                        <div class="form-field col-lg-6 ">
                            <select id="peligrosidad" class="input-text js-input" required="required" data-error="Seleccione una opcion">
                                <option value="" selected disabled>-- Peligrosidad --</option>
                                <option value="1">Minima</option>
                                <option value="2">Baja</option>
                                <option value="3">Media</option>
                                <option value="4">Alta</option>
                                <option value="5">Extrema</option>
                            </select> 
                        </div>
                        <div class="form-field col-lg-6 ">
                            <input id="number" class="input-text js-input" type="text" required/>
                            <label class="label" for="number">Recompensa</label>
                        </div>
                        <div class="form-field col-lg-6 ">
                            <select id="pais" class="input-text js-input" required="required" data-error="Seleccione una opcion">
                                <option value="" selected disabled>-- Ultimo pais visto --</option>
                            </select> 
                        </div>
                        <div class="form-field col-lg-12">
                            <input id="message" class="input-text js-input" type="text" required/>
                            <label class="label" for="message">Delito</label>
                        </div>
                        <ImageUploader
                            style={{ maxWidth: '500px', margin: "20px auto" }}
                            withPreview={true}
                            withIcon={true}
                            buttonText='Subir imagen'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.jpeg', '.png']}
                            maxFileSize={5242880}
                            fileSizeError='El archivo es muy grande'
                            fileTypeError='Archivo no soportado'
                        />
                        <div class="form-field col-lg-12">
                            <input class="submit-btn" type="submit" value="Editar"/>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default Editar;