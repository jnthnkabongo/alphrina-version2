// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { deleteColi, getColiId, getColis } from '../actions/ColisAction';
// import { useDispatch } from 'react-redux';
// import Spinner from './Spinner';



// const ColisTable = ({ nom_agent,  id,}) => {
//     const [activeTable, setActiveTable] = useState(null);
//     const [dataColis, setDataColis] = useState([]);
//     const [isLoading, setIsLoading ] =useState(false);
//     const dispatch = useDispatch(); 

//     const handleInactive = () => {
//         setActiveTable(null);
//     }

//     const handleColis = (id_agent) => {
//         setIsLoading(true);
//         getColis(id_agent)
//         .then((membre) => {
//             setDataColis(membre)
//             console.log(membre);
//             setIsLoading(false);
//             setActiveTable(id_agent)
//         })
//         .catch((error) => {
//             setIsLoading(false);
//         })
//     }

//     const deleteAgentColis = async(id)=> {
//         try {
//             await dispatch(deleteColi(id));
//         } catch (error) {
//             console.error("Erreur los de la suppression du colis: ", error);
//         }
//     };
//     const deleteColis = async(id) =>{
//         try {
//             await dispatch(deleteColi(id));
//         } catch (error) {
//             console.log("Erreur los de la suppression du colis: ", error);
//         }
//     }

//     return (
//         <>
//         <tr>
//             <td>
//                 <button 
//                     onClick={() => activeTable === id ? handleInactive() : handleColis(id)}
//                     className='btn btn-primary'
//                 >
//                     {activeTable === id ? "-" :"+"}
//                 </button>
//             </td>
//             <td><i className="bx bx-user"></i> <strong>{nom_agent}</strong></td>
//             <td>
//                 <Link onClick={() => deleteAgentColis(id)}>
//                     <i className="bx bx-trash fs-2 me-1"></i>
//                 </Link>
               
//             </td>
//         </tr>
//         {
//             isLoading ? (
//                 <center>
//                     <Spinner />
//                 </center>
//             ): (
//             activeTable === id &&(
//                 <tr key={id} className="container">
//                 <td colSpan={8}>
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr className="bg-dark">
//                         <th className="text-white">N°</th>
//                         <th className="text-white">Nom colis</th>
//                         <th className="text-white">Telephone</th>
//                         <th className="text-white">Montant Total</th>
//                         <th className="text-white">Montant Payer</th>
//                         <th className="text-white">Date</th>
//                         <th className="text-white">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {isLoading ? (
//                         <tr>
//                           <td colSpan={8} className="text-center">
//                             {" "}
//                             <Spinner />{" "}
//                           </td>
//                         </tr>
//                       ) : (
//                         dataColis.map((colis, index) => (
//                           <tr key={index}>
//                             <td className="text-danger">{index + 1}</td>
//                             <td>{colis.id_agent}</td>
//                             <td>{colis.nomcolis}</td>
//                             <td>{colis.nbrtotalcolis}</td>
//                             <td>{colis.prixunitaire}</td>
//                             <td>
//                               <Link to="" onClick={() =>
//                                   deleteColis(colis.id)
//                                 }>
//                                 <i className="bx bx-trash me-1 fs-2"></i>
//                               </Link>
//                               <Link to={`/PayementConteneurUser/${colis.id}`}>
//                                 <i className="bx bx-money me-1 fs-2"></i>
//                               </Link>
//                               <Link to={`/UpdateClient/${colis.id}`}>
//                                 <i className="bx bx-edit me-1 fs-2"></i>
//                               </Link>
//                             </td>
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>  
//             )
//         )}
//     </>
//     );
// };

// export default ColisTable;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { deleteColi, getColis } from '../actions/ColisAction';
// import { useDispatch } from 'react-redux';
// import Spinner from './Spinner';

// const ColisTable = ({ nom_agent, id }) => {
//     const [activeTable, setActiveTable] = useState(null);
//     const [dataColis, setDataColis] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [showSecondTable, setShowSecondTable] = useState(false); // Nouvel état
//     const dispatch = useDispatch();

//     const handleInactive = () => {
//         setActiveTable(null);
//     };

//     const handleColis = (id_agent) => {
//         setIsLoading(true);
//         getColis(id_agent)
//         .then((membre) => {
//             setDataColis(membre);
//             console.log(membre);
//             setIsLoading(false);
//             setActiveTable(id_agent);
//         })
//         .catch((error) => {
//             setIsLoading(false);
//         });
//     };

//     const deleteAgentColis = async (id) => {
//         try {
//             await dispatch(deleteColi(id));
//         } catch (error) {
//             console.error("Erreur lors de la suppression du colis: ", error);
//         }
//     };

//     const deleteColis = async (id) => {
//         try {
//             await dispatch(deleteColi(id));
//         } catch (error) {
//             console.log("Erreur lors de la suppression du colis: ", error);
//         }
//     };
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { deleteColi, getColis } from '../actions/ColisAction';
// import { useDispatch } from 'react-redux';
// import Spinner from './Spinner';

// const ColisTable = ({ nom_agent, id }) => {
//     const [activeTable, setActiveTable] = useState(null);
//     const [dataColis, setDataColis] = useState([]); // Contient les données des colis
//     const [isLoading, setIsLoading] = useState(false);
//     const [showSecondTable, setShowSecondTable] = useState(false);
//     const dispatch = useDispatch();

//     const handleInactive = () => {
//         setActiveTable(null);
//     };

//     const handleColis = (id_agent) => {
//         setIsLoading(true);
//         getColis(id_agent)
//         .then((response) => {
//             setDataColis(response.agents); // Mettez à jour pour stocker tous les agents
//             setIsLoading(false);
//             setActiveTable(id_agent);
//         })
//         .catch((error) => {
//             setIsLoading(false);
//             console.error("Erreur lors de la récupération des colis: ", error);
//         });
//     };
//     const allColis = dataColis.flatMap(agent => agent.colis);

//     const deleteAgentColis = async (id) => {
//         try {
//             await dispatch(deleteColi(id));
//         } catch (error) {
//             console.error("Erreur lors de la suppression du colis: ", error);
//         }
//     };

//     const deleteColis = async (id) => {
//         try {
//             await dispatch(deleteColi(id));
//         } catch (error) {
//             console.log("Erreur lors de la suppression du colis: ", error);
//         }
//     };


//     return (
//         <>
//             <tr>
//                 <td>
//                 <button onClick={() => setShowSecondTable(!showSecondTable)} className="btn btn-primary">
//                         {showSecondTable ? "-" : "+"}
//                     </button>
//                 </td>
//                 <td><i className="bx bx-user"></i> <strong>{nom_agent}</strong></td>
//                 <td>
//                     <Link onClick={() => deleteAgentColis(id)}>
//                         <i className="bx bx-trash fs-2 me-1"></i>
//                     </Link>
//                 </td>
//             </tr>
//             {showSecondTable && (
//                 <tr>
//                     <td colSpan={8}>
//                         <table className="table table-bordered">
//                             <thead>
//                                 <tr className="bg-dark">
//                                     <th className="text-white">N°</th>
//                                     <th className="text-white">Nom colis</th>
//                                     <th className="text-white">Téléphone</th>
//                                     <th className="text-white">Montant Total</th>
//                                     <th className="text-white">Montant Payer</th>
//                                     <th className="text-white">Date</th>
//                                     <th className="text-white">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                             {allColis.map((colis, colisIndex) => (
//                                 <tr key={colis.id}>
//                                     <td className="text-danger">{colisIndex + 1}</td>
//                                     <td>{colis.nomcolis}</td>
//                                     <td>{colis.nbrtotalcolis}</td>
//                                     <td>{colis.prixtotal}</td>
//                                     <td>{colis.montantpayer}</td>
//                                     <td>
//                                         <Link to="" onClick={() => deleteColis(colis.id)}>
//                                             <i className="bx bx-trash me-1 fs-2"></i>
//                                         </Link>
//                                         <Link to={`/PayementConteneurUser/${colis.id}`}>
//                                             <i className="bx bx-money me-1 fs-2"></i>
//                                         </Link>
//                                         <Link to={`/UpdateClient/${colis.id}`}>
//                                             <i className="bx bx-edit me-1 fs-2"></i>
//                                         </Link>
//                                     </td>
//                                 </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </td>
//                 </tr>
                

                
//             )}
//         </>
//     );
// };
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

    useEffect(() => {
        if (showSecondTable) {
            handleColis(id);
        }
    }, [showSecondTable, id]);

    const handleColis = (id_agent) => {
        setIsLoading(true);
        getColis(id_agent)
            .then((response) => {
                console.log("Response from API:", response);

                // Vérifiez et fusionnez tous les colis des agents
                const colisList = response.agents.flatMap(agent => agent.colis || []);
                setDataColis(colisList);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des colis:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <tr>
                <td>
                    <button onClick={() => setShowSecondTable(!showSecondTable)} className="btn btn-primary">
                        {showSecondTable ? "-" : "+"}
                    </button>
                </td>
                <td><i className="bx bx-user"></i> <strong>{nom_agent}</strong></td>
                <td>
                    <Link onClick={() => dispatch(deleteColi(id))}>
                        <i className="bx bx-trash fs-2 me-1"></i>
                    </Link>
                </td>
            </tr>
            {showSecondTable && (
                <tr>
                    <td colSpan={8}>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="bg-dark">
                                        <th className="text-white">Index</th>
                                        <th className="text-white">ID Colis</th>
                                        <th className="text-white">Nom Colis</th>
                                        <th className="text-white">Total Kilo</th>
                                        <th className="text-white">Prix Total</th>
                                        <th className="text-white">Montant Payé</th>
                                        <th className="text-white">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataColis.length > 0 ? (
                                        dataColis.map((colis, index) => (
                                            <tr key={colis.id}>
                                                <td>{index + 1}</td>
                                                <td>{colis.id}</td>
                                                <td>{colis.nomcolis}</td>
                                                <td>{colis.totalkilo}</td>
                                                <td>{colis.prixtotal}</td>
                                                <td>{colis.montantpayer}</td>
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
                        )}
                    </td>
                </tr>
            )}
        </>
    );
};

export default ColisTable;