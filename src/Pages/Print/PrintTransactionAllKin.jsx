/* eslint-disable react/jsx-key */
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
import { getBalancetKinshasa, getCounrDepotKinshasa, getCounrRetraitKinshasa, getEntreJourneAllKin } from "../../actions/SortieAction";
import { getCounrDepenseKinshasa } from "../../actions/DepenseAction";
//import { getEntreJourneAllKin, } from "../../actions/EntreAction";

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
  },
  tableCol2: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#FFFFFF",
    backgroundColor: "#000000",
    borderRightWidth: 1 /* Ajoute une ligne verticale à droite de chaque cellule */,
    borderBottomWidth: 1,
    color: "#FFFFFF",
},
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
  },
  tableCol: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderRightWidth: 1 /* Ajoute une ligne verticale à droite de chaque cellule */,
    borderBottomWidth: 1,
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

const PrintTrasanctionAllKink = () => {
  const [etatData, setEtatData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [typeText, setTypeText] = useState("");
  let { id } = useParams();
  const [depenseData, setdepenseData] = useState([]);
  const [countDepot, setCountDepot] = useState(0);
  const [countSorti, setCountSorti] = useState(0);
  const [countDepense, setCountDepense] = useState(0);
  const [countTotal, setcountTotal] = useState(0);

  useEffect(() => {
    getEntreJourneAllKin(id)
      .then((membre) => {
        setEtatData(membre);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    getCounrDepotKinshasa()
      .then((membre) => {
        setCountDepot(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrRetraitKinshasa()
      .then((membre) => {
        setCountSorti(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getBalancetKinshasa()
      .then((membre) => {
        setcountTotal(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrDepenseKinshasa()
      .then((membre) => {
        setCountDepense(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const datanow = new Date();
  const formattedDate = dateFormat(datanow, "dd/mm/yyyy");

  const getTypeText = (etat) => {
    let typeText = "";
    if (etat === "1") {
      typeText = "Entre";
    } else if (etat === "2") {
      typeText = "Sorti";
    } else if (etat === "3") {
      typeText = "Transaction spacial";
    } else {
      typeText = etat;
    }
    return typeText;
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View
              style={[
                styles.row,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
              ]}
            >
              <View style={[styles.colMd6, { alignItems: "justify-between" }]}>
                <Image
                  source={{ uri: "ab.jpg" }}
                  style={{ width: 200, height: 100 }}
                />
              </View>
              <View
                style={[
                  styles.colMd6,
                  { alignItems: "justify-end", marginRight: 16 },
                ]}
              >
                <Text
                  style={{ fontSize: 12, textDecoration: "underline" }}
                >{`Le ${dateFormat(datanow, "dd/mm/yyyy")}`}</Text>
              </View>
            </View>

            <View style={styles.body}>
              <View className="text-center">
                <Text style={{ fontSize: 15, textDecoration: "underline" }}>
                  Transactions du jour (Kinshasa){" "}
                </Text>
                <Text> </Text>
              </View>
              <View>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Emeteur</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Recepteur</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Telephone</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Pays provenance
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Pays destinaaire
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Montant</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Type transaction
                      </Text>
                    </View>
                  </View>
                  {etatData.map((etatDatas) => (
                    <View style={styles.tableRow}>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.nom_emateur}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.nom_recepteur}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.telephone}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {`${
                            etatDatas.pays_provenance?.id_pays?.intitule || ""
                          } - ${etatDatas.pays_provenance?.intitule || ""}`}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {`${
                            etatDatas.pays_destinateut?.id_pays?.intitule || ""
                          } - ${etatDatas.pays_destinateut?.intitule || ""}`}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.montant}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {getTypeText(etatDatas.etat)}
                        </Text>
                      </View>
                    </View>
                  ))}
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>Balance matin</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>
                        {parseInt(countTotal) -
                          parseInt(countDepot) +
                          (parseInt(countSorti) + parseInt(countDepense))}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>Depot</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>{countDepot}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>Soriir</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>{countSorti}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>Depense</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>{countDepense}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>Reste</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell}>{countTotal}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PrintTrasanctionAllKink;
