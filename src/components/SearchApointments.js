import React, { Component } from 'react'

export default class SearchApointments extends Component {

    state = {
        isOpen:false,
       
    };

    toggleOpen = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
           
            <div className=" col-md-10 col-lg-8">
            <div className="input-group my-2">
              <input
                id="SearchApts"
                placeholder="Search"
                type="text"
                className="form-control"
                aria-label="Search Appointments"
                onClick= {e => this.props.searchApts(e.target.value)}
                
              />
        
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  onClick= {this.toggleOpen}

                  data-toggle="dropdown"
                  aria-haspopup="true"
                 
                >
                  Sort by
                  <span className="caret"></span>
                </button>
        
                <div className={menuClass}>
                  <button href="#" 
                  className={
                        'dropdown-item d-flex justify-content-between ' +
                        (this.props.orderBy === 'petName' ? 'active' : '')
                  }
                  onClick ={e => this.props.changeOrder('petName', this.props.orderDir)}
                  id="petName">
                    Pet Name
                    <font-awesome-icon icon="check"/>
                  </button>
        
                  <button 
                     className={
                        'dropdown-item d-flex justify-content-between ' +
                        (this.props.orderBy === 'aptDate' ? 'active' : '')
                  } 
                     onClick ={e => this.props.changeOrder('aptDate', this.props.orderDir)}
                     href="#" 
                     id="aptDate">
                    Date
                    <font-awesome-icon icon="check"/>
                  </button>
        
                  <button
                    href="#" 
                    className={
                    'dropdown-item d-flex justify-content-between ' +
                    (this.props.orderBy === 'ownerName' ? 'active' : '')
                     }
                     onClick ={e => this.props.changeOrder('ownerName', this.props.orderDir)}
                    id="ownerName">
                    Owner
                    <font-awesome-icon icon="check"/>
                  </button>
        
                  <div className="dropdown-divider" role="separator"></div>
        
                  <button
                    className={
                        'dropdown-item d-flex justify-content-between ' +
                        (this.props.orderDir === 'asc' ? 'active' : '')
                  } 
                  onClick ={e => this.props.changeOrder(this.props.orderBy, 'asc')}
                    href="#"
                    id="asc"
                  >
                    ascending
                    <font-awesome-icon icon="check"/>
                  </button>
        
                  <button
                    className={
                        'dropdown-item d-flex justify-content-between ' +
                        (this.props.orderDir === 'desc' ? 'active' : '')
                        
                  } 
                  onClick ={e => this.props.changeOrder(this.props.orderBy, 'desc')}
                    href="#"
                    id="desc"
                  >
                    descending
                    <font-awesome-icon icon="check"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
