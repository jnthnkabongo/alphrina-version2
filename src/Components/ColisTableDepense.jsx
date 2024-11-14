import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDepenseColis } from '../actions/ColisAction';

const ColisTableDepense = ({ nom,  id, montant, motif }) => {
const dispatch = useDispatch();

const deleteDepensehandler = async(id)=>{
    try {
        await dispatch(deleteDepenseColis(id));
    } catch (error) {
        console.log("Erreur lors de la suppression du colis :", error);
    }
};
    return (
        <tr>
            <td><i className="bx bx-user"></i> <strong>{id}</strong></td>
            <td><i className="bx bx-cube"></i> <strong>{nom}</strong></td>
            <td><i className="bx "></i> <strong>{montant}</strong></td>
            <td><i className="bx "></i> <strong>{motif}</strong></td>
            <td>
                <Link onClick={() => deleteDepensehandler(id)}>
                    <i className="bx bx-trash fs-2 me-1"></i>
                </Link>
               
            </td>
        </tr>
    );
};

export default ColisTableDepense;
