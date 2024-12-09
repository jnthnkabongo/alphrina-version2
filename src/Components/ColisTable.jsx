import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteColi, getColis } from '../actions/ColisAction';
import { useDispatch } from 'react-redux';
import Spinner from './Spinner';

const ColisTable = ({ nom_agent = '', id = '', colis = [] }) => {
    const [dataColis, setDataColis] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showSecondTable, setShowSecondTable] = useState(false); 
    const dispatch = useDispatch();


    const handleToggleSecondTable = (agentId) => {
        setShowSecondTable((prevState) => (prevState === agentId ? null : agentId));
    };

    useEffect(() => {
        console.log(colis)
    }, [showSecondTable, id]);

    return (
        <>
            <tr>
                <td>
                    <button
                        onClick={() => handleToggleSecondTable(id)} 
                        className="btn btn-primary"
                    >
                        {showSecondTable === id ? "-" : "+"} 
                    </button>
                </td>
                <td><i className="bx bx-user"></i> <strong>{nom_agent}</strong></td>
                <td>
                    <Link onClick={() => dispatch(deleteColi(id))}>
                        <i className="bx bx-trash fs-2 me-1"></i>
                    </Link>
                </td>
            </tr>
            {showSecondTable === id && ( 
                <tr>
                    <td colSpan={8}>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="bg-dark">
                                    <th className="text-white">Index</th>
                                    <th className="text-white">Nom Client</th>
                                    <th className="text-white">Nom Colis</th>
                                    <th className="text-white">Nombre Colis</th>
                                    <th className="text-white">Kilo Colis</th>
                                    <th className="text-white">Prix Unitaire</th>
                                    <th className="text-white">Prix Total</th>
                                    <th className="text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {colis.length > 0 ? (
                                    colis.map((colis, index) => (
                                        <tr key={colis.id}>
                                            <td>{index + 1}</td>
                                            <td>{colis.nom_client}</td>
                                            <td>{colis.nomcolis}</td>
                                            <td>{colis.nbrtotalcolis}</td>
                                            <td>{colis.kilocolis}</td>
                                            <td>{colis.prixunitaire}</td>
                                            <td>{colis.prixtotal}</td>
                                            <td>
                                                <Link to={`/PayementConteneurUser/${colis.id}`}>
                                                    <i className="bx bx-money me-1 fs-2"></i>
                                                </Link>
                                                <Link to={`/UpdateClient/${colis.id}`}>
                                                    <i className="bx bx-edit me-1 fs-2"></i>
                                                </Link>
                                                <Link to="#" onClick={() => dispatch(deleteColi(colis.id))}>
                                                    <i className="bx bx-trash me-1 fs-2"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="text-center">Aucun colis disponible</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </td>
                </tr>
            )}
        </>
    );
};

export default ColisTable;
