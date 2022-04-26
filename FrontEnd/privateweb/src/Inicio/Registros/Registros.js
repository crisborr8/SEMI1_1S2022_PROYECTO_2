import React, { Component } from 'react'
import paises from '../Paises.json'
import './Registros.css'

class Registros extends Component {
  constructor(props){
      super(props);
      this.state  = {
          criminales: [
              {
                  id: 0,
                  nombre: 'Funalito a',
                  Peligrosidad: 'Minima',
                  Recompensa: '$$$',
                  Pais: '',
                  Visto: 'Lo he visto en tal lugar'
              },
          ]
      }
  }
  setTable(){
      this.setState({
        criminales: [
            {
                id: 0,
                foto: "https://www.smashbros.com/wiiu-3ds/images/character/toon_link/main.png",
                nombre: 'Funalito a',
                Peligrosidad: 'Minima',
                Recompensa: '$$$',
                Pais: '',
                Visto: 'Lo he visto en tal lugar'
            },
        ]
      })

  }
  componentDidMount(){
    this.setTable();
  }
  busqueda() {
    var input, filter, table, tr, td_, td, i, j, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) { 
        td_ = tr[i].getElementsByTagName("td");
        for (j = 0; j < td_.length; j++){
            td = td_[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                  break;
                } else {
                  tr[i].style.display = "none";
                }
              }
        }
    }
  }
  verCriminal(id){
      console.log(id);
  }
  render() {
      return(
          <>
            <input type="text" id="myInput" onKeyUp={() => this.busqueda()} placeholder="Buscar..."></input>
            <table class="table  table-sm table-striped table-dark"  id="myTable">
                <thead>
                <tr class="bg-primary">
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Peligrosidad</th>
                    <th>Recompensa</th>
                    <th>Ultimo pais visto</th>
                    <th>Visto en</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.criminales.map(crm => (
                        <tr onClick={() => this.verCriminal(crm.id)}>
                            <td><img  class="imagen" src={crm.foto}/></td>
                            <td>{crm.nombre}</td>
                            <td>{crm.Peligrosidad}</td>
                            <td>{crm.Recompensa}</td>
                            <td>{crm.Pais}</td>
                            <td>{crm.Visto}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </>
      )
  }
}

export default Registros;