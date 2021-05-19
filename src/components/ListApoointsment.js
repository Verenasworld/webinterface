import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';



export default class ListApoointsment extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item =>(
                     <div className="pet-item col media py-3" key={item.aptId}>
                     <div className="mr-3">
                       <button className="pet-delete btn btn-sm btn-danger" onClick= {() => this.props.deleteAppointment(item)}>
                           <FaTimes/>
                       </button>
                     </div>
         
                     <div className="pet-info media-body">
                       <div className="pet-head d-flex">
                         <span className="pet-name">{item.petName} {item.aptId}</span>
                         <span className="apt-date ml-auto">
                           <Moment
                             date= {item.aptDate}
                             parse= "YYYY-MM-dd hh:mm"
                        
                             format= "DD.MM.YYYY hh:mm"
                           />
                        
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
