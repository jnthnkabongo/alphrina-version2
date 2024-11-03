import React from 'react'
import { Link } from 'react-router-dom'


const ColisTable = ({ nom_agent, id, nom_colis, nbrtotal_colis, prix_unitaire, kilo_colis, prix_total, montant_payer, total_kilo }) => {
    
    return (
        <tr>
            <td><i className=""></i> <strong>{id}</strong></td>
            <td><i className=""></i> <strong>{nom_agent}</strong></td>
            <td><i className=""></i> <strong>{nom_colis}</strong></td>
            <td><i className=""></i> <strong>{nbrtotal_colis}</strong></td>
            <td>
                <Link to="" 
                ><i className="bx bx-trash fs-2 me-1"></i></Link
                >
                <Link to={`/paiementDetteClient/${id}`}
                ><i className="bx bx-money fs-2 me-1"></i></Link
                >
            </td>
        </tr>
    )
}

export default ColisTable