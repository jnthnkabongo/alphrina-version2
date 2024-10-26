import { React } from "react";
import { Link } from "react-router-dom";

const SortiColis = () => {
    return (
      <>
          <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Faire un enregistrement d'une depnse</h5>
                    <div className="card-body">

                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings"  method="POST" >
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">NOM AGENT</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="firstName" className="form-label">MONTANT OU SOMME</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="number" className="form-label">MOTIF</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="organization" className="form-label">TOTAL</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="organization"
                                        name="organization"
                                        
                                    />
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
    )
}

export default SortiColis;