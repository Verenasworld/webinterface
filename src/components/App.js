import React, { Component } from 'react'
import '../css/App.css';
import AddApointsment from './AddApointsment';
import ListApoointsment from './ListApoointsment';
import SearchApointments from './SearchApointments';


export default class App extends Component {
constructor(){
  super();
  this.state={
    myAppointments:[],
    lastIndex: 0
  }
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
      <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">

                  <AddApointsment></AddApointsment>
                  
                    <SearchApointments></SearchApointments>
                    <ListApoointsment appointments ={this.state.myAppointments}></ListApoointsment>
                 
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
  
  }
  



