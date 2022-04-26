import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import paises from '../Paises.json'
import '../Form.css'
var getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

class Subir extends Component {
    constructor(props){
        super(props);
        this.state = { 
            pictures: [],
            nombre:"",
            recompensa:"",
            delito:""
        };
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
    componentDidMount(){
        this.populatePais();
    }
    makeBase64(files){
        var params = []
        for(var i = 0; i < files.length; i++){
            var file = files[i];
            getBase64(file).then(result => {
                result = result.split(",")[1]
                params.push(result)
            })
            .catch(err => {
                console.log(err);
            });
        }
        return params
    }
    render() {
        const subirPerfil = (event) => {
            event.preventDefault();
            console.log("subiendo")
            console.log(this.makeBase64(this.state.pictures))
            console.log(this.state.nombre)
            console.log(document.getElementById('peligrosidad').value)
            console.log(this.state.recompensa)
            console.log(document.getElementById('pais').value)
            console.log(this.state.delito)
        }
        const onDrop = picture => {
            this.setState({pictures:picture})
        };
        return(
            <>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <section class="get-in-touch">
                    <form class="contact-form row" onSubmit={subirPerfil}>
                        <div class="form-field col-lg-6">
                            <input value={this.state.nombre} onChange={(e) => this.setState({nombre: e.target.value})} id="name" class="input-text js-input" type="text" required/>
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
                            <input value={this.state.recompensa} onChange={(e) => this.setState({recompensa: e.target.value})}  id="number" class="input-text js-input" type="text" required/>
                            <label class="label" for="number">Recompensa</label>
                        </div>
                        <div class="form-field col-lg-6 ">
                            <select id="pais" class="input-text js-input" required="required" data-error="Seleccione una opcion">
                                <option value="" selected disabled>-- Ultimo pais visto --</option>
                            </select> 
                        </div>
                        <div class="form-field col-lg-12">
                            <input value={this.state.delito} onChange={(e) => this.setState({delito: e.target.value})}  id="message" class="input-text js-input" type="text" required/>
                            <label class="label" for="message">Delito</label>
                        </div>
                        <ImageUploader
                            style={{ maxWidth: '500px', margin: "20px auto" }}
                            withPreview={true}
                            withIcon={true}
                            buttonText='Subir imagen'
                            onChange={onDrop}
                            imgExtension={['.jpg', '.jpeg', '.png']}
                            maxFileSize={5242880}
                            fileSizeError='El archivo es muy grande'
                            fileTypeError='Archivo no soportado'
                        />
                        <div class="form-field col-lg-12">
                            <input class="submit-btn" type="submit" value="Subir"/>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default Subir;
