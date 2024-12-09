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
import { getColisDepense, impressionAllentrer } from "../../actions/ColisAction";
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
      borderWidth: 1,
      backgroundColor: "#f0f0f0",
    },
    tableCol: {
      width: "100%",
      borderStyle: "solid",
      borderColor: "#bfbfbf",
      borderRightWidth: 1 /* Ajoute une ligne verticale à droite de chaque cellule */,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
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
  
const PrintColisDepense = () => {
    const datanow = new Date();
    const formattedDate = dateFormat(datanow, "dd/mm/yyyy");
    const [etatData, setetatData] = useState([]);
    const [isLoading, setloading] = useState(true);
    const [Depense, setetatDepense] = useState([]);
    const [typeText, settypeText] = useState("");
    const [typeColor, settypeColor] = useState("");
    let { dateDebut, dateFin } = useParams();

    useEffect(() =>{
      setloading(true);
      getColisDepense(dateDebut, dateFin)
        .then((membre) => {
          setetatData(membre);
          setetatDepense(membre.depense);
          console.log(etatData)
          setloading(false);
        })
        .catch((error) =>{
          console.log(error);
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
                    style={{ display: "flex",flexDirection: "row", justifyContent: "space-between" }}
                  >
                    <View className="col-md-6">
                      <Image src={logo} style={{ width: 200, height: 100 }} /> apitransfert.wedesigngroupe.com
                    </View>
                    <View className="col-md-6 mt-2">
                      <Text>Date: {formattedDate}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.body}>
                  <div className="text-center">
                    <Text style={{ fontSize: 15, textDecoration: "underline" }}>
                      Liste Depense Colis du { dateDebut} Au {dateFin}
                    </Text>
                    <Text> </Text>
                  </div>
                  <div>
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}># </Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Nom </Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Montant</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Motif</Text>
                        </View>
                      </View>
    
                      {etatData.map((etatDatas, index) => (
                           <View key={index} style={styles.tableRow}>
                            
                            <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatDatas.id}</Text>
                           </View>
                            <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatDatas.nom}</Text>
                           </View>
                           <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatDatas.montant}</Text>
                           </View>
                           <View style={styles.tableCol}>
                               <Text style={styles.tableCell}>{etatDatas.motif}</Text>
                           </View>
                       </View>
                      ))}
                      <View style={[styles.tableRows, {marginTop:30}]}>
                          <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Nombre Total depense : 
                            </Text>
                          </View>
                          <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Montant total depense : </Text>
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

export default PrintColisDepense;