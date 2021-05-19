import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'moment'



export default class ListApoointsment extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item =>(
                     <div className="pet-item col media py-3" key={item.aptId}>
                     <div className="mr-3">
                       <button className="pet-delete btn btn-sm btn-danger" onClick="deleteAppointment()">
                           <FaTimes/>
                       </button>
                     </div>
         
                     <div className="pet-info media-body">
                       <div className="pet-head d-flex">
                         <span className="pet-name">{item.petName} {item.aptId}</span>
                         <span className="apt-date ml-auto">
                         {item.aptDate}
                             </span>
                       </div>
         
                       <div className="owner-name">
                         <span className="label-item">Owner: </span>
                         <span>{item.owner}</span>
                       </div>
                       <div className="apt-notes">{item.aptNotes}</div>
                     </div>
                   </div>
                ))}
           
        </div>
        )
    }
}
