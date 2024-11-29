  import { React, useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { getAgent, getColis } from "../actions/ColisAction"
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

    const [isLoading, setLoading] = useState(true);
    const [dataColis, setColisData] = useState([]);
    const [dateDebut, setDateDebut] = useState(getFiveDaysAgo());
    const [dateFin, setDateFin] = useState(new Date().toISOString().split("T")[0]);

    useEffect(() => {
        setLoading(true);
        getColis(dateDebut, dateFin)
            .then((membre) => {
                setColisData(membre.agents);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [dateDebut, dateFin]);

    const handleDateDebutChange = (event) => {
        setDateDebut(event.target.value);
    };

    const handleDateFinChange = (event) => {
        setDateFin(event.target.value);
    };

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
                                                <Link to="/AddColis" className="btn btn-sm btn-outline-primary m-2">
                                                    Enregistrement
                                                </Link>
                                                <Link to="/SortiColis" className="btn btn-sm btn-outline-primary">
                                                    Dépense
                                                </Link>
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
                                            <div className="tab-content tabcontent-border">
                                                <div className="tab-pane active" id="home" role="tabpanel">
                                                    <div className="p-20">
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <input
                                                                    className="form-control"
                                                                    value={dateDebut}
                                                                    onChange={handleDateDebutChange}
                                                                    type="date"
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
                                                        </div>
                                                    </div>

                                                    <hr />
                                                    <div className="card">
                                                        {isLoading ? (
                                                            <div className="text-center">
                                                                <Spinner />
                                                            </div>
                                                        ) : (
                                                            <div className="table-responsive text-nowrap">
                                                                <table className="table table-bordered">
                                                                    <thead>
                                                                        <tr className="bg-primary">
                                                                            <th className="text-white">#</th>
                                                                            <th className="text-white">Nom Agent</th>
                                                                            <th className="text-white">Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {Array.isArray(dataColis) && dataColis.map((data, index) => (
                                                                            <ColisTable
                                                                                id={data.id_agent}
                                                                                nom_agent={data.nom}
                                                                                key={index}
                                                                                colis={data.colis} 
                                                                            />
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        )}
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
    );
};

export default ListeColis;