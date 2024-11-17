  import { React, useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { getColis } from "../actions/ColisAction"
  import Spinner from "../Components/Spinner";
  import ColisTable from "../Components/ColisTable";

  const ListeColis = () => {
    const getFiveDaysAgo = () => {
      const today = new Date();
      const fiveDaysAgo = new Date(today);
      fiveDaysAgo.setDate(today.getDate() - 5);
      const year = fiveDaysAgo.getFullYear();
      const month = String(fiveDaysAgo.getMonth() + 1).padStart(2, "0");
      const day = String(fiveDaysAgo.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    
    const [isLoading, setloading] = useState(true);
    const [dataColis, setcolisData] = useState([]);
    const [loadDate, setTosetloadDatetalPages] = useState(false);
    const [dateDebut, setDateDebut] = useState(getFiveDaysAgo());
    const [dateFin, setDateFin] = useState(
      new Date().toISOString().split("T")[0]
    );
    const [totalcolisentre, settotalcolisentre] = useState(0);
    const [totalPayer, settotalPayer] = useState(0);
    const [depense, setdepense] = useState(0);
    const [balance, setbalance] = useState(0);

    const handleDateDebutChange = (event) => {
      setTosetloadDatetalPages(true);
      setDateDebut(event.target.value);
      setTimeout(() =>{
        setTosetloadDatetalPages(false);
      }, 1000);
    };

    const handleDateFinChange = (event) => {
      setTosetloadDatetalPages(true);
      setDateFin(event.target.value);
      setTimeout(() =>{
        setTosetloadDatetalPages(false);
      }, 1000);
    };

    useEffect(() =>{
      setloading(true);
      getColis(dateDebut, dateFin)
        .then((membre) => {
          setcolisData(membre.data);
          setbalance(membre.balance);
          setdepense(membre.depense);
          settotalPayer(membre.totalPayer);
           settotalcolisentre(membre.totalcolisentre)
          setloading(false);
          console.log(membre.depense);
        })
        .catch((error) =>{
          console.log(error); 
        });
    }, [dateDebut, dateFin]);

   

    

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
                          <p className="font-weight-bold">Total Colis</p>
                          <span className="font-weight-bold">{totalcolisentre}$</span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-warning col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Total Payer</p>
                          <span className="font-weight-bold">{totalPayer}$</span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-danger col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Depense</p>
                          <span className="font-weight-bold">{depense}$</span>
                        </div>
                      </div>
                      <div className="card btn btn-sm btn-primary col-md-2 m-2">
                        <div className="card-body ">
                          <p className="font-weight-bold">Balance</p>
                          <span className="font-weight-bold">{balance}$</span>
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
                            <i className="fas fa-list"></i>Liste colis du jour
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link to="/ListeColisDepense" className="nav-link">
                          Liste dépense colis
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
                            <div className="col-md-5">
                                <input 
                                  name="dateDebuf" 
                                  className="form-control"
                                  value={dateDebut}
                                  onChange={handleDateDebutChange}
                                  type="date" placeholder="Date début"
                                />    
                            </div>
                            <div className="col-md-5">
                                <input 
                                  className="form-control" 
                                  value={dateFin}
                                  onChange={handleDateFinChange}
                                  type="date" 
                                />   
                            </div>
                            <div className="col-md-1">
                              <Link to={`/ImpressionColis/${dateDebut}/${dateFin}`}>
                                <i className="bx bx-printer fs-2 me-1"></i>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <div className="card">
                            {loadDate ? (
                              <div className="text-center">
                                <Spinner />
                              </div>
                            ) : (
                            <div className="table-responsive text-nowrap">
                              <table className="table table-bordered">
                                <thead>
                                  <tr className="bg-primary">
                                    <th className="text-white">Agent</th>
                                    <th className="text-white">Nom colis</th>
                                    <th className="text-white">Montant payé</th>
                                    <th className="text-white">Prix total</th>
                                    <th className="text-white">Prix unitaire</th>
                                    <th className="text-white">Nombre total colis</th>
                                    <th className="text-white">Total kilos</th>
                                    <th className="text-white">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
          {Array.isArray(dataColis) && dataColis.map((data, index) => (
            <ColisTable
              key={index}
              id={data.id}
              nom_agent={data.nomagent}
              nom_colis={data.nomcolis}
              nbrtotal_colis={data.nbrtotalcolis}
              prixtotal={data.prixtotal}
              prixunitaire={data.prixunitaire}
              totalkilo={data.totalkilo}             
              montantpayer={data.montantpayer}
            />
          ))}
        </tbody>
                              </table>
                              
                            </div>
                            )}
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
    );
};

export default ListeColis;