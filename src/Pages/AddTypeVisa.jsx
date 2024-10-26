/* eslint-disable no-unused-vars */
import { React } from "react";
import { Link } from "react-router-dom";

const AddTypeVisa = () => {
    return (
        <>
        
    <div className="container mt-4">
      <div className="card mb-4">
        <h5 className="card-header">Ajouter un Type Visa </h5>
        <div className="card-body"></div>
        <hr className="my-0" />
        <div className="card-body">
          <form
            id="formAccountSettings"
          >
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="nom" className="form-label">
                  Intitule
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="intitule"
                  name="intitule"
                  autoFocus
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="nom" className="form-label">
                  Montant
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="montant"
                  name="montant"
                  autoFocus
                />
              </div>
            </div>
            <div className="mt-2">
            <button type="reset" className="btn btn-primary me-2">
                Enregistrer
              </button>
              <button type="reset" className="btn btn-outline-secondary">
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}

export default AddTypeVisa
