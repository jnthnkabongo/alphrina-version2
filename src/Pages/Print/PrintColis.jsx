import React, { useState, useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import dateFormat from "dateformat";
import { useParams } from "react-router-dom";
import { getColis } from "../../actions/ColisAction";

const styles = StyleSheet.create({
    page: {
      backgroundColor: "#ffffff",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    Titre: {
      margin: 10,
      padding: 10,
      textAlign: "center",
    },
    body: {
      margin: 10,
      padding: 10,
      textAlign: "center",
      size: 50,
    },
    // table: {
    //   margin: 10,
    //   padding: 10,
    //   textAlign: "center",
    //   fontSize: 15,
    // },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      //borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableColHeader: {
      width: "25%",
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderBottomColor: "#000",
      borderWidth: 1,
      backgroundColor: "#f0f0f0",
    },
    tableCol: {
      width: "25%",
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderRightWidth: 1 /* Ajoute une ligne verticale à droite de chaque cellule */,
      borderBottomWidth: 1,
      borderLeftWidth: 1
    },
    tableCellHeader: {
      margin: 5,
      fontSize: 12,
      fontWeight: 500,
    },
    tableCell: {
      margin: 5,
      fontSize: 10,
    },
  });

  const fakeData = [
    {
      id: 1,
      marque: "Marque1",
      modele: "Modele1",
      immatriculation: "1234ABC",
      nom_carb: "Essence",
      qteplein: "50",
      kilometrage: "10000",
      nom: "Nom1",
      prenom: "Prenom1",
      noms: "Utilisateur1",
    },
    {
      id: 1,
      marque: "Marque1",
      modele: "Modele1",
      immatriculation: "1234ABC",
      nom_carb: "Essence",
      qteplein: "50",
      kilometrage: "10000",
      nom: "Nom1",
      prenom: "Prenom1",
      noms: "Utilisateur1",
    },
    // ... autres enregistrements
  ];
  
const PrintColis = () => {
    const [carss, setcarsss] = useState(fakeData);
    const datanow = new Date();
    const formattedDate = dateFormat(datanow, "dd/mm/yyyy");
    const [etatDatas, setetatDatas] = useState([]);
    const [isLoading, setloading] = useState(true);
    let { dateDebut, dateFin} = useParams();

    // useEffect(() => {
    //   setloading(true);
    //   getColis(dateDebut, dateFin)
    //     .then((membre) => {
    //       setetatDatas(membre);
    //       console.log(etatDatas);
    //       setloading(false)
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },[]);

    useEffect(() => {
      setloading(true);
      getColis(dateDebut, dateFin)
        .then((membre) => {
          console.log("Received data:", membre); // Log the full response
          if (Array.isArray(membre)) {
            setetatDatas(membre);
          } else if (membre && typeof membre === 'object') {
            // Check if it has a data property that is an array
            if (Array.isArray(membre.data)) {
              setetatDatas(membre.data);
            } else {
              console.error("Expected an array but received:", membre);
              setetatDatas([]); // Reset to empty if response is not an array
            }
          } else {
            console.error("Unexpected response format:", membre);
            setetatDatas([]);
          }
          setloading(false);
        })
        .catch((error) => {
          console.error("Error fetching colis:", error);
          setloading(false);
        });
    }, [dateDebut, dateFin]);
  
    if (isLoading) {
      return <Text>Loading...</Text>; // Optional loading state
    }

    return (
        <>
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <View
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <View className="col-md-6">
                      <Image src="ab.jpg" style={{ width: 200, height: 100 }} />
                    </View>
                  </View>apitransfert.wedesigngroupe.com
                </View>
                <View style={styles.body}>
                  <div className="text-center">
                    <Text style={{ fontSize: 15, textDecoration: "underline" }}>
                      Liste Colis Du {} Au {}
                    </Text>
                    <Text> </Text>
                  </div>
                  <div>
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Nom Agent</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Nom Colis</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Nombre Total Colis</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Prix Total</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Prix Unitaire</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Montant à Payer</Text>
                        </View>
                      </View>
    
                      {etatDatas.map((etatData, index) => (
                           <View key={index} style={styles.tableRow}>
                            
                            <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatData.nomagent ?? 'Aucune data'}</Text>
                           </View>
                            <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatData.nomcolis}</Text>
                           </View>
                           <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatData.nbrtotalcolis}</Text>
                           </View>
                           <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatData.prixtotal}</Text>
                           </View>
                           <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatData.prixunitaire}</Text>
                           </View>
                           <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatData.montantpayer}</Text>
                           </View>
                       </View>
                      ))} 
                    </View>
                  </div>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </>
      );
};

export default PrintColis;