import React, { useState } from 'react';

const AddDeliveryForm = props => {

    const initialFormState = { nome: '', peso: '', endereco: '', telefone: ''};
    const [delivery, setDelivery] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setDelivery({ ...delivery, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!delivery.nome || !delivery.peso || !delivery.endereco || !delivery.telefone) return;

        props.addDelivery(delivery);
        setDelivery(initialFormState);

    };
     
   
    const resetForm = () => {
        setDelivery({nome: '', peso: '', endereco: '', telefone: ''});
    };
      
    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id="name" 
                            name="nome" 
                            value={delivery.nome}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="nome">Nome</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="number" 
                            name="peso" 
                            value={delivery.peso}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="peso">Peso em KG</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="endereco" 
                            value={delivery.endereco}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="endereco">Endereço</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="telefone" 
                            value={delivery.telefone}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <button className="waves-effect waves-light btn" id="cadastrar">Cadastrar</button>
                    </div>
                    <div className="input-field col s12">
                        <button className="waves-effect waves-light btn red darken-4" id="limpar" onClick={ resetForm }>Limpar</button>
                    </div>
                </div>
                
            </form>
            
        </div>
    );
};

export default AddDeliveryForm;
