import axioClient from "../axiosClient";
import Swal from "sweetalert2";

export const postColis = (formData) => {

  
  return async (dispatch) => {
    try {
      const response = await axioClient.post(`Coli`, formData);
      Swal.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: "Veuillez vérifier vos informations de connexion.",
      });
      console.log(JSON.stringify(formData))
      throw error; // Renvoie l'erreur pour le traitement ultérieur
    }
  };
};

export const postDepenseColis = (formDataDepense) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.post(`Depensecolis`, formDataDepense);
      Swal.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: "Veuillez vérifier vos informations de connexion.",
      });
      console.log(JSON.stringify(formDataDepense))
      throw error; // Renvoie l'erreur pour le traitement ultérieur
    }
  };
}

export const getColis = (dateDebut, datefin) => {
  return axioClient.get(`filtreColi/${dateDebut}/${datefin}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) =>{
      window.location.href = "/"
    });
};

export const getColisDepense = (dateDebut, dateFin) => {
  return axioClient.get(`filtreDepenseColi/${dateDebut}/${dateFin}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) =>{
      window.location.href = "/"
    });
};

export const getColiId = (id) => {
  return axioClient
    .get(`Coli/${id}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 404) {
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `Entre/${error}`,
        });
      }
    });
};

export const deleteColi = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axioClient.delete(`Coli/${id}`);
          Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
          window.location.reload();
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la suppression de la dépense",
            text: `${error.response.data.message}`,
          });
          throw error;
        }
      }
    });
  };
};

export const deleteDepenseColis = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axioClient.delete(`DepenseColi/${id}`);
          Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
          });
          window.location.reload();
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Erreur lors de la suppression de la dépense",
            text: `${error.response.data.message}`,
          });
          throw error;
        }
      }
    });
  };
}

export const putColi = (formData, id) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.put(`Coli/${id}`, formData);
      Swal.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
      window.location.href = "/conteneur";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la suppression de la dépense",
        text: `${error.response.data.message}`,
      });
      throw error;
    }
  };
};

export const updateColi = (formData, id) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.put(
        `Coli/${id}`,
        formData
      );
      Swal.fire({
        icon: "success",
        title: `${response.data.message}`,
      });
      window.location.href = "/conteneur";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur lors de la modification",
        text: `${error.response.data.message}`,
      });
      throw error;
    }
  };
};

//

export const impressionAllentrer = (dateDebut, datefin) => {
  return axioClient.get(`filtreColi/${dateDebut}/${datefin}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) =>{
      window.location.href = "/"
    });
};

