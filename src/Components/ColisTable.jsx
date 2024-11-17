import React from 'react';
import { Link } from 'react-router-dom';
import { deleteColi } from '../actions/ColisAction';
import { useDispatch } from 'react-redux';



const ColisTable = ({ nom_agent,  id, nom_colis, nbrtotal_colis, prixtotal, prixunitaire, totalkilo, montantpayer }) => {
    const dispatch = useDispatch(); 

    const deleteDepense = async(id)=> {
        try {
            await dispatch(deleteColi(id));
        } catch (error) {
            console.log("Erreur los de la suppression du colis: ", error);
        }
    };
    return (
        <tr>
            <td><i className="bx bx-user"></i> <strong>{nom_agent}</strong></td>
            <td><i className="bx bx-cube"></i> <strong>{nom_colis}</strong></td>
            <td><i className="bx "></i> <strong>{prixtotal}</strong></td>
            <td><i className="bx "></i> <strong>{montantpayer}</strong></td>
            <td><i className="bx"></i> <strong>{prixunitaire}</strong></td>
            <td><i className="bx"></i> <strong>{nbrtotal_colis}</strong></td>
            <td><i className="bx"></i> <strong>{totalkilo}</strong></td>
            <td>
                <Link onClick={() => deleteDepense(id)}>
                    <i className="bx bx-trash fs-2 me-1"></i>
                </Link>
               
            </td>
        </tr>
    );
};

export default ColisTable;
