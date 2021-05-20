import React, { Component } from 'react'

export default class SearchApointments extends Component {
    render() {
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
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by
                  <span className="caret"></span>
                </button>
        
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#" className="dropdown-item d-flex justify-content-between" id="petName">
                    Pet Name
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <a className="dropdown-item d-flex justify-content-between" href="#" id="aptDate">
                    Date
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <a href="#" className="dropdown-item d-flex justify-content-between" id="ownerName">
                    Owner
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <div className="dropdown-divider" role="separator"></div>
        
                  <a
                    className="dropdown-item d-flex justify-content-between"
                    href="#"
                    id="asc"
                  >
                    Asc
                    <font-awesome-icon icon="check"/>
                  </a>
        
                  <a
                    className="dropdown-item d-flex justify-content-between"
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
