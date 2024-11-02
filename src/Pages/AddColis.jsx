import { React, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { postColis } from "../actions/ColisAction";

const AddColis = () => {
    const [isLoading2, setloading2] = useState(false);
    const [inputListNew, setInputListNew] = useState([
        { nom_colis: "", nombre_total_colis: "", prix_unitaire: "", kilo_colis: "", prix_total: "" },
    ]);

    const dispatch = useDispatch();
    const form = useRef();

    const handleAddClick = () => {
        setInputListNew([...inputListNew, { nom_colis: "", nombre_total_colis: "", prix_unitaire: "", kilo_colis: "", prix_total: "" }]);
    };

    const handleInputChange = (index, name, value) => {
        const list = [...inputListNew];
        list[index][name] = value;
        setInputListNew(list);
    };

    const initialColisState = [{ nomagent:'', nomcolis:'', nbrtotalcolis:'', prixunitaire:'', kilocolis:'', prixtotal:'', montantpayer:'', totalkilo:''}];

    const handleSubmitColis = async (e) => {
        e.preventDefault();
        setloading2(true);
  
        const colisData = {
            nomagent: form.current["nom_agent"].value,
            montantpayer: form.current["montantpayer"].value,
            totalkilo: form.current["totalkilos"].value,
        };

        const colis = inputListNew.map((item) => ({
            nomcolis: item.nom_colis,
            nbrtotalcolis: item.nombre_total_colis,
            prixunitaire: item.prix_unitaire,
            kilocolis: item.kilo_colis,
            prixtotal: item.prix_total
        }));

        const formData = {
            ...colisData,
            colis
        };
       

        try {
            await dispatch(postColis(formData));
            Swal.fire({
                icon: "success",
                title: "L'opération a réussi avec succès",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: `${error.response.data.message}`,
                text: "Veuillez vérifier vos informations de connexion.",
            });
            throw error;
        }finally{
            setInputListNew(initialColisState);
            setloading2(false);
        }
    };

    return (
        <>
            <div className='container mt-4'>
                <div className="card mb-4">
                    <h5 className="card-header">Faire un enregistrement d'un colis</h5>
                    <div className="card-body"></div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings" ref={form} method="POST" onSubmit={handleSubmitColis}>
                            <div className="row">
                                <div className="mb-3 col-md-12">
                                    <label htmlFor="nom_agent" className="form-label">NOM AGENT</label>
                                    <input type="text" id="nom_agent" name="nom_agent" placeholder="Alphonsine Banongo" className="form-control" />
                                </div>
                                {inputListNew.map((x, i) => {
                                    return(
                                        <>
                                        <div className="mb-3 col-md-2">
                                            <label className="form-label">NOM COLIS</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Iphone 14 Pro Max"
                                                name="nom_colis"
                                                value={x.nom_colis || ''}
                                                onChange={(e) => handleInputChange(i, "nom_colis", e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 col-md-2">
                                            <label className="form-label">NOMBRE TOTAL COLIS</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                placeholder="03"
                                                value={x.nombre_total_colis || ''}
                                                onChange={(e) => handleInputChange(i, "nombre_total_colis", e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 col-md-2">
                                            <label className="form-label">PRIX UNITAIRE</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="10 $"
                                                value={x.prix_unitaire || ''}
                                                onChange={(e) => handleInputChange(i, "prix_unitaire", e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 col-md-2">
                                            <label className="form-label">KILO COLIS</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="18 Kg"
                                                value={x.kilo_colis || ''}
                                                onChange={(e) => handleInputChange(i, "kilo_colis", e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 col-md-2">
                                            <label className="form-label">PRIX TOTAL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="300 $"
                                                value={x.prix_total || ''}
                                                onChange={(e) => handleInputChange(i, "prix_total", e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 col-md-2">
                                            {inputListNew.length - 1 === i && (
                                                <button type="button" className="ml10 btn btn-primary" onClick={handleAddClick}>+</button>
                                            )}
                                        </div>
                                        </>
                                    );
                                })}
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="montantpayer" className="form-label">MONTANT A PAYER</label>
                                    <input type="number" id="montantpayer" name="montantpayer" className="form-control" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="totalkilos" className="form-label">TOTAL KILOS</label>
                                    <input type="number" id="totalkilos" name="totalkilos" className="form-control" />
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type="submit" className="btn btn-primary me-2">Soumettre</button>
                                <button type="reset" className="btn btn-outline-secondary">Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddColis;
