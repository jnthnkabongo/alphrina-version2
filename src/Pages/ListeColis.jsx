import { React } from "react";

const ListeColis = () => {
    return (
      <>
        <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-lg-12 mb-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        <i className="bx bx-wallet"></i> Les Dettes
                      </h5>
                      
                      
                    </div>
                  </div>
                  <div className="col-sm-5 text-center text-sm-left"></div>
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
                            <i className="fas fa-list"></i>Dette Client
                          </span>
                        </a>
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
                            <div className="col-md-3">
                              
                            </div>
                            <div className="col-md-3">
                             
                            </div>
                            <div className="col-md-3">
                              
                            </div>
                            <div className="col-md-2">
                          
                        </div>
                          </div>
                        </div>
                        <center></center>
                        <hr />
                        <div className="card">
                         
                            <div className="table-responsive text-nowrap">
                              <table className="table table-bordered">
                                <thead>
                                  <tr className="bg-primary">
                                    <th className="text-white">N°</th>
                                    <th className="text-white">
                                      Nom Récepteur
                                    </th>
                                    <th className="text-white">
                                      Montant dette
                                    </th>
                                    <th className="text-white">
                                      Montant payer
                                    </th>
                                    <th className="text-white">Date</th>
                                    <th className="text-white">Motif</th>
                                    <th className="text-white">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                      
                                </tbody>
                              </table>
                            </div>
                       
                        </div>
                      </div>
                      <div
                        className="tab-pane p-20"
                        id="profile"
                        role="tabpanel"
                      >
                        <div className="p-20">
                          <div
                            className="tab-pane active"
                            id="home"
                            role="tabpanel"
                          >
                            <div className="p-20">
                              <div className="row"></div>
                            </div>
                            <hr />
                            <div className="card">
                              <table className="table table-bordered">
                                <thead>
                                  <tr className="bg-primary">
                                    <th className="text-white">N°</th>
                                    <th className="text-white">
                                      Nom partenanire
                                    </th>
                                    <th className="text-white">
                                      Montant total
                                    </th>
                                    <th className="text-white">
                                      Montant total
                                    </th>
                                    <th className="text-white">Matricule</th>
                                    <th className="text-white">Date</th>
                                    <th className="text-white">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                      <tr>
                                        <td>
                                          <i className=""></i>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                        </td>
                                        <td>
                                          <i className=""></i>
                                          
                                        </td>
                                        <td>
                                          <i className=""></i>
                                          <strong>
                                            
                                          </strong>
                                        </td>
                                        <td>
                                       
                                        </td>
                                      </tr>
                                   
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
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