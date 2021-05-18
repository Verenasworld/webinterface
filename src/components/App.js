import React, { Component } from 'react'
import '../css/App.css';
import AddApointsment from './AddApointsment';
import ListApoointsment from './ListApoointsment';
import SearchApointments from './SearchApointments';


export default class App extends Component {
constructor(){
  super();
  this.state={
    myAppointments:[]
  }
}

// lebenszyklua methode wird ausgeführt nachdem das Dom gerendert wurde !! ( externe daten einfügen)
componentDidMount(){
  fetch('./data.json')
  //promiss 
  .then(response => response.json())
  .then(result => {
    const apts = result.map(item => {
      return item;
    })
    //status ändern
    this.setState({
      myAppointments: apts
    })
  })
}

  render(){

        const listItems = this.state.myAppointments.map(item => (
      <div>
        <div>{item.petName}</div>
        <div>
          {item.ownerName}</div>

    const listItems = this.state.myAppointments.map(item => (
      <div>
        <div>{item.petName}</div>
        <div>{item.ownerName}</div>
      </div>
    ));
    return (
      <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">

                  {listItems}

            
                 <AddApointsment></AddApointsment>
                   <ListApoointsment></ListApoointsment>
                    <SearchApointments></SearchApointments>
                 
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
  
  }
  



