import { React, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { getAgent, postColis } from "../actions/ColisAction";
import { useNavigate } from "react-router-dom";

const AddColis = () => {
  const [isLoading2, setloading2] = useState(false);
  const navigate = useNavigate();
  const [inputListNew, setInputListNew] = useState([
    {
      nom_colis: "",
      nom_client: "",
      nombre_total_colis: "",
      prix_unitaire: "",
      kilo_colis: "",
      prix_total: "",
    },
  ]);

  const [dataAgent, setagentData] = useState([]);
  const [selectedAgentId, setSelectedAgentId] = useState("");
  const dispatch = useDispatch();
  const form = useRef();

  const handleAddClick = () => {
    setInputListNew([
      ...inputListNew,
      {
        nom_colis: "",
        nom_client: "",
        nombre_total_colis: "",
        prix_unitaire: "",
        kilo_colis: "",
        prix_total: "",
      },
    ]);
  };

  const [montantAPayer, setMontantAPayer] = useState(0);
  const [totalKilos, setTotalKilos] = useState(0);

  const handleInputChange = (index, name, value) => {
    const list = [...inputListNew];
    list[index][name] = value;
    setInputListNew(list);
  };

  const handleSubmitColis = async (e) => {
    e.preventDefault();
    setloading2(true);

    const formDataList = inputListNew.map((item) => ({
      date_chargement: String(form.current["date_chargement"].value),
      nom_client: item.nom_client,
      nomcolis: item.nom_colis,
      nbrtotalcolis: item.nombre_total_colis,
      prixunitaire: item.prix_unitaire,
      kilocolis: item.kilo_colis,
      prixtotal: item.prix_total,
      id_agent: parseInt(selectedAgentId),
      montantpayer: montantAPayer,
      totalkilo: totalKilos,
    }));
    try {
      for (const formData of formDataList) {
        await dispatch(postColis(formData));
      }
     navigate('/ListeColis')
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: "Veuillez vérifier vos informations de connexion.",
      });
      throw error;
    } finally {
      setloading2(false);
    }
  };

  const fetchAgents = () => {
    getAgent()
    .then((member) =>{
        setagentData(member);
    })
    .catch((error) => {
        console.log(error);
    })
  };
  const handleChange = (event) => {
    setSelectedAgentId(event.target.value); // Mettez à jour l'état avec la valeur sélectionnée
  };

  useEffect(() => {
    const newMontantAPayer = inputListNew.reduce(
      (acc, item) => acc + (parseFloat(item.prix_total) || 0),
      0
    );
    const newTotalKilos = inputListNew.reduce(
      (acc, item) => acc + (parseFloat(item.kilo_colis) || 0),
      0
    );
    setMontantAPayer(newMontantAPayer);
    setTotalKilos(newTotalKilos);
    fetchAgents();
  }, [inputListNew]);

  return (
    <>
      <div className="container mt-4">
        <div className="card mb-4">
          <h5 className="card-header">Faire un enregistrement d'un colis</h5>
          <div className="card-body"></div>
          <hr className="my-0" />
          <div className="card-body">
            <form ref={form} onSubmit={handleSubmitColis}>
              <div className="row">
                {/* <div className="mb-3 col-md-6">
                  <label htmlFor="id_agent" className="form-label"> NOM AGENT</label>
                  <input
                    type="number"
                    id="id_agent"
                    name="id_agent"
                    placeholder="Alphonsine Banongo"
                    className="form-control"
                  />
                 
                </div> */}
                <div className="mb-3 col-md-6">
                <label htmlFor="id_agent" className="form-label"> NOM AGENT</label>
                <select
                  className="form-select"
                  id="id_agent"
                  name="id_agent"
                  value={selectedAgentId} // Liez la valeur sélectionnée à l'état
                  onChange={handleChange}
                  autoFocus
                >
                  <option value="">Sélectionnez un agent</option>
                  {
                    dataAgent.map((e) => {
                      return <option value={e.id} key={e.id}>{e.nom}</option>
                    })
                  }
                  {/* Ajoutez d'autres options ici */}
                </select>
                <div>
            
            </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="date_chargement" className="form-label">DATE SORTI COLIS</label>
                  <input 
                    type="date"
                    id="date_chargement"
                    name="date_chargement"
                    className="form-control"
                  />
                </div>
                {inputListNew.map((x, i) => {
                  return (
                    <>
                      <div className="mb-3 col-md-2">
                        <label htmlFor="nom_client" className="form-label">NOM CLIENT</label>
                        <input 
                          type="text"
                          id="nom_client"
                          name="nom_client"
                          placeholder="Computech Congo"
                          className="form-control"
                          value={x.nom_client}
                          onChange={(e) => handleInputChange(i, "nom_client", e.target.value)}
                        />
                      </div>
                      <div className="mb-3 col-md-2">
                        <label className="form-label">NOM COLIS</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Iphone 14 Pro Max"
                          name="nom_colis"
                          value={x.nom_colis}
                          onChange={(e) =>
                            handleInputChange(i, "nom_colis", e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 col-md-2">
                        <label className="form-label">NOMBRE TOTAL COLIS</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="03"
                          value={x.nombre_total_colis}
                          onChange={(e) =>
                            handleInputChange(
                              i,
                              "nombre_total_colis",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="mb-3 col-md-2">
                        <label className="form-label">PRIX UNITAIRE</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="10 $"
                          value={x.prix_unitaire}
                          onChange={(e) =>
                            handleInputChange(
                              i,
                              "prix_unitaire",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="mb-3 col-md-2">
                        <label className="form-label">KILO COLIS</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="18 Kg"
                          value={x.kilo_colis}
                          onChange={(e) =>
                            handleInputChange(i, "kilo_colis", e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 col-md-2">
                        <label className="form-label">PRIX TOTAL</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="300 $"
                          value={x.prix_total}
                          onChange={(e) =>
                            handleInputChange(i, "prix_total", e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3 col-md-12">
                        {inputListNew.length - 1 === i && (
                          <button
                            type="button"
                            className="ml10 btn btn-primary"
                            onClick={handleAddClick}
                          >
                            +
                          </button>
                        )}
                      </div>
                    </>
                  );
                })}
                <div className="mb-3 col-md-6">
                  <label htmlFor="montantpayer" className="form-label">
                    MONTANT A PAYER
                  </label>
                  <input
                    type="number"
                    id="montantpayer"
                    name="montantpayer"
                    className="form-control"
                    value={montantAPayer}
                    readOnly
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="totalkilos" className="form-label">
                    TOTAL KILOS
                  </label>
                  <input
                    type="number"
                    id="totalkilos"
                    name="totalkilos"
                    className="form-control"
                    value={totalKilos}
                    readOnly
                  />
                </div>
              </div>
              <div className="mt-10">
                {isLoading2 ? (
                  <div className="spinner-border mr-4" role="status"></div>
                ) : (
                  <button type="submit" className="btn btn-primary me-2">
                    Soumettre
                  </button>
                )}

                <button type="reset" className="btn btn-outline-secondary">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddColis;
