import React, { Component } from 'react'

export default class SearchApointments extends Component {

    state = {
        isOpen:false
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
              />
        
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  onClick= {this.toggleOpen}

                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by
                  <span className="caret"></span>
                </button>
        
                <div className={menuClass}>
                  <a href="#" 
                  className={
                        'dropdown-item d-flex justify-content-between' +
                        (this.props.orderBy === 'petName' ? 'active' : '')
                  }
                  id="petName">
                    Pet Name
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <a 
                     className={
                        'dropdown-item d-flex justify-content-between' +
                        (this.props.orderBy === 'aptDate' ? 'active' : '')
                  } 
                     href="#" 
                     id="aptDate">
                    Date
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <a
                    href="#" 
                    className={
                    'dropdown-item d-flex justify-content-between' +
                    (this.props.orderBy === 'ownerName' ? 'active' : '')
                     }
                    id="ownerName">
                    Owner
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <div className="dropdown-divider" role="separator"></div>
        
                  <a
                    className={
                        'dropdown-item d-flex justify-content-between' +
                        (this.props.orderDir === 'asc' ? 'active' : '')
                  } 
                    href="#"
                    id="asc"
                  >
                    Asc
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <a
                    className={
                        'dropdown-item d-flex justify-content-between' +
                        (this.props.orderDir === 'desc' ? 'active' : '')
                  } 
                    href="#"
                    id="desc"
                  >
                    Desc
                    <font-awesome-icon icon="check"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
