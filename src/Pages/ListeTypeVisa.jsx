/* eslint-disable no-unused-vars */
import { React } from "react";
import { Link } from "react-router-dom";

const ListeTypeVisa = () => {
    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
            <div className="col-lg-12 mb-4 order-0">
                <div className="card">
                <div className="d-flex align-items-end row">
                    <div className="col-sm-4">
                    <div className="card-body">
                        <h5 className="card-title text-primary">
                        <i className="bx bx-card"></i>Parametre Type Visa
                        </h5>
                        <div className="d-flex gap-2">
                        <Link
                            to="/AddVisa"
                            className="btn btn-sm btn-outline-primary"
                        >
                            + Ajouter un type visa
                        </Link>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="page-wrapper">
            <div className="row">
                <div className="col-12 col-lg-12">
                <div className="card">
                    <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                        role="tab"
                        >
                        <span className="hidden-sm-up"></span>
                        <span className="hidden-xs-down">
                            <i className="fas fa-list"></i>Type depense
                        </span>
                        </a>
                    </li>
                    <li className="nav-item me-2">
                        <Link className="nav-link" to="/ListeUser">
                        Profil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ListeVisa" className="nav-link">
                        Type Visa
                        </Link>
                    </li>
                    </ul>
                    <div className="tab-content tabcontent-border">
                    <div className="tab-pane active" id="home" role="tabpanel">
                        <div className="p-20">
                        <div className="row">
                            <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Recherche"
                            />
                            </div>
                        </div>
                        </div>
                        <hr />
                        <div className="card">
                        <div className="table-responsive text-nowrap">
                            <table className="table table-bordered">
                            <thead>
                                <tr className="bg-primary">
                                <th className="text-white">N°</th>
                                <th className="text-white">Intitule</th>
                                <th className="text-white">Montant</th>
                                <th className="text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                    </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <br />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
        </>
    )
}

export default ListeTypeVisa
