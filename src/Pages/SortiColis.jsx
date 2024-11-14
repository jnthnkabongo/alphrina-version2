import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postDepenseColis } from "../actions/ColisAction";

const SortiColis = () => {
    const dispatch = useDispatch();
    const [formDataDepense, setFormdata] = useState({
        nom: '',
        montant: '',
        motif: ''
    });

    const [loading, setloading] = useState(false);
    let navigate = useNavigate();

    const handleChange = (e) => {
        setFormdata({
            ...formDataDepense,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setloading(true);
        dispatch(postDepenseColis(formDataDepense))
            .then(() => {
                setFormdata({
                    nom: '',
                    montant: '',
                    motif: ''
                });
            })
            .catch(() => {

            })
            .finally(() => {
                setloading(false);
        });
    };
    return (
      <>
          <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Faire un enregistrement d'une depnse</h5>
                    <div className="card-body">

                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings"  method="POST" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">NOM AGENT</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="nom"
                                        value={formDataDepense.nom}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="firstName" className="form-label">MONTANT</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="firstName"
                                        name="montant"
                                        value={formDataDepense.montant}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="number" className="form-label">MOTIF</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        name="motif"
                                        value={formDataDepense.motif}
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                </div>
                               
                            </div>
                            
                            <div className="mt-2">
                                {loading ? (
                                    <center>
                                    <div className="spinner-border" role="status"></div>
                                    </center>
                                ) : (
                                    <button type="submit" className="btn btn-primary me-2"><i className='bx bx-plus'></i> Ajouter</button>
                                )}
                                <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                                </div>
                        </form>
                    </div>
                </div>
        </div>
      </>
    )
}

export default SortiColis;