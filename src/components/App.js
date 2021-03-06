import React, { Component } from 'react'
import '../css/App.css';
import AddApointsment from './AddApointsment';
import ListApoointsment from './ListApoointsment';
import SearchApointments from './SearchApointments';
import {findIndex, without} from 'lodash';


export default class App extends Component {
constructor(){
  super();
  this.state={
    myAppointments:[],
    formDisplay : false,
    orderBy: 'aptDate',
    orderDir: 'asc',
    queryString: '',
    lastIndex: 0
   };
  this.deleteAppointment = this.deleteAppointment.bind(this);
  this.toggleForm = this.toggleForm.bind(this);
  this.addApointsment = this.addApointsment.bind(this);
  this.changeOrder = this.changeOrder.bind(this);
  this.searchApts = this.searchApts.bind(this);
  this.updateInfo = this.updateInfo.bind(this);
}

toggleForm(){
  this.setState(
    {
      formDisplay: !this.state.formDisplay
    }
  )
}

addApointsment(apt){
  let tempApts = this.state.myAppointments;
  apt.aptId = this.state.lastIndex;
  tempApts.unshift(apt);

  this.setState({
    myAppointments: tempApts,
    lastIndex: this.state.lastIndex +1
  });
}

searchApts(query){
  this.setState({queryString: query});
  console.log(query)
}

changeOrder(order, dir){
  this.setState({
    orderBy: order,
    orderDir: dir
  })
}

updateInfo(name, value, id){
  let tempApts = this.state.myAppointments;
  let aptIndex = findIndex(this.state.myAppointments, {
    aptId : id
  });
tempApts[aptIndex][name] = value;
this.setState({
  myAppointments:tempApts
})

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

    let order;
    let filteredApts = this.state.myAppointments;
    if (this.state.orderDir === 'asc'){
      order = 1;
    }else {
      order = -1;
    }

    filteredApts = filteredApts.sort((a,b) => {
      if(
        a[this.state.orderBy].toLowerCase()<
        b[this.state.orderBy].toLowerCase()
      ){
        return -1 * order;
      }else{
        return 1* order;
      }
    }).filter(eachItem => {
      return(
        eachItem['petName']
        .toLowerCase()
        .includes(this.state.queryString.toLowerCase()) ||
        eachItem['ownerName']
        .toLowerCase()
        .includes(this.state.queryString.toLowerCase()) ||
        eachItem['aptNotes']
        .toLowerCase()
        .includes(this.state.queryString.toLowerCase()) 
        
      )
    });

return (
      <main className="page bg-white" id="petratings" >
          <div className="container" >
            <div className="row" >
              <div className="col-md-12 bg-white">
                <div className="container" >
                  <AddApointsment 
                  formDisplay= {this.state.formDisplay}
                  toggleForm = {this.toggleForm}
                  AddApointsment = {this.addApointsment}/>
                    <SearchApointments 
                    orderBy = {this.state.orderBy}
                    orderDir = {this.state.orderDir}
                    changeOrder = {this.changeOrder}
                    searchApts = {this.searchApts}
                    />
                    <ListApoointsment 
                     appointments ={filteredApts}
                    deleteAppointment = {this.deleteAppointment}
                    updateInfo={this.updateInfo}
                    /> 
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
  
  }
  



