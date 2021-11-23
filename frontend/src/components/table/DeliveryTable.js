import React from 'react';
import '../../App.css';

const DeliveryTable = props => (
  
    <table border = "1" className="responsive-table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Peso</th>
                <th>Ações</th>
            </tr>
        </thead>
    <tbody>
        {
            props.deliveries.length > 0 ? (
                props.deliveries.map (delivery => (

                    <tr key={delivery.id}>
                        <td>{delivery.nome}</td>
                        <td>{delivery.endereco}</td>
                        <td>{delivery.telefone}</td>
                        <td>{delivery.peso}Kg</td>
                        <td className="left">
                            <button 
                                className="waves-effect waves-light" 
                                onClick={() => props.deleteDelivery(delivery.id)}>
                                Excluir
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.deliveries[0]} 0 delivery</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default DeliveryTable;