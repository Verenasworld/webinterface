import React, { Component } from 'react'
import '../css/App.css';
import AddApointsment from './AddApointsment';
import ListApoointsment from './ListApoointsment';
import SearchApointments from './SearchApointments';


export default class App extends Component {
constructor(){
  super();
  this.state={
    myLocation: 'Vienna'
  }
}

  render(){
    return (
      <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  {this.state.myLocation}
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
  



