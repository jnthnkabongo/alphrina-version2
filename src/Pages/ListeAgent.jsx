
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAgent } from "../actions/AgentAction";
import Spinner from "../Components/Spinner";
import AgentTable from "../Components/AgentTable";

const ListeAgent = () => {
    const [isLoading, setloading] = useState(true);
    const [dataAgent, setagentData] = useState([]);

    useEffect(() =>{
        //setloading(true);
        getAgent()
            .then((member) =>{
                setagentData(member);
                setloading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);
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
                        <i className="bx bx-user"></i> Liste agents
                        </h5>
                        <div className="d-flex gap-2">
                        <Link
                            to="/AddAgent"
                            className="btn btn-sm btn-outline-primary"
                        >
                            + Ajouter un agent
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
                            <i className="fas fa-list"></i>Tableau Agents
                        </span>
                        </a>
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
                                    placeholder="Recherche un agent..."
                                />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary">Rechercher</button>
                            </div>
                        </div>
                        </div>
                        <hr />
                        <div className="card">
                            {
                                isLoading ? (
                                <div className="text-center">
                                        <Spinner />
                                </div>
                                ) : (
                                 <div className="table-responsive text-nowrap">
                                    <table className="table table-bordered">
                                    <thead>
                                        <tr className="bg-primary">
                                        <th className="text-white">N°</th>
                                        <th className="text-white">Nom Agent</th>
                                        <th className="text-white">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {Array.isArray(dataAgent) && dataAgent.map((data, index) =>(
                                                <AgentTable
                                                    id={data.id}
                                                    nom={data.nom}
                                                    key={index}
                                                />
                                            ))}
                                    </tbody>
                                    </table>
                                </div>
                                )}
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
export default ListeAgent;