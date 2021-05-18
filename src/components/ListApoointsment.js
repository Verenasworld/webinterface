import React, { Component } from 'react'

export default class ListApoointsment extends Component {
    render() {

        const listItem = this.props.appointments.map(item => (
            <div>
              <div>{item.petName}</div>
              <div>{item.ownerName}</div>
            </div>
          ));
        return (
            <div>
                {listItem}
            </div>
        )
    }
}
