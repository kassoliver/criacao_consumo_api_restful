import React, { Component } from 'react';
import qs from 'querystring';

import api from '../services/api';

import DeliveryTable from '../components/table/DeliveryTable';
import AddDeliveryForm from '../components/forms/AddDeliveryForm';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deliveries: [],
            currentDelivery: { id: null, nome: '', peso: '' , endereco: '', telefone: ''},
            editing: false
        }
    }

    componentDidMount() {
        this.refreshDeliveryTable();
    }

    refreshDeliveryTable() {
        this.deliveriesData = api.get('GET/deliveries')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    deliveries: data.data,
                    setDeliveries: data.data
                });
            });
    }

    addDelivery = delivery => {

        api.post('POST/deliveries', qs.stringify(delivery))
            .then(res => {
                console.log(res);
                this.refreshDeliveryTable();
            });
    };


    deleteDelivery = id => {

        api.delete(`DELETE/deliveries/${id}`)
            .then(res => {
                this.refreshDeliveryTable();
            });
    };


    editRow = delivery => {

        this.setState({ 
            currentDelivery: { id: delivery.id, nome: delivery.nome, peso: delivery.peso, endereco: delivery.endereco, telefone: delivery.telefone }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { deliveries } = this.state;

        return (
            <div className="container" id="container">
                    
                <div className="row">
    
                    {
                        (
                            <div className="col s12 l4" id="cadastro-delivery">
                                <AddDeliveryForm addDelivery={this.addDelivery} />
                            </div>
                        )
                    }
                    
                    <div className="col s12 l8" id="lista-deliveries">
                        <DeliveryTable deliveries={deliveries} editRow={this.editRow} deleteDelivery={this.deleteDelivery} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;
