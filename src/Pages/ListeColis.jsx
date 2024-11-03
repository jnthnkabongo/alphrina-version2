  import { React } from "react";
import { Link } from "react-router-dom";

const ListeColis = () => {
    return (
      <>
        <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-lg-12 mb-4 order-0">
            <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="col-sm-4">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        <i className="bx bx-package m-1"></i> Colis
                      </h5>
                      <div className="col-md-12">
                        <Link
                          to="/AddColis"
                          className="btn btn-sm btn-outline-primary m-2"
                        >
                          Enregistrement
                        </Link>
                        <Link
                          to="/SortiColis"
                          className="btn btn-sm btn-outline-primary"
                        >
                          Depense
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 text-center p-2">
                    <div className="row">
                      <div className="card btn btn-sm btn-success col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Dépôt</p>
                          <span className="font-weight-bold"></span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-warning col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Balance</p>
                          <span className="font-weight-bold">
                          
                          </span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-danger col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Sorti</p>
                          <span className="font-weight-bold">
                           
                          </span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-primary col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Total Depense</p>
                          <span className="font-weight-bold"></span>
                        </div>
                      </div>
                      <div
                        className="card btn btn-sm btn col-md-2 m-2"
                        style={{ backgroundColor: "purple" }}
                      >
                        <div className="card-body ">
                          <p
                            className="font-weight-bold"
                            style={{ color: "white" }}
                          >
                            Solde
                          </p>
                          <span
                            className="font-weight-bold"
                            style={{ color: "white" }}
                          >
                         
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-wrapper">
            <div className="col-12">
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
                            <i className="fas fa-list"></i>Transaction du jour
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link to="/ListTransactionDubai" className="nav-link">
                          Les transactions
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content tabcontent-border">
                      <div
                        className="tab-pane active"
                        id="home"
                        role="tabpanel"
                      >
                        <div className="p-20">
                          <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <input className="form-control" type="date" placeholder="Date début"/>    
                            </div>
                            <div className="col-md-3">
                                <input className="form-control" type="date" />   
                            </div>
                            <div className="col-md-3">
                                <select className="form-control">
                                    <option value="" key="">Toutes les transactions</option>
                                    <option value="" key="">Toutes les entres</option>
                                    <option value="" key="">Toutes les sorties</option>
                                </select>     
                            </div>
                            <div className="col-md-1">
                              <Link to={`/ImprimerTransactionAll`}>
                                <i className="bx bx-printer fs-2 me-1"></i>
                              </Link>
                            </div>
                            <div className="col-md-1"></div>
                          </div>
                        </div>

                        <hr />
                        <div className="card">
                          
                            <div className="table-responsive text-nowrap">
                              <table className="table table-bordered">
                                <thead>
                                  <tr className="bg-primary">
                                    <th className="text-white">N°</th>
                                    <th className="text-white">Nom_emeteur</th>
                                    <th className="text-white">
                                      Nom recepeteur
                                    </th>
                                    <th className="text-white">Matricule</th>
                                    <th className="text-white">
                                      Type transaction
                                    </th>
                                    <th className="text-white">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                 
                                        
                                </tbody>
                              </table>
                            </div>
                       
                        </div>
                        <br />
                        <div className="pagination-container">
                          <button
                            className="btn btn-primary mr-2"
                          >
                            &laquo; Précédent
                          </button>
                          &nbsp;
                          <button className="btn btn-primary mr-2"
                          >
                            Suivant &raquo;
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-pane p-20"
                        id="profile"
                        role="tabpanel"
                      >
                        
                      </div>
                    </div>
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

export default ListeColis;