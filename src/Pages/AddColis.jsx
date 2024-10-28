import { React, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AddColis = () => {
    const [inputListNew, setInputListNew] = useState([
        { nom_colis: "", nombre_total_colis:"", prix_unitaire: "", kilo_colis: "", prix_total: ""},
    ]);
    
    const handleAddClick = () => {
        setInputListNew([...inputListNew, { nom_colis: "", nombre_total_colis:"", prix_unitaire:"", kilo_colis:"", prix_total:""}]);
    }
    
    const handleInputChange = (index, name, value) => {
        const list = [...inputListNew];
        list [index][name] = value;
        setInputListNew(list);
    }
    
    
    // const colis = inputListNew.map((item) => ({
    //     nom_colis: item.colis,
    //     nombre_total_colis: item.colis,
    //     prix_unitaire: item.colis,
    //     kilo_colis: item.colis,
    //     prix_total: item.colis
    // }));

    return (
      <>
        <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Faire un enregistrement d'un colis</h5>
                    <div className="card-body">

                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings"  method="POST" >
                            <div className="row">
                                <div className="mb-3 col-md-12">
                                    <label htmlFor="timeZones" className="form-label">NOM AGENT</label>
                                    <input type="text" className="form-control" />
                                </div>
                                {inputListNew.map((x, i) => {
                                    return (
                                        <>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="firstName" className="form-label">NOM COLIS</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            autoFocus
                                        />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="number" className="form-label">NOMBRE TOTAL COLIS</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="email"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="organization" className="form-label">PRIX UNITAIRE</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="organization"
                                            name="organization"
                                            
                                        />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="organization" className="form-label">KILO COLIS</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="organization"
                                            name="organization"
                                            
                                        />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label className="form-label" htmlFor="phoneNumber">PRIX TOTAL</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="text"
                                                id=""
                                                name="prix_total"
                                                className="form-control"
                                                placeholder=""
                                                value={x.prix_total}
                                                onChange={(e) => handleInputChange(i, "prix_total", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                
                                    <div className="mb-3 col-md-2">
                                        <label className="form-label" htmlFor="phoneNumber">AJOUTER COLIS</label>
                                        <div className="input-group input-group-merge">
                                        <div className="col-md-2">
                                            {inputListNew.length - 1 === i && (
                                            <button className="ml10 btn btn-primary" onClick={ handleAddClick}> +</button>
                                            )}
                                        </div>
                                        </div>
                                    </div>
                                    </>
                                    );
                                })}
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="address" className="form-label">MONTANT A PAYER</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="address" className="form-label">TOTAL KILOS</label>
                                    <input type="number" className="form-control"/>
                                </div>
                               
                            </div>
                             
                            <div className="mt-10">
                                <button type="submit" className="btn btn-primary me-2">Soumettre</button>
                                <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
      </>
    );
};

export default AddColis;