import React, { Component } from 'react'

class Fotos extends Component {
  constructor(props){
        super(props);
        this.state = {
            criminales: []
        };
  }
  componentDidMount(){
    var crm = [
      {
        foto: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
        nombre: 'Red paint cup',
        delito: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        ubicacion: 'Guatemala',
        danger1: 'badge-danger',
        danger2: 'Extrema'
      },
      {
        foto: 'https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg',
        nombre: 'Red paint cup',
        delito: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        ubicacion: 'Guatemala',
        danger1: 'badge-warning',
        danger2: 'Alta'
      },
      {
        foto: 'https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg',
        nombre: 'Red paint cup',
        delito: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        ubicacion: 'Guatemala',
        danger1: 'badge-secondary',
        danger2: 'Media'
      },
      {
        foto: 'https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg',
        nombre: 'Red paint cup',
        delito: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        ubicacion: 'Guatemala',
        danger1: 'badge-info',
        danger2: 'Baja'
      }
    ]
    this.setState({criminales: crm})
  }
  render(){
    return (
      <>
        
        <head>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          </head>

        <div class="container-fluid">
  <div class="px-lg-5">


    <div class="row">
      <div class="col-lg-12 mx-auto">
        <div class="text-white p-5 shadow-sm rounded banner">
          <h1 class="display-4">Criminales buscados</h1>
          <p class="lead">Bootstrap photogallery snippet.</p>
        </div>
      </div>
    </div>
    

    <div class="row">
    
      {this.state.criminales.map(crm => (
        <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div class="bg-white rounded shadow-sm"><img src={crm.foto} alt="" class="img-fluid card-img-top"/>
            <div class="p-4">
              <h5> <a href="#" class="text-dark">{crm.nombre}</a></h5>
              <p class="small text-muted mb-0">{crm.delito}</p>
              <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p class="small mb-0"><i class="fa fa-map-marker mr-2"></i><span class="font-weight-bold">{crm.ubicacion}</span></p>
                <div class={"badge " + crm.danger1 + " px-3 rounded-pill font-weight-normal"}>{crm.danger2}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



      </>
    );
  }
}

export default Fotos;
