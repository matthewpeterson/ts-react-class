import React from 'react'
import Payee from '../data/Payee';
import { Component } from 'react'

interface PayeeDetailProps{
    payee: Payee;
}

export default class PayeeDetail extends Component<PayeeDetailProps> {
    render() {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.payee.payeeName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.payee.id}</h6>
                <p className="card-text">{JSON.stringify(this.props.payee)}</p>
            </div>
        </div>
        )
      }
}