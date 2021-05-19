import React, { Component } from 'react'
import '../css/App.css';
import AddApointsment from './AddApointsment';
import ListApoointsment from './ListApoointsment';
import SearchApointments from './SearchApointments';
import {without} from 'lodash';


export default class App extends Component {
constructor(){
  super();
  this.state={
    myAppointments:[],
    lastIndex: 0
   
  };
  this.deleteAppointment = this.deleteAppointment.bind(this);
}
deleteAppointment(apt) {
  let tempApts = this.state.myAppointments;
  tempApts = without(tempApts, apt);

  this.setState({
    myAppointments: tempApts
  })
}

// lebenszyklua methode wird ausgeführt nachdem das Dom gerendert wurde !! ( externe daten einfügen)
componentDidMount(){
  fetch('./data.json')
 
  .then(response => response.json())
  .then(result => {
    const apts = result.map(item => {
      item.aptId = this.state.lastIndex;
      this.setState({lastIndex: this.state.lastIndex +1})
      return item;
    })
  
    this.setState({
      myAppointments: apts
    })
  })
}

  render(){

    return (
      <main className="page bg-white" id="petratings" >
          <div className="container" >
            <div className="row" id="test">
              <div className="col-md-12 bg-white">
                <div className="container" >
                  <AddApointsment />
                    <SearchApointments/>
                    <ListApoointsment  appointments ={this.state.myAppointments}
                    deleteAppointment = {this.deleteAppointment}/> 
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
  
  }
  



