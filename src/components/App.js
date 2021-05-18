import React, { Component } from 'react'
import '../css/App.css';
import AddApointsment from './AddApointsment';
import ListApoointsment from './ListApoointsment';
import SearchApointments from './SearchApointments';


class App extends Component() {
  render(){
  return (
    <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
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

export default App;
