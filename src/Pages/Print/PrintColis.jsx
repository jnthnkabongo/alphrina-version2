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
import logo from '../../../public/ab.jpg';

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
    tableRows: {
      flexDirection: 'row', // Aligne les enfants en ligne
      justifyContent: 'space-between', // Espace égal entre les colonnes
      padding: 10,
      marginTop: 20, // Ajoute un peu de remplissage
      },
      
      tableCells: {
          fontFamily: 46,
          fontSize: 40,
          color: '#000',
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
      width: "100%",
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderRightWidth: 1 /* Ajoute une ligne verticale à droite de chaque cellule */,
      borderBottomWidth: 1,
      borderLeftWidth: 1
    },
    tableColHea: {
      width:"100%",
      backgroundColor: "#bfbfbf"
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
    const [Depense, setetatDepense] = useState([]);
    const [Payer, setetatPayer] = useState([]);
    const [Colis, setetatColis] = useState([]);
    const [Balance, setetatBalance] = useState([]);
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
            if (Array.isArray(membre.agents)) {
              setetatDatas(membre.agents);
              setetatDepense(membre.depense);
              setetatBalance(membre.balance);
              setetatColis(membre.totalcolisentre);
              setetatPayer(membre.totalPayer);
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
                    style={{ display: "flex",flexDirection: "row" ,justifyContent: "space-between" }}
                  >
                    <View className="col-md-6">
                      <Image src={logo} style={{ width: 200, height: 100 }}/>apitransfert.wedesigngroupe.com
                    </View>
                    <View className="col-md-6">
                      <Text>Date: {formattedDate}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.body}>
                  <div className="text-center">
                    <Text style={{ fontSize: 15, textDecoration: "underline" }}>
                      Liste Colis Du { dateDebut} Au {dateFin}
                    </Text>
                    <Text> </Text>
                  </div>
                  <div>
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Nom Client</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Nom Colis</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Nombre Total Colis</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Prix Unitaire</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Prix Total</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Montant à Payer</Text>
                        </View>
                      </View>
                      {etatDatas.map((etatData, index) => (
                          <View key={index} style={styles.agentContainer}>
                              {/* Affichage du nom de l'agent */}
                              <View style={styles.tableRow}>
                                  <View style={styles.tableColHea}>
                                      <Text style={styles.tableCell}>{etatData.nom ?? 'Aucune data'} </Text>
                                  </View>
                              </View>
                              <View style={styles.tableRow}>
                                <View>
                                  <Text style={styles.tableCell}>{etatData.balance}</Text>
                                </View>
                            </View>
                              {/* Parcours des colis de l'agent */}
                              {etatData.colis.length > 0 ? ( // Vérifiez s'il y a des colis
                                  etatData.colis.map((colis, colisIndex) => (
                                      <View key={colisIndex} style={styles.tableRow}>
                                          <View style={styles.tableCol}>
                                              <Text style={styles.tableCell}>{colis.nom_client ?? 'Aucune data'}</Text>
                                          </View>
                                          <View style={styles.tableCol}>
                                              <Text style={styles.tableCell}>{colis.nomcolis ?? '0'}</Text>
                                          </View>
                                          <View style={styles.tableCol}>
                                              <Text style={styles.tableCell}>{colis.nbrtotalcolis ?? '0'}</Text>
                                          </View>
                                          <View style={styles.tableCol}>
                                              <Text style={styles.tableCell}>{colis.prixunitaire ?? '0'}</Text>
                                          </View>
                                          <View style={styles.tableCol}>
                                              <Text style={styles.tableCell}>{colis.prixtotal ?? '0'}</Text>
                                          </View>
                                          <View style={styles.tableCol}>
                                              <Text style={styles.tableCell}>{colis.montantpayer ?? '0'}</Text>
                                          </View>
                                      </View>
                                  ))
                              ) : (
                                  <View style={styles.tableRow}>
                                      <Text style={styles.tableCell}>Aucun colis disponible</Text>
                                  </View>
                              )}
                          </View>
                      ))}
                          <View style={[styles.tableRows, {marginTop:30}]}>

                              <View style={styles.tableCol}>
                                  <Text style={styles.tableCell}>Nombre Colis: {Colis}</Text>
                              </View>
                              <View style={styles.tableCol}>
                                  <Text style={styles.tableCell}>Total payer: {Payer}</Text>
                              </View>
                              <View style={styles.tableCol}>
                                  <Text style={styles.tableCell}>Depense: {Depense}</Text>
                              </View>
                              <View style={styles.tableCol}>
                                  <Text style={styles.tableCell}>Reste: {Balance}</Text>
                              </View>
                          </View>
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