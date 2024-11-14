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
import { impressionAllentrer } from "../../actions/ColisAction";

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
    const [etatData, setetatData] = useState([]);
    const [isLoading, setloading] = useState(true);
    let { id } = useParams();

    useEffect(() => {
        impressionAllentrer(id)
            .then((member) => {
                setetatData(member);

                setloading(false);
            })
    }, [id]);

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
                      Colis N° {etatData.nomagent}
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
                          <Text style={styles.tableCellHeader}>Montant</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Prix Total</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Total Kilo Colis</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                          <Text style={styles.tableCellHeader}>Type Colis</Text>
                        </View>
                      </View>
    
                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>
                            {etatData.nomagent}
                          </Text>
                        </View>
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>
                            {etatData.nom_recepteur}
                          </Text>
                        </View>
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>{etatData.telephone}</Text>
                        </View>
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>{`${
                            etatData.pays_provenance?.id_pays?.intitule || ""
                          } - ${etatData.pays_provenance?.intitule || ""}`}</Text>
                        </View>
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>
                            {`${
                              etatData.pays_destinateut?.id_pays?.intitule || ""
                            } - ${etatData.pays_destinateut?.intitule || ""}`}
                          </Text>
                        </View>
                       
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}></Text>
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