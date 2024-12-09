import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAgent } from '../actions/AgentAction';

const AddAgent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nom: "",
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(postAgent(formData))
      .then(() => {
        setFormData({
          nom: ""
        });
      })
      .catch(() => {
        
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='container mt-4'>
      <div className="card mb-4">
        <h5 className="card-header">Ajouter un agent</h5>
        <div className="card-body">
          <form id="formAccountSettings" method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3 col-md-12">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input
                type="text"
                className="form-control"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder=""
                autoFocus
              />
              </div>
            </div>
            
            <div className="mt-2">
              {loading ? (
                <center>
                  <div className="spinner-border" role="status"></div>
                </center>
              ) : (
                <button type="submit" className="btn btn-primary me-2"><i className='bx bx-plus'></i> Ajouter</button>
              )}
              <button type="reset" className="btn btn-outline-secondary">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAgent;