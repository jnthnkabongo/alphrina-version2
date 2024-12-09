import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAgent } from "../actions/AgentAction";

const AgentTable = ({ nom, id }) => {
const dispatch = useDispatch();

const deleteAgenthandler = async(id)=>{
    try {
        await dispatch(deleteAgent(id))
    } catch (error) {
        console.log("Erreur lors de la suppression du colis :", error)
    }
};

  return (
    <tr>
        <td><i className="bx bx-user"></i> <strong>{id}</strong></td>
        <td><i className=""></i> <strong>{nom}</strong></td>
      
      <td>
        <Link onClick={() => deleteAgenthandler(id)}>
          <i className="bx bx-trash me-1"></i>
        </Link>
      </td>
    </tr>
  );
};

export default AgentTable;
