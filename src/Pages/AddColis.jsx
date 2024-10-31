import { React, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddColis = () => {
    const dispatch = useDispatch();
    const form = useRef();

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
    
    const handleSubmitColis = async (e) => {
        e.preventdefault();
        setloading(true);
    
        const colisData = {
            nom_colis : form.current["nom_colis"].value,
            nombre_total_colis : form.current["nombre_total_colis"].value,
            prix_unitaire : form.current["prix_unitaire"].value,
            kilo_colis : form.current["kilo_colis"].value,
            prix_total : form.current["prix_total"].value,
        };
        
        const colis = inputListNew.map((item) => ({
            nom_colis: item.colis,
            nombre_total_colis: item.colis,
            prix_unitaire: item.colis,
            kilo_colis: item.colis,
            prix_total: item.colis
        }));

        const FormData = {
            ...colisData,
            colis
        };
        console.log(inputListNew)

        try {
            dispatch((FormData));
            Swal.fire({
                icon: "success",
                title: "L'operation a reussi avec succès",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: `${error.response.data.message}`,
                text: "Veuillez verifier vos infor,qtions de connexion",
            });
            throw error;
        }
    }
    return (
      <>
        <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Faire un enregistrement d'un colis</h5>
                    <div className="card-body">

                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form 
                            id="formAccountSettings"  
                            method="POST" 
                            
                            onSubmit={handleSubmitColis}
                        >
                            <div className="row">
                                <div className="mb-3 col-md-12">
                                    <label htmlFor="timeZones" className="form-label">NOM AGENT</label>
                                    <input type="text" placeholder="Alphonsine Banongo" className="form-control" />
                                </div>
                                {inputListNew.map((x, i) => {
                                    return (
                                        <>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="firstName" className="form-label">NOM COLIS</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id=""
                                            name=""
                                            placeholder="Iphone 14 Pro Max"
                                            value={x.nom_colis}
                                            onChange={(e) => handleInputChange(i, "nom_colis", e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="number" className="form-label">NOMBRE TOTAL COLIS</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            id=""
                                            placeholder="03"
                                            value={x.nombre_total_colis}
                                            onChange={(e) => handleInputChange(i, "nombre_total_colis", e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="organization" className="form-label">PRIX UNITAIRE</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id=""
                                            name=""
                                            placeholder="10 $"
                                            value={x.prix_unitaire}
                                            onChange={(e) => handleInputChange(i, "prix_unitaire", e.target.value)}
                                            
                                        />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="organization" className="form-label">KILO COLIS</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="kilo_colis"
                                            name="kilo_colis"
                                            placeholder="18 Kg"
                                            value={x.kilo_colis}
                                            onChange={(e) => handleInputChange(i, "kilo_colis", e.target.value)}
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
                                                placeholder="300 $"
                                                value={x.prix_total}
                                                onChange={(e) => handleInputChange(i, "prix_total", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                
                                    <div className="mb-3 col-md-2">
                                        <label className="form-label" htmlFor="phoneNumber"></label>
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